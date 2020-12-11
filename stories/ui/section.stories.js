// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Section from 'components/section/Section';
import SectionNav from 'components/section/nav/SectionNav';
import SectionMarkdown from 'components/section/SectionMarkdown.md';
import style from 'styles/modules/SectionStyle.module.css';

const stories = storiesOf('UI|Section', module);

stories.add(
  'Section',
  () => (
    <Section styleMod={text('styleMod', 'mod-any-class')} style={style}>
      <SectionNav style={style} orientation={select('orientation - top', ['top', 'bottom'], 'top')}>
        Top Nav
      </SectionNav>
      <div>Content</div>
      <SectionNav style={style} orientation={select('orientation - bottom', ['top', 'bottom'], 'bottom')}>
        Bottom Nav
      </SectionNav>
    </Section>
  ),
  {
    readme: {
      sidebar: SectionMarkdown
    }
  }
);
