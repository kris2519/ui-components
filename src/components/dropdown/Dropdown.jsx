// @flow

import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import useClickOutside from 'hooks/useClickOutside';

type PropsType = {
  /** значение */
  title: any,
  /** дочерний элемент */
  children: any,
  /** стили (CSS-модули) */
  style: {},
  /** boolean значение, для отображения дочернего элемента дропдауна по ховеру  */
  isShowOnHover: boolean
};

function Dropdown({
  title,
  children,
  isShowOnHover = false,
  style = {},
  isActive = null,
  setActiveDdStatus = () => {}
}: PropsType) {
  const [isActiveDd, setActiveDd] = useState(false);

  const dropdownRef = useRef();
  useClickOutside(dropdownRef, () => {
    setActiveDd(false);
    setActiveDdStatus(false);
  });

  useEffect(() => {
    setActiveDd(isActive);
    setActiveDdStatus(isActive);
  }, [isActive]);

  function toggleDd() {
    setActiveDd(!isActiveDd);
    setActiveDdStatus(!isActiveDd);
  }

  return (
    <div
      className={classNames(style.dropdown, { [style.isActive]: isActiveDd })}
      onMouseEnter={isShowOnHover ? toggleDd : null}
      onMouseLeave={isShowOnHover ? toggleDd : null}
      ref={dropdownRef}
    >
      <button type="button" className={style.dropdownHeading} onClick={isShowOnHover ? null : toggleDd}>
        <p className={style.dropdownTitle}>{title}</p>
      </button>
      <div className={style.dropdownContentHolder}>
        <div className={style.dropdownContent}>{children}</div>
      </div>
    </div>
  );
}

export default Dropdown;
