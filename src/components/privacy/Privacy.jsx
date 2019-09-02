// @flow

import React, { PureComponent } from 'react';

import Button from 'components/button/Button';
import ButtonHref from 'components/button/ButtonHref';

type StateType = {
  display: boolean
};

//TODO replace with React-hooks (useState, useEffect)
class Privacy extends PureComponent<StateType> {
  state = {
    display: null
  };

  componentDidMount() {
    const cookie = () => {
      const matches = document.cookie.match(
        new RegExp(`(?:^|; )${'useCookie'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
      );
      return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    if (typeof cookie === 'undefined') {
      this.setState({ display: true });
    }
  }

  buttonClickHandler = () => {
    const options = { expires: 30, domain: window.location.hostname };
    const value = encodeURIComponent(true);
    let { expires } = options;

    if (typeof expires == 'number' && expires) {
      const d = new Date();
      d.setTime(d.getTime() + expires * 1e12);
      // eslint-disable-next-line no-multi-assign
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    let updatedCookie = `useCookie=${value}`;

    // eslint-disable-next-line guard-for-in
    for (const propName in options) {
      updatedCookie += `; ${propName}`;
      const propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += `=${propValue}`;
      }
    }

    document.cookie = updatedCookie;
    this.setState({
      display: false
    });
  };

  render() {
    const { display } = this.state;
    const { style, title, description, btnAccept, linkMore, linkMoreUrl } = this.props;
    return (
      display && (
        <div className={style.privacyNotificationHolder}>
          <div className={style.privacyNotification}>
            <p className={style.privacyNotificationTitle}>{title}</p>
            <p className={style.privacyNotificationText}>{description}</p>
            <p className={style.privacyNotificationNav}>
              <Button styleClassName={style.privacyNotificationBtn} onClick={this.buttonClickHandler}>
                {btnAccept}
              </Button>
              <ButtonHref url={linkMoreUrl} type="stroke">
                {linkMore}
              </ButtonHref>
            </p>
          </div>
        </div>
      )
    );
  }
}

export default Privacy;
