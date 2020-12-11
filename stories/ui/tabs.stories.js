// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { select, text } from '@storybook/addon-knobs';

import { TabsProvider, Tabs, TabButton, TabPanel } from 'components/tabs/Tabs';
import TabsMarkdown from 'components/tabs/TabsMarkdown.md';
import style from 'styles/modules/TabsStyle.module.css';

const stories = storiesOf('UI|Tabs', module);

stories.add(
  'Tabs',
  () => (
    <React.Fragment>
      <TabsProvider
        initialValue={text('initialValue', 1)}
        style={style}
        forceValue={select('forceValue', [1, 2, 3], 2)}
        onTabChange={value => action('Change Tab To')(value)}
      >
        <Tabs style={style}>
          {null}
          <TabButton value={1} onClick={() => action('Click')('Choose tab Main')} style={style}>
            main
          </TabButton>
          {0}
          {''}
          <TabButton value={2} onClick={() => action('Click')('Choose tab Secondary')} style={style}>
            secondary
          </TabButton>
          <TabButton value={3} onClick={() => action('Click')('Choose tab Additional')} style={style}>
            additional
          </TabButton>
        </Tabs>

        <TabPanel value={1} style={style}>
          main panel
        </TabPanel>
        {null}
        <TabPanel value={2} style={style}>
          secondary panel
        </TabPanel>
        {0}
        {''}
        <TabPanel value={3} style={style}>
          additional panel
        </TabPanel>
      </TabsProvider>
    </React.Fragment>
  ),
  {
    readme: {
      sidebar: TabsMarkdown
    }
  }
);
