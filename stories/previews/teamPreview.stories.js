// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { object, boolean, text } from '@storybook/addon-knobs';

import TeamPreview from 'components/team-preview/TeamPreview';
import TeamPreviewMarkdown from 'components/team-preview/TeamPreviewMarkdown.md';
import TEAM_PREVIEW from 'components/team-preview/TeamPreviewMock';
import style from 'styles/modules/TeamPreviewStyle.module.css';

const stories = storiesOf('Previews|Team', module);

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
  'Team',
  () => (
    <TeamPreview
      team={object('team', TEAM_PREVIEW.storybook.team)}
      isLoading={boolean('isLoading', TEAM_PREVIEW.storybook.isLoading)}
      imgMaxWidth={object('imgMaxWidth', TEAM_PREVIEW.storybook.imgMaxWidth)}
      isReverse={boolean('isReverse', TEAM_PREVIEW.storybook.isReverse)}
      withoutImg={boolean('withoutImg', false)}
      style={style}
    >
      {text('children', 'Team Preview children')}
    </TeamPreview>
  ),
  { readme: { sidebar: TeamPreviewMarkdown } }
);

stories.add(
  'Team is loading',
  () => (
    <TeamPreview
      team={object('team', {})}
      isLoading={boolean('isLoading', true)}
      imgMaxWidth={object('imgMaxWidth', TEAM_PREVIEW.storybook.imgMaxWidth)}
      isReverse={boolean('isReverse', TEAM_PREVIEW.storybook.isReverse)}
      style={style}
    />
  ),
  { readme: { sidebar: TeamPreviewMarkdown } }
);
