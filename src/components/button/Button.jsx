// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type PropsType = {
  /** размер кнопки */
  size: string,
  /** тип кнопки */
  type: string,
  /** иконка */
  icon: any,
  /** имя css класса */
  klassName: string,
  /** boolean значение, указывающая на доступность кнопки */
  isDisabled: boolean,
  /** текст кнопки */
  text: string,
  /** callback, который вызываестя при клике на кнопку */
  onClick: ?() => void,
  /** url */
  to: string,
  url: string
};

function Button({
  text = null,
  size = 'default',
  type = 'primary',
  icon = null,
  klassName,
  onClick,
  isDisabled = false,
  to = null,
  url = null,
  style
}: PropsType) {
  return (
    <React.Fragment>
      {onClick && (
        <button
          type="button"
          /* $flow-disable-line */
          className={classNames(style.btn, style[`btn-${type}`], style[`btn-${size}`], klassName, {
            [style.isDisabled]: isDisabled
          })}
          onClick={onClick}
        >
          {icon}
          <span className={style.btnText}>{text}</span>
        </button>
      )}
      {to && (
        <Link
          /* $flow-disable-line */
          className={classNames(style.btn, style[`btn-${type}`], style[`btn-${size}`], klassName, {
            [style.isDisabled]: isDisabled
          })}
          to={to}
        >
          {icon}
          <span className={style.btnText}>{text}</span>
        </Link>
      )}
      {url && (
        <a
          /* $flow-disable-line */
          className={classNames(style.btn, style[`btn-${type}`], style[`btn-${size}`], klassName, {
            [style.isDisabled]: isDisabled
          })}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
          <span className={style.btnText}>{text}</span>
        </a>
      )}
    </React.Fragment>
  );
}

export default Button;
