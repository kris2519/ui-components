// @flow

import React from 'react';
import DateTime from 'helpers-components/DateTime';

import UiSvg from '_ui/svg/UiSvg';

import type { VideoNewsItemType } from 'flow-types/videoNews';

import aside from './Aside.css';
import regular from './Regular.css';

type PropsType = {
  preview: VideoNewsItemType,
  locale: string,
  timezone: string,
  type: string
};

function VideosPreview({ preview, type = 'aside' }: PropsType) {
  const getStyleType = () => {
    switch (type) {
      case 'regular':
        return regular;
      default:
        return aside;
    }
  };
  const style = getStyleType();

  return (
    <div className={style.videoPreview}>
      <picture className={style.videoPreviewImgHolder}>
        <source srcSet={`${preview.img.thumb_small} 1x, ${preview.img.thumb_medium} 2x`} />
        <img className={style.videoPreviewImg} src={preview.img.thumb_medium} alt={preview.title} />
        <UiSvg styleClassName={style.videoPreviewIcon} icon="play-circle" />
      </picture>
      {type !== 'aside' && (
        <p className={style.videoPreviewData}>
          <DateTime dateTime={preview.publishedAt} format="date_short_5" />{' '}
          {preview.discipline && `/ ${preview.discipline}`}
        </p>
      )}
      <p className={style.videoPreviewTitle}>{preview.title}</p>
    </div>
  );
}

export default VideosPreview;
