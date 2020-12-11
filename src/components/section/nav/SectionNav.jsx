// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  /** дочерний элемент */
  children: any,
  /** позиция отображения */
  orientation: string,
  /** стили (CSS-модули) */
  style: {}
};

function SectionNav({ children, orientation = 'top', style = {} }: PropsType) {
  return <div className={classNames(style.sectionNav, style[`mod-${orientation}`])}>{children}</div>;
}

export default SectionNav;
