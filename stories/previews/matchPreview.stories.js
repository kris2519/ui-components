// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { object, boolean, text } from '@storybook/addon-knobs';

import MatchPreview from 'components/match-preview/MatchPreview';
import MatchPreviewMarkdown from 'components/match-preview/MatchPreviewMarkdown.md';
import MATCH_PREVIEW from 'components/match-preview/MatchPreviewMock';
import MatchInfoScore from 'components/match-info/score/MatchInfoScore';
import MatchInfoMapList from 'components/match-info/map-list/MatchInfoMapList';
import style from 'styles/modules/MatchPreviewStyle.module.css';

const stories = storiesOf('Previews|Match', module);

stories.addDecorator(story => (
  <div
    style={{
      width: '100%'
    }}
  >
    {story()}
  </div>
));

stories
  .add(
    'Match Live',
    () => (
      <MatchPreview
        matchName={text('matchName', MATCH_PREVIEW.storybook.matchName)}
        playerTeam={object('playerTeam', MATCH_PREVIEW.storybook.playerTeam)}
        opponentTeam={object('opponentTeam', MATCH_PREVIEW.storybook.opponentTeam)}
        playerChildren={text('playerChildren', 'Player children')}
        opponentChildren={text('opponentChildren', 'Opponent children')}
        isLoading={boolean('isLoading', MATCH_PREVIEW.storybook.isLoading)}
        imgMaxWidth={object('imgMaxWidth', MATCH_PREVIEW.storybook.imgMaxWidth)}
        style={style}
      >
        <p className={style.matchDiscipline}>{text('discipline', MATCH_PREVIEW.storybook.discipline)}</p>
        <span className={style.matchBadge}>{text('badge', MATCH_PREVIEW.storybook.badge)}</span>
        <span className={style.matchDescription}>{text('system', MATCH_PREVIEW.storybook.system)}</span>
      </MatchPreview>
    ),
    { readme: { sidebar: MatchPreviewMarkdown } }
  )
  .add(
    'Match Upcoming',
    () => (
      <MatchPreview
        matchName={text('matchName', MATCH_PREVIEW.storybook.matchName)}
        playerTeam={object('playerTeam', MATCH_PREVIEW.storybook.playerTeam)}
        opponentTeam={object('opponentTeam', MATCH_PREVIEW.storybook.opponentTeam)}
        playerChildren={text('playerChildren', 'Player children')}
        opponentChildren={text('opponentChildren', 'Opponent children')}
        isLoading={boolean('isLoading', MATCH_PREVIEW.storybook.isLoading)}
        imgMaxWidth={object('imgMaxWidth', MATCH_PREVIEW.storybook.imgMaxWidth)}
        style={style}
      >
        <p className={style.matchDiscipline}>{text('discipline', MATCH_PREVIEW.storybook.discipline)}</p>
        <span className={style.matchStatus}>{text('date', MATCH_PREVIEW.storybook.date)}</span>
        <span className={style.matchDescription}>{text('system', MATCH_PREVIEW.storybook.system)}</span>
      </MatchPreview>
    ),
    { readme: { sidebar: MatchPreviewMarkdown } }
  )
  .add(
    'Match Finished',
    () => (
      <MatchPreview
        matchName={text('matchName', MATCH_PREVIEW.storybook.matchName)}
        playerTeam={object('playerTeam', MATCH_PREVIEW.storybook.playerTeam)}
        opponentTeam={object('opponentTeam', MATCH_PREVIEW.storybook.opponentTeam)}
        playerChildren={text('playerChildren', 'Player children')}
        opponentChildren={text('opponentChildren', 'Opponent children')}
        isLoading={boolean('isLoading', MATCH_PREVIEW.storybook.isLoading)}
        imgMaxWidth={object('imgMaxWidth', MATCH_PREVIEW.storybook.imgMaxWidth)}
        style={style}
      >
        <MatchInfoScore
          player={object('player', {
            score: MATCH_PREVIEW.storybook.playerTeam.score,
            isWinner: MATCH_PREVIEW.storybook.playerTeam.isWinner
          })}
          opponent={object('opponent', {
            score: MATCH_PREVIEW.storybook.opponentTeam.score,
            isWinner: MATCH_PREVIEW.storybook.opponentTeam.isWinner
          })}
          isTechEnd={boolean('isTechEnd', MATCH_PREVIEW.storybook.isTechEnd)}
          style={style}
        />
        <p className={style.matchDiscipline}>{text('discipline', MATCH_PREVIEW.storybook.discipline)}</p>
        <span className={style.matchDescription}>{text('system', MATCH_PREVIEW.storybook.system)}</span>
      </MatchPreview>
    ),
    { readme: { sidebar: MatchPreviewMarkdown } }
  )
  .add(
    'Match Finished Map',
    () => (
      <MatchPreview
        matchName={text('matchName', MATCH_PREVIEW.storybook.matchName)}
        playerTeam={object('playerTeam', MATCH_PREVIEW.storybook.playerTeam)}
        opponentTeam={object('opponentTeam', MATCH_PREVIEW.storybook.opponentTeam)}
        playerChildren={text('playerChildren', 'Player children')}
        opponentChildren={text('opponentChildren', 'Opponent children')}
        isLoading={boolean('isLoading', MATCH_PREVIEW.storybook.isLoading)}
        imgMaxWidth={object('imgMaxWidth', MATCH_PREVIEW.storybook.imgMaxWidth)}
        style={style}
      >
        <MatchInfoScore
          player={object('player', {
            score: MATCH_PREVIEW.storybook.playerTeam.score,
            isWinner: MATCH_PREVIEW.storybook.playerTeam.isWinner
          })}
          opponent={object('opponent', {
            score: MATCH_PREVIEW.storybook.opponentTeam.score,
            isWinner: MATCH_PREVIEW.storybook.opponentTeam.isWinner
          })}
          isTechEnd={boolean('isTechEnd', MATCH_PREVIEW.storybook.isTechEnd)}
          style={style}
        />
        <MatchInfoMapList maps={object('maps', MATCH_PREVIEW.storybook.map)} style={style} />
        <p className={style.matchDiscipline}>{text('discipline', MATCH_PREVIEW.storybook.discipline)}</p>
      </MatchPreview>
    ),
    { readme: { sidebar: MatchPreviewMarkdown } }
  )
  .add(
    'Match Finished Tech End',
    () => (
      <MatchPreview
        matchName={text('matchName', MATCH_PREVIEW.storybook.matchName)}
        playerTeam={object('playerTeam', MATCH_PREVIEW.storybook.playerTeam)}
        opponentTeam={object('opponentTeam', MATCH_PREVIEW.storybook.opponentTeam)}
        playerChildren={text('playerChildren', 'Player children')}
        opponentChildren={text('opponentChildren', 'Opponent children')}
        isLoading={boolean('isLoading', MATCH_PREVIEW.storybook.isLoading)}
        imgMaxWidth={object('imgMaxWidth', MATCH_PREVIEW.storybook.imgMaxWidth)}
        style={style}
      >
        <MatchInfoScore
          player={object('player', {
            score: MATCH_PREVIEW.matchFinishedTechEnd.playerTeam.score,
            isWinner: MATCH_PREVIEW.matchFinishedTechEnd.playerTeam.isWinner
          })}
          opponent={object('opponent', {
            score: MATCH_PREVIEW.matchFinishedTechEnd.opponentTeam.score,
            isWinner: MATCH_PREVIEW.matchFinishedTechEnd.opponentTeam.isWinner
          })}
          isTechEnd={boolean('isTechEnd', MATCH_PREVIEW.matchFinishedTechEnd.isTechEnd)}
          style={style}
        />
        <p className={style.matchDiscipline}>{text('discipline', MATCH_PREVIEW.storybook.discipline)}</p>
        <span className={style.matchDescription}>{text('system', MATCH_PREVIEW.storybook.system)}</span>
      </MatchPreview>
    ),
    { readme: { sidebar: MatchPreviewMarkdown } }
  )
  .add(
    'Match is Loading',
    () => (
      <MatchPreview
        playerTeam={object('playerTeam', {})}
        opponentTeam={object('opponentTeam', {})}
        isLoading={boolean('isLoading', true)}
        imgMaxWidth={object('imgMaxWidth', MATCH_PREVIEW.storybook.imgMaxWidth)}
        style={style}
      >
        <MatchInfoScore
          player={object('player', {
            score: MATCH_PREVIEW.matchFinishedTechEnd.playerTeam.score,
            isWinner: MATCH_PREVIEW.matchFinishedTechEnd.playerTeam.isWinner
          })}
          opponent={object('opponent', {
            score: MATCH_PREVIEW.matchFinishedTechEnd.opponentTeam.score,
            isWinner: MATCH_PREVIEW.matchFinishedTechEnd.opponentTeam.isWinner
          })}
          isTechEnd={boolean('isTechEnd', MATCH_PREVIEW.matchFinishedTechEnd.isTechEnd)}
        />
        <p className={style.matchDiscipline}>{text('discipline', MATCH_PREVIEW.storybook.discipline)}</p>
        <span className={style.matchDescription}>{text('system', MATCH_PREVIEW.storybook.system)}</span>
      </MatchPreview>
    ),
    { readme: { sidebar: MatchPreviewMarkdown } }
  );
