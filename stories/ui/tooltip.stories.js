// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import TooltipMarkdown from 'components/tooltip/TooltipMarkdown.md';
import Tooltip from 'components/tooltip/Tooltip';
import style from 'styles/modules/TooltipStyle.module.css';

const stories = storiesOf('UI|Tooltip', module);

stories.addDecorator(story => (
  <div
    className="tooltip-holder"
    style={{
      width: '150px',
      cursor: 'pointer'
    }}
  >
    Hover to see tooltip
    {story()}
  </div>
));

stories.add('Tooltip', () => <Tooltip style={style}>{text('children', 'Tooltip children')}</Tooltip>, {
  readme: {
    sidebar: TooltipMarkdown
  }
});
