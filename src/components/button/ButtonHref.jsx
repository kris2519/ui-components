// @flow

import React from 'react';
import classNames from 'classnames';
import Svg from 'components/svg/Svg';
import type { ButtonType } from './ButtonType';

type PropsType = ButtonType;

function ButtonHref({
  children,
  size = 'default',
  type = 'primary',
  icon = null,
  styleClassName,
  url,
  isDisabled = false,
  style
}: PropsType) {
  return (
    <a
      /* $flow-disable-line */
      className={classNames(style.btn, style[`btn-${type}`], style[`btn-${size}`], styleClassName, {
        [style.isDisabled]: isDisabled
      })}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && <Svg icon={icon} styleClassName={style.btnIcon} />}
      <span className={style.btnText}>{children}</span>
    </a>
  );
}

export default ButtonHref;
