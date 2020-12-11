// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';

import Grid from 'components/grid/Grid';
import GridMarkdown from 'components/grid/GridMarkdown.md';
import style from 'styles/modules/GridStyle.module.css';
import Accordion from 'components/accordion/Accordion';

const stories = storiesOf('UI|Grid', module);

stories.add(
  'Grid',
  () => (
    <Grid style={style}>
      Буквально что угодно
      {[',erdfkmyj', 'xnj eujlyj', null].map(item => (
        <p>{item}</p>
      ))}
      <p>Буквально что угодно</p>
      <p>Буквально что угодно</p>
      {0}
      {''}
      <p>Буквально что угодно</p>
      {null}
    </Grid>
  ),
  {
    readme: {
      sidebar: GridMarkdown
    }
  }
);
