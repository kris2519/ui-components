// @flow

import React from 'react';
import classNames from 'classnames';
import setLoadingClassname from 'utils/setLoadingClassname';

import TeamPreview from 'components/team-preview/TeamPreview';

import MatchInfo from 'components/match-info/MatchInfo';

type PropsType = {
  /** название матча */
  matchName: string,
  /** информация о команде игрока */
  playerTeam: {
    /** название команды */
    name: string,
    /** название страны, которую представляет команда */
    countryName?: string,
    /** страна, которую представляет команда */
    country?: string,
    /** изображения (4 размера, опционально) */
    img: {
      [name: string]: string | null
    }
  },
  /** дочерний элемент команды игрока */
  playerChildren: any,
  /** информация о команде оппонента */
  opponentTeam: {
    /** название команды */
    name: string,
    /** название страны, которую представляет команда */
    countryName?: string,
    /** страна, которую представляет команда */
    country?: string,
    /** изображения (4 размера, опционально) */
    img: {
      [name: string]: string
    }
  },
  /** дочерний элемент команды оппонента */
  opponentChildren: any,
  /** лоадер для загрузки изображения */
  isLoading: boolean,
  /** ширина окна браузера для выбора изображения (3 размера, опционально) */
  imgMaxWidth: {},
  /** стили (CSS-модули) */
  style: {},
  /** дочерний элемент */
  children: any,
  /** boolean значение, скрывает аватар, default: false */
  withoutImg: boolean
};

function MatchPreview({
  matchName,
  playerTeam,
  playerChildren = null,
  opponentTeam,
  opponentChildren = null,
  isLoading = false,
  imgMaxWidth,
  style = {},
  children,
  withoutImg = false
}: PropsType) {
  const loadingClassName = setLoadingClassname(isLoading);
  return (
    <div className={style.matchPreview}>
      <TeamPreview
        team={playerTeam}
        withoutImg={withoutImg}
        imgMaxWidth={imgMaxWidth}
        style={style}
        isLoading={isLoading}
        isReverse
      >
        {playerChildren}
      </TeamPreview>
      <MatchInfo name={matchName} style={style}>
        {isLoading ? <p className={classNames(style.matchInfoLoading, loadingClassName)} /> : children}
      </MatchInfo>
      <TeamPreview
        team={opponentTeam}
        withoutImg={withoutImg}
        imgMaxWidth={imgMaxWidth}
        style={style}
        isLoading={isLoading}
      >
        {opponentChildren}
      </TeamPreview>
    </div>
  );
}

export default MatchPreview;
