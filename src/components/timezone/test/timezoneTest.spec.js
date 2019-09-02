/* eslint-disable */

import React from 'react';
import TestUtils from 'react-dom/test-utils';

import TestWrapper from 'TestWrapper';

import Timezone from '../Timezone';
import { timezoneProps } from './testParams';

describe('Timezone component test.', () => {
  const toggleActiveTz = jest.fn(tz => {});
  let component = {};

  const wrapper = TestUtils.renderIntoDocument(
    <TestWrapper>
      <Timezone
        currentTimezone={timezoneProps.currentTimezone}
        timezones={timezoneProps.timezones}
        styleClassName={timezoneProps.styleClassName}
        ref={El => {
          component = El;
        }}
        toggleActiveTz={toggleActiveTz}
      />
    </TestWrapper>
  );

  test('Check initial props', () => {
    expect(component.props.timezones.length).toEqual(timezoneProps.timezones.length);
    expect(component.props.currentTimezone).toEqual(timezoneProps.currentTimezone);
    expect(component.props.styleClassName).toEqual(timezoneProps.styleClassName);
  });

  test('Check initial state', () => {
    expect(component.state.isActiveDd).toEqual(false);
    expect(component.state.sec).toEqual(1);
  });

  test('Check formatCurrentTime method', () => {
    expect(component.formatCurrentTime(timezoneProps.currentTimezone)).toEqual(expect.anything());
  });

  test('Check toggleDd method', () => {
    expect(component.state.isActiveDd).toEqual(false);
    component.toggleDd();
    expect(component.state.isActiveDd).toEqual(true);
  });

  test('Check toggleDd method with click on button', () => {
    expect(component.state.isActiveDd).toEqual(true);

    const buttonElem = TestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[0];
    TestUtils.Simulate.click(buttonElem);

    expect(component.state.isActiveDd).toEqual(false);
  });

  test('Check setCurrentTimezoneName method', () => {
    component.setCurrentTimezoneName(component.props.timezones[0].zone);

    expect(component.state.currentTimezoneName).toEqual(component.props.timezones[0].name);
  });

  test('Check toggleActiveTz method', () => {
    component.toggleActiveTz(component.props.timezones[1].zone);

    expect(toggleActiveTz).toBeCalledWith(component.props.timezones[1].zone);
    expect(component.state.currentTimezoneName).toEqual(component.props.timezones[1].name);
  });
});
