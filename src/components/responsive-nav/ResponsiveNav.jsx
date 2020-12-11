// @flow

import React, { useReducer, useRef, createRef, useEffect } from 'react';

import classNames from 'classnames';

import useWindowWidth from 'hooks/useWindowWidth';

type PropsType = {
  /** стили (CSS-модули) */
  style: {},
  /** локаль */
  locale: string,
  /** дочерний элемент */
  children: any
};

function responsiveNavReducer(state, action) {
  switch (action.type) {
    case 'SHOW_VISIBLE_ITEMS':
      return { nav: action.nav, ddNav: action.ddNav };
    case 'SHOW_ALL_ITEMS':
      return { nav: state.nav.map(item => ({ visible: true })), ddNav: [] };
    default:
      return state;
  }
}

function calculateVisibleItems({ navWrapperEl, navEl, ddNavWrapperEl, nav }) {
  const widths = [];
  const maxWidth = navWrapperEl.offsetWidth;
  const ddNav = [];
  let currentWidth = ddNavWrapperEl.offsetWidth;
  let visibleElementsCount = 0;
  let hasDd = false;
  navEl.forEach(item => (item ? widths.push(item.current.offsetWidth) : null));
  widths.forEach(width => {
    if (!hasDd && currentWidth + width < maxWidth) {
      currentWidth += width;
      visibleElementsCount += 1;
    } else {
      hasDd = true;
    }
  });
  navEl.forEach((item, index) => {
    /* $flow-disable-line */
    const navItem = nav[index];
    if (item) {
      if (index < visibleElementsCount) {
        /* $flow-disable-line */
        navItem.visible = true;
      } else {
        /* $flow-disable-line */
        navItem.visible = false;
        ddNav.push(navItem);
      }
    }
  });
  return { nav, ddNav };
}

function ResponsiveNav({ style = {}, locale = 'en', children, minDesktopWindowWidth = 968 }: PropsType) {
  const initialState = {
    nav: Array.from(Array(children.length), item => ({ visible: false })),
    ddNav: []
  };
  const [state, dispatch] = useReducer(responsiveNavReducer, initialState);
  const windowWidth = useWindowWidth();
  const navWrapperRef = useRef();
  const navRef = useRef(state.nav.map(() => createRef()));
  const ddNavWrapperRef = useRef();

  useEffect(() => {
    if (windowWidth > minDesktopWindowWidth) {
      const { nav, ddNav } = calculateVisibleItems({
        navWrapperEl: navWrapperRef.current,
        navEl: navRef.current,
        ddNavWrapperEl: ddNavWrapperRef.current,
        nav: state.nav
      });
      return dispatch({ type: 'SHOW_VISIBLE_ITEMS', nav, ddNav });
    }
    return dispatch({ type: 'SHOW_ALL_ITEMS' });
  }, [locale, windowWidth]);

  return (
    <nav className={style.nav} ref={navWrapperRef}>
      {state.nav.length > 0 &&
        React.Children.map(
          children,
          (child, index) =>
            !!child && (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={classNames(style.navItem, {
                  [style.isInvisible]: typeof state.nav[index].visible === 'boolean' && !state.nav[index].visible
                })}
                ref={navRef.current[index]}
              >
                {child}
              </div>
            )
        )}
      <div
        className={classNames(style.ddNav, { [style.isInvisible]: !(state.ddNav.length > 0) })}
        ref={ddNavWrapperRef}
      >
        <button className={style.ddNavBtn} type="button">
          <i className={style.ddNavBtnIco} />
        </button>
        <div className={style.ddNavListHolder}>
          <div className={style.ddNavList}>
            {state.ddNav.length > 0 &&
              React.Children.map(
                children,
                (child, index) =>
                  index >= state.nav.length - state.ddNav.length &&
                  !!children[index] && (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index} className={style.ddNavItem}>
                      {children[index]}
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ResponsiveNav;
