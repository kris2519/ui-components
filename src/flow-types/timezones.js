// @flow
// types for timezone reducer and action's
export type ZoneType = {
  zone: string,
  name: string
};

export type TimezoneState = {
  currentTimezone: string,
  timezones: Array<ZoneType>,
  defaultTimezone: ZoneType
};

export type ActionType = {
  type: string,
  currentTimezone?: string,
  timezones?: Array<ZoneType>,
  defaultTimezone?: ZoneType
};
