// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  children: any,
  orientation: string,
  style: any
};

function SectionNav({ children, orientation = 'top', style }: PropsType) {
  return <div className={classNames(style.sectionNav, style[`mod-${orientation}`])}>{children}</div>;
}

export default SectionNav;
