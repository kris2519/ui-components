// @flow

import React from 'react';
import classNames from 'classnames';

const UiSvg = ({ klassName, icon }) => (
  <svg className={classNames(klassName, 'ui-svg')}>
    <use xlinkHref={`sprite.svg#${icon}`} />
  </svg>
);

export default UiSvg;
