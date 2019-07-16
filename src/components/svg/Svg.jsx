// @flow

import React from 'react';
import classNames from 'classnames';

function Svg({ klassName, icon }) {
  return (
    <svg className={classNames(klassName, 'ui-svg')}>
      <use xlinkHref={`sprite.svg#${icon}`} />
    </svg>
  );
}

export default Svg;
