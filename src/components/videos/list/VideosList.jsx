// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import VideosPreview from 'components/videos/preview/VideosPreview';

import type { VideoNewsItemType } from 'flow-types/videoNews';

import style from './VideosList.css';

type PropsType = {
  list: Array<VideoNewsItemType>,
  locale: string,
  timezone: string,
  type: string
};

function VideosList({ list, locale, timezone, type = 'home' }: PropsType) {
  return (
    <ul className={style.videoList}>
      {list.map(item => (
        <li className={style.videoItem} key={item.id}>
          <Link to={`news/${item.slug[locale]}`} className={style.video}>
            <VideosPreview preview={item} type={type} locale={locale} timezone={timezone} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default VideosList;
