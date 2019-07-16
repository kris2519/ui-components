// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  isActive: boolean,
  isEmpty: boolean,
  style: any, // css style
  children: any,
  onTabClick: () => void
};

function Tab({ isActive, isEmpty = null, onTabClick, style, children }: PropsType) {
  return (
    <li className={style.tab}>
      <button
        type="button"
        onClick={onTabClick}
        className={classNames(style.tabBtn, { [style.isActive]: isActive }, { [style.isEmpty]: isEmpty })}
      >
        <span className={style.tabText}>{children}</span>
      </button>
    </li>
  );
}

export default Tab;
