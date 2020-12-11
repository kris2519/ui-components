// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { object, boolean, text } from '@storybook/addon-knobs';

import PlayerPreviewMarkdown from 'components/player-preview/PlayerPreviewMarkdown.md';
import PlayerPreview from 'components/player-preview/PlayerPreview';
import PLAYER_PREVIEW from 'components/player-preview/PlayerPreviewMock';
import style from 'styles/modules/PlayerPreviewStyle.module.css';

const stories = storiesOf('Previews|Player', module);

stories.addDecorator(story => (
  <div
    style={{
      width: '335px'
    }}
  >
    {story()}
  </div>
));

stories.add(
  'Player',
  () => (
    <PlayerPreview
      player={object('player', PLAYER_PREVIEW.storybook.player)}
      isLoading={boolean('isLoading', PLAYER_PREVIEW.storybook.isLoading)}
      imgMaxWidth={object('imgMaxWidth', PLAYER_PREVIEW.storybook.imgMaxWidth)}
      isReverse={boolean('isReverse', PLAYER_PREVIEW.storybook.isReverse)}
      withoutImg={boolean('withoutImg', false)}
      style={style}
    >
      {text('children', 'Player Preview children')}
    </PlayerPreview>
  ),
  { readme: { sidebar: PlayerPreviewMarkdown } }
);

stories.add(
  'Player is loading',
  () => (
    <PlayerPreview
      player={object('player', {})}
      isLoading={boolean('isLoading', true)}
      imgMaxWidth={object('imgMaxWidth', PLAYER_PREVIEW.storybook.imgMaxWidth)}
      isReverse={boolean('isReverse', PLAYER_PREVIEW.storybook.isReverse)}
      style={style}
    />
  ),
  { readme: { sidebar: PlayerPreviewMarkdown } }
);
