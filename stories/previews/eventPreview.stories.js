// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { object, boolean, text } from '@storybook/addon-knobs';

import EventPreview from 'components/event-preview/EventPreview';
import EventPreviewMarkdown from 'components/event-preview/EventPreviewMarkdown.md';
import EVENT_PREVIEW from 'components/event-preview/EventPreviewMock';
import style from 'styles/modules/EventPreviewStyle.module.css';

const stories = storiesOf('Previews|Event', module);

stories.addDecorator(story => (
  <div
    style={{
      width: '300px'
    }}
  >
    {story()}
  </div>
));

stories.add(
  'Event',
  () => (
    <EventPreview
      img={object('img', EVENT_PREVIEW.storybook.img)}
      imgMaxWidth={object('imgMaxWidth', EVENT_PREVIEW.storybook.imgMaxWidth)}
      isLoading={boolean('isLoading', EVENT_PREVIEW.storybook.isLoading)}
      title={text('title', EVENT_PREVIEW.storybook.title)}
      date={text('date', EVENT_PREVIEW.storybook.date)}
      discipline={text('discipline', EVENT_PREVIEW.storybook.discipline)}
      place={text('place', EVENT_PREVIEW.storybook.place)}
      prize={text('prize', EVENT_PREVIEW.storybook.prize)}
      status={text('status', EVENT_PREVIEW.storybook.status)}
      statusText={text('statusText', EVENT_PREVIEW.storybook.statusText)}
      style={style}
    />
  ),
  { readme: { sidebar: EventPreviewMarkdown } }
);

stories.add(
  'Event is loading',
  () => (
    <EventPreview
      imgMaxWidth={object('imgMaxWidth', EVENT_PREVIEW.storybook.imgMaxWidth)}
      isLoading={boolean('isLoading', true)}
      style={style}
      {...{}}
    />
  ),
  { readme: { sidebar: EventPreviewMarkdown } }
);
