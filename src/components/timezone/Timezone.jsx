// @flow

import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import useClickOutside from 'hooks/useClickOutside';

import Svg from 'components/svg/Svg';

type PropsType = {
  /** svg иконка-декоратор */
  decoratorIcon: string,
  /** svg иконка-стрелка */
  arrowIcon: string,
  /** текущая таймзона */
  currentTimezone: string,
  /** доступные таймзоны */
  timezones: Array<{
    zone: string,
    name: string
  }>,
  /** css класс для блока */
  // eslint-disable-next-line react/require-default-props
  styleClassName?: ?string,
  /** callback который переключает текущую таймзону */
  onTimezoneClick: () => void,
  style: {}
};

function Timezone({
  decoratorIcon = null,
  arrowIcon = null,
  currentTimezone,
  timezones = [],
  styleClassName = '',
  onTimezoneClick = () => {},
  style = {},
  formatCurrentTime = tz => tz,
  isActive = null,
  setActiveDdStatus = () => {}
}: PropsType) {
  const [isActiveDd, setActiveDd] = useState(false);
  const [currentTimezoneName, setCurrentTimezoneName] = useState(currentTimezone);
  const [seconds, setSeconds] = useState(0);

  const timezoneRef = useRef();
  const intervalRef = useRef(null);

  useClickOutside(timezoneRef, () => {
    setActiveDd(false);
    setActiveDdStatus(false);
  });

  useEffect(() => {
    setActiveDd(isActive);
    setActiveDdStatus(isActive);
  }, [isActive]);

  function toggleDd() {
    setActiveDd(!isActiveDd);
    setActiveDdStatus(!isActiveDd);
  }

  function toggleActiveTz(tz: string) {
    toggleDd();
    setCurrentTimezoneName(tz);
    onTimezoneClick(tz); // flow?
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(second => second + 1);
    }, 1000);
    setCurrentTimezoneName(currentTimezoneName);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentTimezoneName]);

  return (
    <div className={classNames(style.timezones, styleClassName)} ref={timezoneRef}>
      <button
        type="button"
        className={classNames(style.currentTimezone, { [style.isActive]: isActiveDd })}
        onClick={toggleDd}
      >
        {decoratorIcon && <Svg icon={decoratorIcon} styleClassName={style.currentTimezoneIcon} />}
        <span className={style.currentTimezoneTime}>{formatCurrentTime(currentTimezoneName)}</span>
        {arrowIcon && <Svg icon={arrowIcon} styleClassName={style.currentTimezoneArrow} />}
      </button>
      <div className={classNames(style.timezonesDd, { [style.isActive]: isActiveDd })}>
        <div className={style.timezonesList}>
          {timezones.map((tz, index) => (
            <button
              type="button"
              className={classNames(style.timezonesItem, {
                [style.isActive]: tz.zone === currentTimezoneName
              })}
              onClick={() => {
                toggleActiveTz(tz.zone);
              }}
              // eslint-disable-next-line react/no-array-index-key
              key={`${tz.zone}${index}`}
            >
              <span className={style.timezonesItemTitle}>{tz.name}</span>
              <span className={style.timezonesItemVal}>{formatCurrentTime(tz.zone)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timezone;
