// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { createSelector } from 'reselect';

type PropsType = {
  /** текущая локаль */
  locale?: string,
  /** url */
  to: string | Object,
  /** boolean значение, указывающая на использование NavLink компонента */
  isNavLink: boolean,
  /** redux метод */
  dispatch?: () => {},
  /** дочерний элемент */
  children: any
};

function LocalizedLink(props: PropsType) {
  const { children, locale = 'en', to, dispatch, isNavLink, ...rest } = props;

  /* $flow-disable-line */
  let localTo = process.env.layout === 'layout' ? `/${locale}/layout${to}` : `/${locale}${to}`;
  if (typeof to === 'object') {
    localTo = { ...to, pathname: `/${locale}${to.pathname}` };
  }

  return isNavLink ? (
    <NavLink to={localTo} {...rest}>
      {children}
    </NavLink>
  ) : (
    <Link to={localTo} {...rest}>
      {children}
    </Link>
  );
}

LocalizedLink.defaultProps = {
  locale: 'en',
  dispatch: () => {}
};

const getCurrentLocale = state => state.locale.currentLocale;
const getLocale = createSelector(
  [getCurrentLocale],
  locale => locale
);

const mapStateToProps = (state): { locale: string } => ({
  locale: getLocale(state)
});

export default connect(mapStateToProps)(LocalizedLink);
