// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  /** параметры игрока */
  player: {
    score: number,
    isWinner: boolean
  },
  /** параметры оппонента */
  opponent: {
    score: number,
    isWinner: boolean
  },
  /** boolean значение, указывающие на техническую ничью */
  isTechEnd: boolean,
  /** стили (CSS-модули) */
  style: {}
};

function MatchInfoScore({ player, opponent, isTechEnd = false, style = {} }: PropsType) {
  return (
    <div className={style.matchInfoScore}>
      <span
        className={classNames(
          style.matchInfoScoreNum,
          {
            [style.matchWinner]: player.isWinner
          },
          {
            [style.matchLoser]: opponent.isWinner
          },
          {
            [style.matchTechEnd]: isTechEnd && !player.isWinner && !opponent.isWinner
          }
        )}
      >
        {player.score}
      </span>
      <i className={style.matchInfoScoreDivider} />
      <span
        className={classNames(
          style.matchInfoScoreNum,
          {
            [style.matchWinner]: opponent.isWinner
          },
          {
            [style.matchLoser]: player.isWinner
          },
          {
            [style.matchTechEnd]: isTechEnd && !player.isWinner && !opponent.isWinner
          }
        )}
      >
        {opponent.score}
      </span>
    </div>
  );
}

export default MatchInfoScore;
