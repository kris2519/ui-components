// @flow

import React from 'react';
import classNames from 'classnames';
import setLoadingClassname from 'utils/setLoadingClassname';

import Svg from 'components/svg/Svg';
import Img from 'components/img/Img';

type PropsType = {
  /** лоадер для загрузки изображения */
  isLoading: boolean,
  /** изображения (4 размера, опционально) */
  img: {
    [name: string]: string | null
  },
  /** заголовок */
  title: string,
  /** ширина окна браузера для выбора изображения (3 размера, опционально) */
  imgMaxWidth: {
    [name: string]: string | null
  },
  /** иконка видео */
  videoIcon: string,
  /** время публикации */
  publishedAt: any,
  /** дисциплина */
  discipline: string,
  /** стили (CSS-модули) */
  style: {},
  /** длительность */
  duration: string
};

function VideoPreview({
  title,
  img,
  imgMaxWidth,
  duration,
  discipline,
  publishedAt,
  isLoading,
  videoIcon,
  style = {}
}: PropsType) {
  const loadingClassName = setLoadingClassname(isLoading);
  return (
    <div className={style.videoPreview}>
      <div className={style.videoPreviewImgHolder}>
        <Img isLoading={isLoading} img={img} alt={title} maxWidth={imgMaxWidth} style={style} />
        <span className={style.videoPreviewIconHolder}>
          <Svg styleClassName={style.videoPreviewIcon} icon={videoIcon} />
        </span>
      </div>
      {duration && <span className={style.videoPreviewDuration}>{duration}</span>}
      <p className={classNames(style.videoPreviewData, loadingClassName)}>
        {publishedAt && <span className={style.videoPreviewDate}>{publishedAt}</span>}
        {discipline && <span className={style.videoPreviewDiscipline}>{discipline}</span>}
      </p>
      <p className={classNames(style.videoPreviewTitle, loadingClassName)}>{title}</p>
    </div>
  );
}

export default VideoPreview;
