// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  /** дочерний элемент */
  children: any,
  /** модификатор для стилизации */
  styleMod: string,
  /** стили (CSS-модули) */
  style: {}
};

function Section({ children, styleMod, style = {} }: PropsType) {
  return <section className={classNames(style.section, style[`mod-${styleMod}`])}>{children}</section>;
}

export default Section;
