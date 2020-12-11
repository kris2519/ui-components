// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, object, text } from '@storybook/addon-knobs';

import Modal from 'components/modal/Modal';
import ModalMarkdown from 'components/modal/ModalMarkdown.md';
import style from 'styles/modules/ModalStyle.module.css';

const stories = storiesOf('UI|Modal', module);

stories.add(
  'Modal',
  () => {
    let isOpen = true;
    return (
      <Modal
        headline={text('headline', 'Any')}
        isOpen={boolean('isOpen', isOpen)}
        shouldCloseOnOverlayClick={boolean('shouldCloseOnOverlayClick', true)}
        shouldFocusAfterRender={boolean('shouldFocusAfterRender', false)}
        shouldCloseOnEsc={boolean('shouldCloseOnEsc', true)}
        contentRef={() => action('Render', () => {})('Set contentRef to ReactModal')}
        aria={object('aria', {
          labelledby: 'dialog label',
          describedby: 'dialog description'
        })}
        id={text('id', 'content_id')}
        onAfterOpen={() => action('Click', () => {})('Function after open popup')}
        onAfterClose={() =>
          action(
            'Click',
            `${isModalOpen => {
              isOpen = isModalOpen;
              return isOpen;
            }}`
          )('Close popup, call callback function')
        }
        onRequestClose={() =>
          action(
            'Click',
            `${isModalOpen => {
              isOpen = isModalOpen;
              return isOpen;
            }}`
          )('Close popup, call callback function on overlay click or ESC press')
        }
        style={style}
      >
        Any
      </Modal>
    );
  },

  {
    readme: {
      sidebar: ModalMarkdown
    }
  }
);
