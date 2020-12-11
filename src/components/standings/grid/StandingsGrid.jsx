// @flow

import React from 'react';

type PropsType = {
  /** children для раундов */
  children: any,
  /** children для раундов */
  title: string,
  style: {}
};

function StandingsGrid({
  children = null,
  title = null,
  isDoubleUpper = false,
  isDoubleLower = false,
  style = {}
}: PropsType) {
  return (
    <div className={style.standingsGrid}>
      {title && <p className={style.standingsGridTitle}>{title}</p>}
      <div className={style.standingsGridContent}>
        {React.Children.map(children, (round, index) => {
          // eslint-disable-next-line prefer-spread
          const concatedChildren = children.reduce((accumulator, currentValue) =>
            !Array.isArray(accumulator) ? [accumulator].concat(currentValue) : accumulator.concat(currentValue)
          );
          const lastRound = concatedChildren[concatedChildren.length - 1];
          const penultRound = concatedChildren[concatedChildren.length - 2];
          const prevChild = concatedChildren[index - 1];
          const nextChild = concatedChildren[index + 1];
          const prevRoundIsArray =
            prevChild !== undefined && prevChild.props.children !== null && Array.isArray(prevChild.props.children);
          const nextRoundExist = nextChild !== undefined && nextChild.props.children !== null;
          const nextRoundIsArray = nextRoundExist ? Array.isArray(nextChild.props.children) : false;
          const nextRoundIsSingleItem = nextRoundExist
            ? !Array.isArray(nextChild.props.children) &&
              (typeof nextChild.props.children === 'object' || typeof nextChild.props.children === 'string')
            : false;
          const currentRoundIsArray =
            round !== undefined && round.props.children !== null ? Array.isArray(round.props.children) : false;
          return React.cloneElement(round, {
            isFinalUpper:
              isDoubleUpper && (concatedChildren[index] === penultRound || concatedChildren[index] === lastRound),
            isFinalLower: isDoubleLower && concatedChildren[index] === lastRound,
            orientation:
              (nextRoundIsArray &&
                currentRoundIsArray &&
                nextChild.props.children.length < round.props.children.length) ||
              (nextRoundIsSingleItem && currentRoundIsArray && round.props.children.length >= 2)
                ? 'pair'
                : 'straight',
            isStretched:
              (prevRoundIsArray &&
                currentRoundIsArray &&
                round.props.children.length * 2 === prevChild.props.children.length) ||
              (prevRoundIsArray &&
                currentRoundIsArray &&
                (nextRoundIsSingleItem ||
                  (nextRoundIsArray && nextChild.props.children.length === round.props.children.length / 2)) &&
                round.props.children.length === prevChild.props.children.length &&
                round.props.children.length > 1 &&
                prevChild.props.children.length > 1)
          });
        })}
      </div>
    </div>
  );
}

export default StandingsGrid;
