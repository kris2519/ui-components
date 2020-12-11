// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number, boolean } from '@storybook/addon-knobs';

import AccordionList from 'components/accordion/AccordionList';
import Accordion from 'components/accordion/Accordion';
import AccordionMarkdown from 'components/accordion/AccordionMarkdown.md';
import style from 'styles/modules/AccordionStyle.module.css';

const stories = storiesOf('UI|Accordion', module);

stories.add(
  'Accordion',
  () => (
    <Accordion
      heading={text('heading', 'any')}
      icon={text('icon', 'arrow-down')}
      id={number('id', 1)}
      isAccordionActive={boolean('isAccordionActive', false)}
      onToggleAccordion={() => action('Click')('Show/hide accordion content')}
      style={style}
    >
      any children
      {0}
      {''}
      {null}
    </Accordion>
  ),
  {
    readme: {
      sidebar: AccordionMarkdown
    }
  }
);

stories.add(
  'Accordions List',
  () => (
    <AccordionList style={style}>
      {[{ id: 1 }, { id: 2 }, null, 0, ''].map(
        (item, index) =>
          item != null && (
            <Accordion heading={`heading ${index + 1}`} icon={text('icon', 'arrow-down')} style={style}>
              any children
            </Accordion>
          )
      )}
    </AccordionList>
  ),
  {
    readme: {
      sidebar: AccordionMarkdown
    }
  }
);
