// @flow

import { PureComponent } from 'react';
import { connect } from 'react-redux';

import formatDateTime from 'utils/formatDateTime';
import * as selector from 'selectors';

type PropsType = {
  /** дата и время */
  dateTime: string,
  /** формат даты и времени */
  format: string,
  /** текущая таймзона */
  timezone: string,
  /** текущая локаль */
  locale: string
};

export class DateTime extends PureComponent<PropsType> {
  render() {
    const { dateTime, format, timezone, locale } = this.props;
    if (!dateTime) {
      return null;
    }

    return formatDateTime(dateTime, format, locale, timezone);
  }
}

const mapStateToProps = state => ({
  timezone: selector.getCurrentTimezone(state),
  locale: selector.getCurrentLocale(state)
});

export default connect(mapStateToProps)(DateTime);
