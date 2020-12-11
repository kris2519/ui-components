// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Svg from 'components/svg/Svg';
import SvgMarkdown from 'components/svg/SvgMarkdown.md';

const stories = storiesOf('UI|Svg', module);

stories.add(
  'Svg',
  () => (
    <Svg
      icon={select('icon', ['arrow-down', 'discord', 'map', 'fb', 'video'], 'video')}
      styleClassName={text('styleClassName', 'any-class')}
    />
  ),
  {
    readme: {
      sidebar: SvgMarkdown
    }
  }
);
