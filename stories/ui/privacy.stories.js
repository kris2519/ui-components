// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';

import Privacy from 'components/privacy/Privacy';
import PrivacyMarkdown from 'components/privacy/PrivacyMarkdown.md';
import PRIVACY from 'components/privacy/PrivacyMock';
import style from 'styles/modules/PrivacyStyle.module.css';

const stories = storiesOf('UI|Privacy', module);

stories.add(
  'Privacy',
  () => (
    <Privacy
      isDisplayed
      title={text('title', PRIVACY.storybook.title)}
      description={text('description', PRIVACY.storybook.description)}
      btnAccept={object('btnAccept', PRIVACY.storybook.btnAccept)}
      linkMore={object('linkMore', PRIVACY.storybook.linkMore)}
      style={style}
    />
  ),
  {
    readme: {
      sidebar: PrivacyMarkdown
    }
  }
);
