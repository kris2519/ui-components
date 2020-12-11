// @flow

export type ButtonType = {
  /** размер кнопки */
  size?: string,
  /** тип кнопки */
  type?: string,
  /** иконка */
  icon?: any,
  /** имя css класса */
  styleClassName?: string,
  /** boolean значение, указывающая на доступность кнопки */
  isDisabled?: boolean,
  /** текст кнопки */
  children: any,
  /** callback, который вызываестя при клике на кнопку */
  onClick?: () => void,
  style: {},
  url?: string
};
