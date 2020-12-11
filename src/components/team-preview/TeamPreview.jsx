// @flow

import React from 'react';
import classNames from 'classnames';

import Img from 'components/img/Img';

import setLoadingClassname from 'utils/setLoadingClassname';

type PropsType = {
  team: {
    /** название команды */
    name: string,
    /** страна, которую представляет команда */
    country?: any,
    /** название страны, которую представляет команда */
    countryName?: string,
    /** изображения (4 размера, опционально) */
    img: {
      [name: string]: string | null
    }
  },
  /** лоадер для загрузки изображения */
  isLoading: boolean,
  /** ширина окна браузера для выбора изображения (3 размера, опционально) */
  imgMaxWidth: {},
  /** дочерний элемент */
  children: any,
  /** стили (CSS-модули) */
  style: {},
  /** boolean значение, для стилизации команды опонента */
  isReverse: boolean,
  /** boolean значение, скрывает аватар, default: false */
  withoutImg: boolean
};

function TeamPreview({
  team,
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
        isReverse ? style.teamPreviewReverse : style.teamPreview,
        withoutImg && style.teamPreviewWithoutImg
      )}
    >
      {!withoutImg && <Img isLoading={isLoading} img={team.img} maxWidth={imgMaxWidth} style={style} alt={team.name} />}
      <div className={classNames(style.teamPreviewInfo, withoutImg && style.teamPreviewInfoWithoutImg)}>
        <div className={style.teamPreviewData}>
          {team.country && (
            <div className={style.teamPreviewCountry}>
              {team.country}
              {team.countryName && <p className={style.teamPreviewCountryName}>{team.countryName}</p>}
            </div>
          )}
          <p className={classNames(style.teamPreviewName, loadingClassName)}>{team.name}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default TeamPreview;
