// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

import SocialHref from 'components/social/SocialHref';
import SocialButton from 'components/social/SocialButton';
import Tooltip from 'components/tooltip/Tooltip';
import List from 'components/list/List';
import SocialMarkdown from 'components/social/SocialMarkdown.md';

import style from 'styles/modules/SocialStyle.module.css';

const stories = storiesOf('UI|Social', module);

const socials = ['instagram', 'fb', 'discord', 'reddit', 'site', 'telegram', 'twitch', 'twitter', 'vk', 'youtube'];

stories
  .add(
    'Social Button',
    () => (
      <SocialButton
        style={style}
        icon={select('icon', socials, 'twitter')}
        onClick={() => action('Click')('Call action on social click')}
      />
    ),
    {
      readme: {
        sidebar: SocialMarkdown
      }
    }
  )
  .add(
    'Social with Tooltip',
    () => (
      <SocialHref style={style} url={text('url', '#')} icon={select('icon', socials, 'twitch')}>
        <Tooltip>{text('children', 'Tooltip children')}</Tooltip>
      </SocialHref>
    ),
    {
      readme: {
        sidebar: SocialMarkdown
      }
    }
  )
  .add(
    'Social with Children',
    () => (
      <SocialHref style={style} url={text('url', '#')} icon={select('icon', socials, 'site')}>
        {text('children', 'Social Link children')}
      </SocialHref>
    ),
    {
      readme: {
        sidebar: SocialMarkdown
      }
    }
  )
  .add(
    'Social List',
    () => (
      <List style={style}>
        {socials.map(item => (
          <SocialHref style={style} url="#" icon={item} key={item} />
        ))}
      </List>
    ),
    {
      readme: {
        sidebar: SocialMarkdown
      }
    }
  );
