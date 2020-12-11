// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Standings from 'components/standings/Standings';
import StandingsGrid from 'components/standings/grid/StandingsGrid';
import StandingsGridRound from 'components/standings/grid/round/StandingsGridRound';

import style from 'styles/modules/StandingsStyle.module.css';
import Accordion from 'components/accordion/Accordion';

const stories = storiesOf('UI|Standings', module);

stories.add('Grid', () => {
  const rounds = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2]
  ];
  return (
    <Standings style={style}>
      <StandingsGrid style={style}>
        <StandingsGridRound style={style}>
          {0}
          {''}
          <div>content</div>
          {null}
        </StandingsGridRound>
        {rounds.map(
          round =>
            round != null && (
              <StandingsGridRound style={style}>
                {round.map(item => item != null && <div>item exist</div>)}
              </StandingsGridRound>
            )
        )}

        <StandingsGridRound style={style}>
          <div>content</div>
          <div>content</div>
          <div>content</div>
          <div>content</div>
        </StandingsGridRound>
        <StandingsGridRound style={style}>
          <div>content</div>
          <div>content</div>
        </StandingsGridRound>
        <StandingsGridRound style={style}>
          <div>content</div>
        </StandingsGridRound>
      </StandingsGrid>
    </Standings>
  );
});

stories.add('Grid Third place', () => (
  <Standings style={style}>
    <StandingsGrid style={style}>
      <StandingsGridRound style={style}>
        <div>content</div>
        <div>content</div>
        <div>content</div>
      </StandingsGridRound>
      <StandingsGridRound style={style}>
        <div>content</div>
        <div>content</div>
      </StandingsGridRound>
      <StandingsGridRound style={style}>
        <div>content</div>
      </StandingsGridRound>
    </StandingsGrid>
  </Standings>
));
