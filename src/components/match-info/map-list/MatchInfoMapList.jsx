// @flow

import React from 'react';

type PropsType = {
  /** информация о карте */
  maps: Array<{
    id: number,
    playerScore: number,
    opponentScore: number,
    name: any
  }>,
  /** стили (CSS-модули) */
  style: {},
  /** условие для отображения названия карты */
  showMapsName: boolean
};

function MatchInfoMapList({ maps, style = {}, showMapsName = false }: PropsType) {
  return (
    <ul className={style.matchInfoMapList}>
      {maps.map(
        item =>
          !(item.playerScore === null || item.opponentScore === null) && (
            <li className={style.matchInfoMapItem} key={item.id}>
              <span className={style.matchInfoMapScore}>
                {item.playerScore}
                <i className={style.matchInfoMapScoreDivider} />
                {item.opponentScore}
              </span>
              {showMapsName && item.name && (
                <span className={style.matchInfoMapNameHolder}>
                  <span className={style.matchInfoMapName}>{item.name}</span>
                </span>
              )}
            </li>
          )
      )}
    </ul>
  );
}

export default MatchInfoMapList;
