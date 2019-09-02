// @flow

import React from 'react';

import VideosPreview from 'components/videos/preview/VideosPreview';

import { Link } from 'react-router-dom';
import { getArticleUrl } from 'utils/routesHelper';

import style from './VideosGrid.css';

type PropsType = {
  list: Array<{
    id: number,
    url: string,
    img: string,
    title: string,
    date: string,
    discipline: string
  }>,
  locale: string,
  type: string
};

function VideosGrid({ grid, locale, type = 'regular' }: PropsType) {
  return (
    <ul className={style.videoGrid}>
      {grid.map(item => (
        <li className={style.videoItem} key={item.id}>
          <Link to={`videos/${item.slug[locale]}`} className={style.video}>
            <VideosPreview preview={item} type={type} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default VideosGrid;
