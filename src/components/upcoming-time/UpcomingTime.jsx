// @flow

import React, { Component } from 'react';

import { getTimeDiff, getTimeToStart } from 'utils/timeHelper';

type PropsType = {
  /** время */
  time: string,
  /** текущая таймзона */
  timezone: string,
  /** текущая локаль */
  locale: string
};

type StateType = {
  secondsLeft: number
};

class UpcomingTime extends Component<PropsType, StateType> {
  state = {
    secondsLeft: 0
  };

  /**
   * ставит изначальное время и запускает подсчет времени
   */
  componentDidMount() {
    const { time, timezone } = this.props;
    const timeValue = parseInt(getTimeDiff(time, timezone), 10);

    this.setState({
      secondsLeft: timeValue > 0 ? timeValue : 0
    });
    this.interval = setInterval(this.tick, 1000);
  }

  /**
   * если изменилась локаль или изменилось время - компонент обновится
   * @param {Props} nextProps - props компонента
   * @param {State} nextState - state компонента
   */
  shouldComponentUpdate(nextProps: PropsType, nextState: StateType) {
    const { secondsLeft } = this.state;
    const { locale } = this.props;
    return locale !== nextProps.locale || secondsLeft !== nextState.secondsLeft;
  }

  /**
   * останавливает подсчёт времени
   */
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  /**
   * считает время в секундах каждую секунду
   */
  tick = (): void => {
    const { secondsLeft } = this.state;

    if (secondsLeft > 0) {
      this.setState((prevState: StateType) => ({
        secondsLeft: prevState.secondsLeft - 1
      }));
    } else {
      clearInterval(this.interval);
    }
  };

  interval: any;

  render() {
    const { secondsLeft } = this.state;
    const { locale } = this.props;

    return getTimeToStart(secondsLeft, true, locale);
  }
}

export default UpcomingTime;
