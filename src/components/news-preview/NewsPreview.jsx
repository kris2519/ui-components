// @flow

import React from 'react';

import type { NewsPreviewType } from 'flow-types/news';

import Svg from 'components/svg/Svg';
import Img from 'components/img/Img';
import LocalizedLink from 'helpers-components/LocalizedLink';

type PropsType = NewsPreviewType;

function NewsPreview({
  isLoaded,
  img,
  title,
  imgMaxWidth,
  videoIcon,
  publishedAt,
  discipline,
  description,
  isVideo,
  hasFabula = false,
  hasDescription = false,
  hasLink = false,
  style,
  to,
  linkText
}: PropsType) {
  return (
    <div className={style.newsPreview}>
      <div className={style.newsPreviewImg}>
        <Img isLoaded={isLoaded} img={img} alt={title} maxWidth={imgMaxWidth} style={style} />
        {isVideo && <Svg styleClassName={style.newsVideoIcon} icon={videoIcon} />}
      </div>
      <p className={style.newsPreviewData}>
        {publishedAt && <span className={style.newsPreviewDate}>{publishedAt}</span>}
        {discipline && <span className={style.newsPreviewDiscipline}>{discipline}</span>}
      </p>
      <p className={style.newsPreviewTitle}>{title}</p>
      {hasFabula && <p className={style.newsPreviewDescription} dangerouslySetInnerHTML={{ __html: description }} />}
      {hasDescription && <p className={style.newsPreviewDescription}>{description}</p>}
      {hasLink && (
        <LocalizedLink
          /* $flow-disable-line */
          className={style.newsPreviewLink}
          to={to}
        >
          {linkText}
        </LocalizedLink>
      )}
    </div>
  );
}

export default NewsPreview;
