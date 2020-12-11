// @flow

import React from 'react';
import classNames from 'classnames';
import Svg from 'components/svg/Svg';
import type { ButtonType } from './ButtonType';

type PropsType = ButtonType;

function Button({
  children,
  size = 'default',
  type = 'primary',
  icon = null,
  styleClassName,
  onClick,
  isDisabled = false,
  style = {}
}: PropsType) {
  return (
    <button
      type="button"
      /* $flow-disable-line */
      className={classNames(style.btn, style[`btn-${type}`], style[`btn-${size}`], styleClassName, {
        [style.isDisabled]: isDisabled
      })}
      onClick={onClick}
    >
      {icon && <Svg icon={icon} styleClassName={classNames(style.btnIcon, style[`btn-icon-${icon}`])} />}
      <span className={style.btnText}>{children}</span>
    </button>
  );
}

export default Button;
