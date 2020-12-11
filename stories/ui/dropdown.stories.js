// @flow

import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import Dropdown from 'components/dropdown/Dropdown';
import DropdownMarkdown from 'components/dropdown/DropdownMarkdown.md';
import style from 'styles/modules/DropdownStyle.module.css';

const stories = storiesOf('UI|Dropdown', module);

stories.add(
  'Dropdown',
  () => (
    <Dropdown
      isShowOnHover={boolean('isShowOnHover', true)}
      dropdownIcon="arrow-down"
      title={text('title', 'Dropdown title')}
      style={style}
      isActive
    >
      {text('children', 'Dropdown children')}
    </Dropdown>
  ),
  {
    readme: {
      sidebar: DropdownMarkdown
    }
  }
);
