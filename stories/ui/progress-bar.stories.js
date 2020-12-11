// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import ProgressBar from 'components/progress-bar/ProgressBar';
import ProgressBarMarkdown from 'components/progress-bar/ProgressBarMarkdown.md';
import style from 'styles/modules/ProgressBarStyle.module.css';

const stories = storiesOf('UI|Progress Bar', module);

stories.add('Progress Bar', () => <ProgressBar loading={number('loading', 80)} style={style} />, {
  readme: {
    sidebar: ProgressBarMarkdown
  }
});
