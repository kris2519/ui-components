// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

type PropsType = {
  /** текущая таймзона */
  currentTimezone: string,
  /** доступные таймзоны */
  timezones: Array<Tz>,
  /** css класс для блока */
  klassName?: ?string,
  /** callback который переключает текущую таймзону */
  toggleActiveTz: (tz: Tz) => void,
  scrollToBottom: () => void,
  /** тема сайта */
  siteTheme: string,
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

class Select extends PureComponent<PropsType, StateType> {
  static defaultProps = {
    klassName: null
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

  formatMyTime = () => moment().format('H:mm');

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
    const { currentTimezone, timezones, klassName, siteTheme = 'pel', locale, style } = this.props;
    return (
      <div
        className={classNames(style.timezones, klassName)}
        ref={node => {
          this.node = node;
        }}
      >
        <button
          type="button"
          className={classNames(style.currentTimezone, { [style.isActive]: isActiveDd })}
          onClick={this.toggleDd}
        >
          <UiSvg icon="clock" klassName={style.currentTimezoneIcon} />
          {siteTheme !== 'mobile' && <span className={style.currentTimezoneTime}>{currentTimezoneName}</span>}
          <span className={style.currentTimezoneTime}>{this.formatCurrentTime(currentTimezone)}</span>
          <UiSvg icon="arrow-down" klassName={style.currentTimezoneArrow} />
        </button>
        <div className={classNames(style.timezonesDd, { [style.isActive]: isActiveDd })}>
          <div className={style.timezonesList}>
            {/*<span className={classNames(style.timezonesItem, style.modNow)}>*/}
            {/*<span className={style.timezonesItemTitle}>{i18n.t(`header.label_my_time`, { lng: locale })}</span>*/}
            {/*<span className={style.timezonesItemVal}>*/}
            {/*<UiSvg icon="clock" klassName={style.timezonesItemIcon} />*/}
            {/*{this.formatMyTime()}*/}
            {/*</span>*/}
            {/*</span>*/}
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
                <span className={style.timezonesItemVal}>
                  <UiSvg icon="clock" klassName={style.timezonesItemIcon} />
                  {this.formatCurrentTime(tz.zone)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Select;
