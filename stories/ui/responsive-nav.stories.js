// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';

import Button from 'components/button/Button';
import ResponsiveNav from 'components/responsive-nav/ResponsiveNav';
import ResponsiveNavMarkdown from 'components/responsive-nav/ResponsiveNavMarkdown.md';
import style from 'styles/modules/ResponsiveNavStyle.module.css';

const stories = storiesOf('UI|Responsive Nav', module);

stories.add(
  'Responsive Nav',
  () => {
    const nav = [
      { title: 'Hi' },
      { title: 'Hello' },
      { title: 'Bonjour' },
      { title: 'Ola' },
      { title: 'ldsjhglsfkdjhglsdfjhglsjfdgh' },
      { title: 'Bonjour Bonjour Bonjour Bonjour' }
    ];
    return (
      <ResponsiveNav minDesktopWindowWidth={number('minDesktopWindowWidth', 500)} style={style}>
        {nav.map(item => (
          <a key={item.title} href="#" className={style.navLink}>
            {item.title}
          </a>
        ))}
      </ResponsiveNav>
    );
  },
  {
    readme: {
      sidebar: ResponsiveNavMarkdown
    }
  }
);

stories.add(
  'Responsive Nav 1 child',
  () => (
    <ResponsiveNav minDesktopWindowWidth={number('minDesktopWindowWidth', 500)} style={style}>
      <a href="#" className={style.navLink}>
        something
      </a>
    </ResponsiveNav>
  ),
  {
    readme: {
      sidebar: ResponsiveNavMarkdown
    }
  }
);

stories.add(
  'Responsive Nav any child',
  () => (
    <ResponsiveNav minDesktopWindowWidth={number('minDesktopWindowWidth', 500)} style={style}>
      <a href="#">something</a>
      <div>something 123</div>
      <a href="#" className={style.navLink}>
        something 12874697124562
      </a>
      <a href="#">something</a>
      <Button
        size="default"
        type="primary"
        icon="instagram"
        onClick={() => action('Click')('Call action on button click')}
      >
        Button children
      </Button>
    </ResponsiveNav>
  ),
  {
    readme: {
      sidebar: ResponsiveNavMarkdown
    }
  }
);
