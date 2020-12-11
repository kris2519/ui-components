// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  /** стили (CSS-модули) */
  style: {},
  /** дочерний элемент */
  children: any
};

function Tooltip({ children, style = {} }: PropsType) {
  return (
    <div className={classNames('tooltip', style.tooltip)}>
      <div className={style.tooltipContent}>{children}</div>
    </div>
  );
}

export default Tooltip;
