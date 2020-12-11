// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  /** модификатор для позиционирования элемента grid */
  isStretched: boolean,
  /** модификатор для декораторов элемента grid */
  orientation: string,
  /** заголовок раунда */
  title: string | null,
  /** модификатор для заголовка раунда */
  titleMod: string | null,
  /** children для элементов раунда */
  children: any,
  /** CSS-модули */
  style: {}
};

function StandingsGridRound({
  orientation = 'straight',
  title = null,
  titleMod = null,
  isStretched = true,
  children = null,
  isFinalUpper = false,
  isFinalLower = false,
  style = {}
}: PropsType) {
  return (
    <div className={style.standingsGridRound}>
      {title && (
        <p className={classNames(style.standingsGridRoundTitle, { [style[`mod-${titleMod}`]]: titleMod })}>{title}</p>
      )}
      <div
        className={classNames(
          style.standingsGridRoundContent,
          {
            [style.modDoubleUpperFinal]: isFinalUpper
          },
          {
            [style.modDoubleLowerFinal]: isFinalLower
          }
        )}
      >
        {React.Children.map(
          children,
          item =>
            item != null && (
              <div
                className={classNames(style.standingsGridItemHolder, style[`mod-${orientation}`], {
                  [style.modStretched]: isStretched
                })}
              >
                {item}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default StandingsGridRound;
