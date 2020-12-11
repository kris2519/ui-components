// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { object, boolean, text } from '@storybook/addon-knobs';

import NewsPreview from 'components/news-preview/NewsPreview';
import NewsPreviewMarkdown from 'components/news-preview/NewsPreviewMarkdown.md';
import NEWS_PREVIEW from 'components/news-preview/NewsPreviewMock';
import style from 'styles/modules/NewsPreviewStyle.module.css';

const stories = storiesOf('Previews|News', module);

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
  'News',
  () => (
    <NewsPreview
      img={object('img', NEWS_PREVIEW.storybook.img)}
      imgMaxWidth={object('imgMaxWidth', NEWS_PREVIEW.storybook.imgMaxWidth)}
      isLoading={boolean('isLoading', NEWS_PREVIEW.storybook.isLoading)}
      title={text('title', NEWS_PREVIEW.storybook.title)}
      videoIcon={text('videoIcon', NEWS_PREVIEW.storybook.videoIcon)}
      publishedAt={text('publishedAt', NEWS_PREVIEW.storybook.publishedAt)}
      discipline={text('discipline', NEWS_PREVIEW.storybook.discipline)}
      description={text('description', NEWS_PREVIEW.storybook.description)}
      isVideo={boolean('isVideo', NEWS_PREVIEW.storybook.isVideo)}
      hasFabula={boolean('hasFabula', NEWS_PREVIEW.storybook.hasFabula)}
      hasDescription={boolean('hasDescription', NEWS_PREVIEW.storybook.hasDescription)}
      style={style}
    />
  ),
  { readme: { sidebar: NewsPreviewMarkdown } }
);

stories.add(
  'News is Loading',
  () => (
    <NewsPreview
      img={object('img', NEWS_PREVIEW.storybook.img)}
      imgMaxWidth={object('imgMaxWidth', NEWS_PREVIEW.storybook.imgMaxWidth)}
      isLoading={boolean('isLoading', true)}
      title={text('title', null)}
      videoIcon={text('videoIcon', '')}
      publishedAt={text('publishedAt', '')}
      discipline={text('discipline', '')}
      description={text('description', '')}
      isVideo={boolean('isVideo', false)}
      hasFabula={boolean('hasFabula', true)}
      style={style}
    />
  ),
  { readme: { sidebar: NewsPreviewMarkdown } }
);
