// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  children: any,
  styleMod: string,
  style: any
};

function Section({ children, styleMod, style }: PropsType) {
  return <section className={classNames(style.section, style[`mod-${styleMod}`])}>{children}</section>;
}

export default Section;
