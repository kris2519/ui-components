// @flow

import React from 'react';
import classNames from 'classnames';

import Svg from 'components/svg/Svg';

type PropsType = {
  /** ссылка на соц. сеть */
  url: string,
  /** иконка соц. сети */
  icon: string,
  /** дочерний элемент */
  children: any,
  /** стили (CSS-модули) */
  style: {}
};

function SocialHref({ url, icon, children = null, style = {} }: PropsType) {
  return (
    <a href={url} className={classNames(style.social, style[`mod-${icon}`])} target="_blank" rel="noreferrer noopener">
      <Svg styleClassName={style.socialIcon} icon={icon} />
      {children}
    </a>
  );
}

export default SocialHref;
