// @flow
/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react';
import classNames from 'classnames';
import setLoadingClassname from 'utils/setLoadingClassname';

import Img from 'components/img/Img';

type PropsType = {
  /** время проведения */
  date: any,
  /** дисциплина */
  discipline: string,
  /** изображения (4 размера, опционально) */
  img: {
    [name: string]: string | null
  },
  /** ширина окна браузера для выбора изображения (3 размера, опционально) */
  imgMaxWidth: {
    [name: string]: string | null
  },
  /** место проведения */
  place: any,
  /** приз */
  prize: string,
  /** статус */
  status: string,
  /** текст статуса */
  statusText: string,
  /** заголовок */
  title: string,
  /** стили (CSS-модули) */
  style: {}
};

function EventPreview({
  img,
  title,
  isLoading,
  status,
  statusText,
  discipline,
  date,
  prize,
  place,
  style = {},
  imgMaxWidth
}: PropsType) {
  const loadingClassName = setLoadingClassname(isLoading);
  return (
    <div className={classNames(style.eventPreview, style[`mod-${status}`])}>
      <div className={style.eventPreviewImg}>
        <Img isLoading={isLoading} img={img} alt={title} maxWidth={imgMaxWidth} style={style} />
      </div>
      <div className={style.eventPreviewData}>
        <p className={classNames(style.eventPreviewInfo, loadingClassName)}>
          {date && <span className={style.eventPreviewDate}>{date}</span>}
          {discipline && <span className={style.eventPreviewDiscipline}>{discipline}</span>}
        </p>
        <p className={classNames(style.eventPreviewTitle, loadingClassName)}>{title}</p>
        {statusText && <p className={style.eventPreviewStatus}>statusText</p>}
        <div className={classNames(style.eventPreviewAdditionalInfo, loadingClassName)}>
          {place && <p className={style.eventPreviewPlace}>{place}</p>}
          <p className={style.eventPreviewPrize}>{prize}</p>
        </div>
      </div>
    </div>
  );
}

export default EventPreview;
