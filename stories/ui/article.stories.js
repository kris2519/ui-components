// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import Article from 'components/article/Article';
import ArticleMarkdown from 'components/article/ArticleMarkdown.md';
import ARTICLE from 'components/article/ArticleMock';
import style from 'styles/modules/ArticleStyle.module.css';

const stories = storiesOf('Ui|Article', module);

stories.add(
  'Article',
  () => (
    <Article
      title={text('title', ARTICLE.storybook.title)}
      additionalInfo={text('additionalInfo', ARTICLE.storybook.additionalInfo)}
      description={text('description', ARTICLE.storybook.description)}
      body={ARTICLE.storybook.body}
      isLoading={boolean('isLoading', ARTICLE.storybook.isLoading)}
      hasFabula={boolean('hasFabula', ARTICLE.storybook.hasFabula)}
      style={style}
    />
  ),
  {
    readme: { sidebar: ArticleMarkdown }
  }
);

stories.add(
  'Article video',
  () => (
    <Article
      title={text('title', ARTICLE.storybook.title)}
      additionalInfo={text('additionalInfo', ARTICLE.storybook.additionalInfo)}
      description={text('description', ARTICLE.storybook.description)}
      body={ARTICLE.storybook.video}
      isLoading={boolean('isLoading', ARTICLE.storybook.isLoading)}
      hasFabula={boolean('hasFabula', ARTICLE.storybook.hasFabula)}
      style={style}
    />
  ),
  { readme: { sidebar: ArticleMarkdown } }
);

stories.add(
  'Article is Loading',
  () => (
    <Article
      title={text('title', '')}
      additionalInfo={text('additionalInfo', '')}
      description={text('description', '')}
      isLoading={boolean('isLoading', true)}
      hasFabula={boolean('hasFabula', true)}
      style={style}
    />
  ),
  { readme: { sidebar: ArticleMarkdown } }
);
