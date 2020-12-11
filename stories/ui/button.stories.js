// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import Button from 'components/button/Button';
import ButtonHref from 'components/button/ButtonHref';
import ButtonMarkdown from 'components/button/ButtonMarkdown.md';
import style from 'styles/modules/ButtonStyle.module.css';

const stories = storiesOf('UI|Button', module);

stories
  .add(
    'Button Click',
    () => (
      <Button
        size={text('size', 'default')}
        type={text('type', 'primary')}
        icon={text('icon', 'instagram')}
        styleClassName={text('styleClassName', 'any')}
        onClick={() => action('Click')('Call action on button click')}
        isDisabled={boolean('isDisabled', false)}
        style={style}
      >
        {text('children', 'Button children')}
      </Button>
    ),
    {
      readme: {
        sidebar: ButtonMarkdown
      }
    }
  )
  .add(
    'Button Href',
    () => (
      <ButtonHref
        size={text('size', 'default')}
        type={text('type', 'primary')}
        icon={text('icon', 'twitter')}
        styleClassName={text('styleClassName', 'any')}
        url={text('url', '#')}
        isDisabled={boolean('isDisabled', false)}
        style={style}
      >
        {text('children', 'Button children')}
      </ButtonHref>
    ),
    {
      readme: {
        sidebar: ButtonMarkdown
      }
    }
  );
