// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  /** изображения (4 размера, опционально) */
  img: {
    small?: string | null,
    medium?: string | null,
    big: string | null,
    large?: string | null
  },
  /** ширина окна браузера для выбора изображения (3 размера, опционально) */
  maxWidth: {
    small?: string,
    medium?: string,
    large?: string
  },
  /** альтернативный текст для изображения */
  alt: string,
  /** стили (CSS-модули) */
  style: {},
  /** лоадер для загрузки изображения */
  isLoading: boolean
};

function Img({ img, alt, maxWidth, style = {}, isLoading }: PropsType) {
  return (
    <picture className={classNames(style.imgHolder, { 'is-loading': isLoading })}>
      {!isLoading && (
        <React.Fragment>
          {maxWidth.small && (
            <source srcSet={`${img.small} 1x, ${img.medium} 2x`} media={`(max-width: ${maxWidth.small})`} />
          )}
          {maxWidth.medium && (
            <source srcSet={`${img.medium} 1x, ${img.big} 2x`} media={`(max-width: ${maxWidth.medium})`} />
          )}
          {maxWidth.large && (
            <source srcSet={`${img.big} 1x, ${img.large} 2x`} media={`(max-width: ${maxWidth.large})`} />
          )}
          <img className={style.img} src={img.big} alt={alt} />
        </React.Fragment>
      )}
    </picture>
  );
}

export default Img;
