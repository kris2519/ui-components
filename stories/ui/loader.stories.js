// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';

import Loader from 'components/loader/Loader';
import LoaderMarkdown from 'components/loader/LoaderMarkdown.md';
import style from 'styles/modules/LoaderStyle.module.css';

const stories = storiesOf('UI|Loader', module);

stories.add('Loader', () => <Loader style={style} />, {
  readme: {
    sidebar: LoaderMarkdown
  }
});
