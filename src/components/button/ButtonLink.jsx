// @flow

import React from 'react';
import classNames from 'classnames';
import Svg from 'components/svg/Svg';
import LocalizedLink from 'helpers-components/LocalizedLink';
import type { ButtonType } from './ButtonType';

type PropsType = ButtonType;

function ButtonLink({
  children,
  size = 'default',
  type = 'primary',
  icon = null,
  styleClassName,
  to,
  isDisabled = false,
  style
}: PropsType) {
  return (
    <LocalizedLink
      /* $flow-disable-line */
      className={classNames(style.btn, style[`btn-${type}`], style[`btn-${size}`], styleClassName, {
        [style.isDisabled]: isDisabled
      })}
      to={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && <Svg icon={icon} styleClassName={style.btnIcon} />}
      <span className={style.btnText}>{children}</span>
    </LocalizedLink>
  );
}

export default ButtonLink;
