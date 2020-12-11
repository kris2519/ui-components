// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';

import List from 'components/list/List';
import ListMarkdown from 'components/list/ListMarkdown.md';
import style from 'styles/modules/ListStyle.module.css';
import Accordion from 'components/accordion/Accordion';

const stories = storiesOf('UI|List', module);

stories.add(
  'List',
  () => (
    <List style={style}>
      <p>Буквально что угодно</p>
      {undefined}
      <p>Буквально что угодно</p>
      Буквально что угодно
      {0}
      {''}
      <p>Буквально что угодно</p>
      {null}
    </List>
  ),
  {
    readme: {
      sidebar: ListMarkdown
    }
  }
);
