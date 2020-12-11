// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number } from '@storybook/addon-knobs';

import Pagination from 'components/pagination/Pagination';
import PaginationMarkdown from 'components/pagination/PaginationMarkdown.md';
import style from 'styles/modules/PaginationStyle.module.css';

const stories = storiesOf('UI|Pagination', module);

stories.add(
  'Pagination',
  () => (
    <Pagination
      total={number('total', 30)}
      pageNum={number('pageNum', 30)}
      marginPagesDisplayed={number('marginPagesDisplayed', 4)}
      pageRangeDisplayed={number('pageRangeDisplayed', 7)}
      onPageChange={action('Go to page')}
      previousIcon={text('previousIcon', 'instagram')}
      nextIcon={text('nextIcon', 'instagram')}
      style={style}
    />
  ),
  {
    readme: {
      sidebar: PaginationMarkdown
    }
  }
);
