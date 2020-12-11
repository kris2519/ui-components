// @flow

import React from 'react';

import Img from 'components/img/Img';
import classNames from 'classnames';

import setLoadingClassname from 'utils/setLoadingClassname';

type PropsType = {
  player: {
    /** имя и фамилия игрока */
    name?: string,
    /** никнейм игрока */
    nickname: string,
    /** страна, которую представляет игрок */
    country?: any,
    /** изображения (4 размера, опционально) */
    img: {
      [name: string]: string | null
    }
  },
  /** лоадер для загрузки изображения */
  isLoading: boolean,
  /** ширина окна браузера для выбора изображения (3 размера, опционально) */
  imgMaxWidth: {},
  /** стили (CSS-модули) */
  style: {},
  /** дочерний элемент */
  children: any,
  /** boolean значение, для стилизации игрока опонента */
  isReverse: boolean,
  /** boolean значение, скрывает аватар, default: false */
  withoutImg: boolean
};

function PlayerPreview({
  player,
  isLoading = false,
  imgMaxWidth,
  children = null,
  isReverse = false,
  withoutImg = false,
  style = {}
}: PropsType) {
  const loadingClassName = setLoadingClassname(isLoading);
  return (
    <div
      className={classNames(
        isReverse ? style.playerPreviewReverse : style.playerPreview,
        withoutImg && style.playerPreviewWithoutImg
      )}
    >
      {!withoutImg && (
        <Img isLoading={isLoading} img={player.img} maxWidth={imgMaxWidth} style={style} alt={player.nickname} />
      )}
      <div className={classNames(style.playerPreviewInfo, withoutImg && style.playerPreviewInfoWithoutImg)}>
        <div className={style.playerPreviewData}>
          <div className={style.playerPreviewDescription}>
            {player.country}
            <p className={classNames(style.playerPreviewNickname, loadingClassName)}>{player.nickname}</p>
          </div>
          {player.name && <p className={style.playerPreviewName}>{player.name}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}

export default PlayerPreview;
