// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { object, boolean, text } from '@storybook/addon-knobs';

import VideoPreview from 'components/video-preview/VideoPreview';
import VideoPreviewMarkdown from 'components/video-preview/VideoPreviewMarkdown.md';
import VIDEO_PREVIEW from 'components/video-preview/VideoPreviewMock';
import style from 'styles/modules/VideoPreviewStyle.module.css';

const stories = storiesOf('Previews|Video', module);

stories.addDecorator(story => (
  <div
    style={{
      width: '450px'
    }}
  >
    {story()}
  </div>
));

stories.add(
  'Video',
  () => (
    <VideoPreview
      img={object('img', VIDEO_PREVIEW.storybook.img)}
      imgMaxWidth={object('imgMaxWidth', VIDEO_PREVIEW.storybook.imgMaxWidth)}
      isLoading={boolean('isLoading', VIDEO_PREVIEW.storybook.isLoading)}
      title={text('title', VIDEO_PREVIEW.storybook.title)}
      videoIcon={text('videoIcon', VIDEO_PREVIEW.storybook.videoIcon)}
      duration={text('duration', VIDEO_PREVIEW.storybook.duration)}
      publishedAt={text('publishedAt', VIDEO_PREVIEW.storybook.publishedAt)}
      discipline={text('discipline', VIDEO_PREVIEW.storybook.discipline)}
      description={text('description', VIDEO_PREVIEW.storybook.description)}
      style={style}
    />
  ),
  { readme: { sidebar: VideoPreviewMarkdown } }
);

stories.add(
  'Video is Loading',
  () => {
    const isLoading = true;
    return (
      <VideoPreview
        imgMaxWidth={object('imgMaxWidth', VIDEO_PREVIEW.storybook.imgMaxWidth)}
        isLoading={boolean('isLoading', isLoading)}
        style={style}
        {...(isLoading ? {} : VIDEO_PREVIEW.storybook)}
      />
    );
  },
  { readme: { sidebar: VideoPreviewMarkdown } }
);
