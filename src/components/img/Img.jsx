// @flow

import React from 'react';

type PropsType = {
  img: {
    small: string,
    medium: string,
    big: string
  },
  alt: string,
  style: any
};

function Img({ img, alt, style }: PropsType) {
  return (
    <picture className={style.imgHolder}>
      <source srcSet={`${img.small} 1x, ${img.medium} 2x`} media="(max-width: 500px)" />
      <source srcSet={`${img.medium} 1x, ${img.big} 2x`} media="(max-width: 1440px)" />
      <source srcSet={`${img.big} 1x, ${img.large} 2x`} media="(max-width: 1920px)" />
      <img className={style.img} src={img.large} alt={alt} />
    </picture>
  );
}

export default Img;
