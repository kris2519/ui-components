// @flow

import React from 'react';
import classNames from 'classnames';
import setLoadingClassname from 'utils/setLoadingClassname';

import Svg from 'components/svg/Svg';
import Img from 'components/img/Img';

type PropsType = {
  /** заголовок */
  title: string,
  /** первый абзац или фабула */
  description: any,
  /** отобраение изображения (default: true) */
  hasImg: boolean,
  /** изображения (4 размера, опционально) */
  img: {
    [name: string]: string | null
  },
  /** ширина окна браузера для выбора изображения (3 размера, опционально) */
  imgMaxWidth: {
    [name: string]: string | null
  },
  /** лоадер для загрузки изображения */
  isLoading: boolean,
  /** время публикации */
  publishedAt: any,
  /** дисциплина, опционально */
  discipline: string,
  /** стили (CSS-модули) */
  style: {},
  /** отображение иконки для видео-новости */
  isVideo: boolean,
  /** иконка видео-новости */
  videoIcon: string,
  /** отображение фабулы */
  hasFabula: boolean,
  /** отображение 1 абзаца новости */
  hasDescription: boolean,
  /** дочерний элемент */
  children: any
};

function NewsPreview({
  style = {},
  isLoading = false,
  img,
  title,
  imgMaxWidth,
  videoIcon = null,
  publishedAt = null,
  discipline = null,
  description,
  isVideo = false,
  hasFabula = false,
  hasDescription = false,
  hasImg = true,
  children = null
}: PropsType) {
  const loadingClassName = setLoadingClassname(isLoading);
  return (
    <div className={style.newsPreview}>
      {hasImg && (
        <div className={style.newsPreviewImg}>
          <Img isLoading={isLoading} img={img} alt={title} maxWidth={imgMaxWidth} style={style} />
          {isVideo && (
            <span className={style.newsVideoIconHolder}>
              <Svg styleClassName={style.newsVideoIcon} icon={videoIcon} />
            </span>
          )}
        </div>
      )}
      <div className={style.newsPreviewInfo}>
        <p className={classNames(style.newsPreviewData, loadingClassName)}>
          {publishedAt && <span className={style.newsPreviewDate}>{publishedAt}</span>}
          {discipline && <span className={style.newsPreviewDiscipline}>{discipline}</span>}
        </p>
        <p className={classNames(style.newsPreviewTitle, loadingClassName)}>{title}</p>
        {hasFabula && <p className={classNames(style.newsPreviewDescription, loadingClassName)}>{description}</p>}
        {hasDescription && (
          <p
            className={classNames(style.newsPreviewDescription, loadingClassName)}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {children}
      </div>
    </div>
  );
}

export default NewsPreview;
