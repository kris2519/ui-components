// @flow

import React, { Component } from 'react';
import classNames from 'classnames';

type PropsType = {
  /** код страны */
  code: string,
  /** имя css класса */
  klassName?: string
};

class Flag extends Component<PropsType> {
  static defaultProps = {
    klassName: null
  };

  /**
   * возвращает иконку, в зависимости от переданного кода страны
   * @param {object} code - код страны
   * @return {*} возвращает иконку
   */
  getIcon = (code: string): any => {
    try {
      /* $flow-disable-line */
      return require(`./svg/${code}.svg`);
    } catch (e) {
      return require(`./svg/cis.svg`);
    }
  };

  render() {
    const { klassName, code, style } = this.props;
    const countryCode = this.getIcon(code);
    if (!countryCode.default) {
      countryCode.default = {};
    }

    return (
      <svg
        /* $flow-disable-line */
        viewBox={countryCode.default.viewBox}
        /* $flow-disable-line */
        className={classNames(style.uiFlag, style[`ui-flag-${countryCode.default.id}`], klassName)}
      >
        <use
          /* $flow-disable-line */
          xlinkHref={`#${countryCode.default.id}`}
        />
      </svg>
    );
  }
}

export default Flag;
