// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  styleClassName: string,
  icon: string
};

function Svg({ styleClassName = null, icon }: PropsType) {
  return (
    <svg className={classNames(styleClassName, 'ui-svg')}>
      <use xlinkHref={`/sprite.svg#${icon}`} />
    </svg>
  );
}

export default Svg;
