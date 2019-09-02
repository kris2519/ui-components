// @flow

import React from 'react';
import classNames from 'classnames';

function Svg({ styleClassName, icon }) {
  return (
    <svg className={classNames(styleClassName, 'ui-svg')}>
      <use xlinkHref={`sprite.svg#${icon}`} />
    </svg>
  );
}

export default Svg;
