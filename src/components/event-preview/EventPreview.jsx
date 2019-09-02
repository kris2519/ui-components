// @flow
/* eslint react/jsx-one-expression-per-line: 0 */

import React from 'react';
import classNames from 'classnames';
import Img from 'components/img/Img';

import type { EventPreviewType } from './EventPreviewType';

type PropsType = EventPreviewType;

function EventPreview({
  img,
  title,
  isLoaded,
  status,
  statusText,
  discipline,
  date,
  prize,
  place,
  style,
  imgMaxWidth
}: PropsType) {
  return (
    <div className={classNames(style.eventPreview, style[`mod-${status}`])}>
      <div className={style.eventPreviewImg}>
        <Img isLoaded={isLoaded} img={img} alt={title} maxWidth={imgMaxWidth} style={style} />
      </div>
      <div className={style.eventPreviewData}>
        <p className={style.eventPreviewInfo}>
          {date && <span className={style.eventPreviewDate}>{date}</span>}
          {discipline && <span className={style.eventPreviewDiscipline}>{discipline}</span>}
        </p>
        <p className={style.eventPreviewTitle}>{title}</p>
        {statusText && <p className={style.eventPreviewStatus}>statusText</p>}
        <div className={style.eventPreviewAdditionalInfo}>
          {place && <p className={style.eventPreviewPlace}>{place}</p>}
          <p className={style.eventPreviewPrize}>{prize}</p>
        </div>
      </div>
    </div>
  );
}

export default EventPreview;
