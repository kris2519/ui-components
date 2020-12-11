// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { object, boolean, text } from '@storybook/addon-knobs';

import Img from 'components/img/Img';
import ImgMarkdown from 'components/img/ImgMarkdown.md';
import style from 'styles/modules/ImgStyle.module.css';

const stories = storiesOf('UI|Img', module);

stories.add(
  'Img',
  () => (
    <Img
      style={style}
      img={object('img', {
        large: 'https://placehold.it/3360x1700',
        big: 'https://placehold.it/1680x850',
        medium: 'https://placehold.it/1200x600',
        small: 'https://placehold.it/600x300'
      })}
      maxWidth={object('maxWidth', { small: '500px', medium: '800px', large: '1960px' })}
      alt={text('alt', 'alt text for image')}
      isLoading={boolean('isLoading', false)}
    />
  ),
  {
    readme: {
      sidebar: ImgMarkdown
    }
  }
);
