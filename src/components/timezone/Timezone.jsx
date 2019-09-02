// @flow

import React, { PureComponent } from 'react';
import moment from 'moment-timezone';
import classNames from 'classnames';

import UiSvg from '_ui/svg/UiSvg';

/* $flow-disable-line */
import style from './Timezone.css';

type Tz = {
  zone: string,
  name: string
};

type PropsType = {
  /** текущая таймзона */
  currentTimezone: string,
  /** доступные таймзоны */
  timezones: Array<Tz>,
  /** css класс для блока */
  styleClassName?: ?string,
  /** callback который переключает текущую таймзону */
  toggleActiveTz: (tz: Tz) => void,
  scrollToBottom: () => void,
  /** текущая локаль */
  locale: string
};

type StateType = {
  isActiveDd: boolean,
  sec: number,
  currentTimezoneName: string
};

/**
 * @typedef {Object} MouseEvent
 */

class Timezone extends PureComponent<PropsType, StateType> {
  static defaultProps = {
    styleClassName: null
  };

  state = {
    isActiveDd: false,
    sec: 1,
    currentTimezoneName: ''
  };

  /**
   * ставит обработчик события 'mousedown' на страницу и запускает интервал для подсчета времени
   */
  componentDidMount() {
    const { currentTimezone } = this.props;
    this.setCurrentTimezoneName(currentTimezone);
    /* $flow-disable-line */
    document.addEventListener('mousedown', this.handleClick, false);
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate(prevProps: PropsType) {
    const { timezones, currentTimezone } = this.props;
    const { timezones: prevTimezones } = prevProps;
    if (timezones[0].name !== prevTimezones[0].name) {
      this.setCurrentTimezoneName(currentTimezone);
    }
  }

  /**
   * убирает обработчик события 'mousedown' на странице и останавливает подсчет времени
   */
  componentWillUnmount() {
    /* $flow-disable-line */
    document.removeEventListener('mousedown', this.handleClick, false);
    clearInterval(this.interval);
  }

  /**
   * считает время в секундах
   */
  tick = () => {
    this.setState(prevState => ({
      sec: prevState.sec + 1
    }));
  };

  /**
   * возвращает время в зависимости от переданной таймзоны
   * @param {string} timezone - таймзона
   * @return {string} возвращает время
   */
  formatCurrentTime = (timezone: string): string =>
    moment()
      .tz(timezone)
      .format('H:mm');

  // formatMyTime = () => moment().format('H:mm');

  /**
   * переключает отображение dropdown
   */
  toggleDd = () => {
    const { scrollToBottom } = this.props;

    this.setState(
      prevState => ({
        isActiveDd: !prevState.isActiveDd
      }),
      () => {
        setTimeout(() => {
          scrollToBottom();
        }, 300);
      }
    );
  };

  setCurrentTimezoneName = (tz: string) => {
    const { timezones } = this.props;
    const currentTimezoneObj = timezones.find(item => item.zone === tz);

    this.setState({
      currentTimezoneName: currentTimezoneObj.name
    });
  };

  toggleActiveTz = (tz: string) => {
    const { toggleActiveTz } = this.props;

    this.setCurrentTimezoneName(tz);
    toggleActiveTz(tz);
  };

  /**
   * переключает отображение dropdown
   * @param {MouseEvent} e - объект ивента
   */
  handleClick = (e: any) => {
    if (!this.node.contains(e.target)) {
      this.setState({ isActiveDd: false });
    }
  };

  interval: any;

  node: any;

  render() {
    const { isActiveDd, currentTimezoneName } = this.state;
    const { currentTimezone, timezones, styleClassName, locale } = this.props;

    return (
      <div
        className={classNames(style.timezones, styleClassName)}
        ref={node => {
          this.node = node;
        }}
      >
        <button
          type="button"
          className={classNames(style.currentTimezone, { [style.isActive]: isActiveDd })}
          onClick={this.toggleDd}
        >
          <UiSvg icon="clock" styleClassName={style.currentTimezoneIcon} />
          <span className={style.currentTimezoneTime}>{this.formatCurrentTime(currentTimezone)}</span>
        </button>
        <div className={classNames(style.timezonesDd, { [style.isActive]: isActiveDd })}>
          <div className={style.timezonesList}>
            {timezones.map((tz, index) => (
              <button
                type="button"
                className={classNames(style.timezonesItem, {
                  [style.isActive]: tz.zone === currentTimezone
                })}
                onClick={() => {
                  /* $flow-disable-line */
                  this.toggleActiveTz(tz.zone);
                  this.toggleDd();
                }}
                // eslint-disable-next-line react/no-array-index-key
                key={`${tz.zone}${index}`}
              >
                <span className={style.timezonesItemTitle}>{tz.name}</span>
                <span className={style.timezonesItemVal}>{this.formatCurrentTime(tz.zone)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Timezone;
