// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, object, select, boolean } from '@storybook/addon-knobs';

import Timezone from 'components/timezone/Timezone';
import TimezoneMarkdown from 'components/timezone/TimezoneMarkdown.md';
import TIMEZONE from 'components/timezone/TimezoneMock';
import style from 'styles/modules/TimezoneStyle.module.css';

const stories = storiesOf('UI|Timezone', module);

stories.add(
  'Timezone',
  () => (
    <Timezone
      currentTimezone={select(
        'currentTimezone',
        TIMEZONE.timezones.map(item => item.zone),
        TIMEZONE.defaultTimezone
      )}
      timezones={object('timezones', TIMEZONE.timezones)}
      styleClassName={text('styleClassName', 'anyAdditionalClassName')}
      onTimezoneClick={action('Change timezone to')}
      style={style}
      isActive={boolean('isActive', true)}
      setActiveDdStatus={isActive => {
        action('Function to change isActive status')(` active status is ${isActive}`);
      }}
      formatCurrentTime={tz => {
        action('Function to format time from zone')(`${tz}`);
        return tz;
      }}
    />
  ),
  {
    readme: {
      sidebar: TimezoneMarkdown
    }
  }
);
