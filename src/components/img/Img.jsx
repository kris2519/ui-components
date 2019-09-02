// @flow

import React from 'react';

type PropsType = {
  img: {
    small: string,
    medium: string,
    big: string,
    large: string
  },
  maxWidth: {
    small: string,
    medium: string,
    large: string
  },
  alt: string,
  style: any,
  isLoaded: boolean
};

function Img({ img, alt, maxWidth, style, isLoaded }: PropsType) {
  return (
    <picture className={style.imgHolder}>
      {!isLoaded ? (
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
      ) : (
        <i className={style.imgHolderLoader} />
      )}
    </picture>
  );
}

export default Img;
