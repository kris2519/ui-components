// @flow

import React from 'react';
import classNames from 'classnames';

import Svg from 'components/svg/Svg';

type PropsType = {
  /** иконка соц. сети */
  icon: string,
  /** callback, который вызывается при клике на кнопку */
  onClick: () => void,
  /** дочерний элемент */
  children: any,
  /** стили (CSS-модули) */
  style: {}
};

function SocialButton({ icon, onClick, children = null, style = {} }: PropsType) {
  return (
    <button type="button" className={classNames(style.social, style[`mod-${icon}`])} onClick={onClick}>
      <Svg styleClassName={style.socialIcon} icon={icon} />
      {children}
    </button>
  );
}

export default SocialButton;
