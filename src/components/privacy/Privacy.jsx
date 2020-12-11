// @flow

import React, { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'utils/cookies';

import Button from 'components/button/Button';
import ButtonHref from 'components/button/ButtonHref';

type PropsType = {
  /** заголовок */
  title: string,
  /** описание */
  description: string,
  /** атрибуты кнопки для принятия Политики конфиденциальности */
  btnAccept: {
    /** название */
    title: string,
    /** размер */
    size: string,
    /** тип */
    type: string
  },
  /** атрибуты кнопки 'Читать больше' */
  linkMore: {
    /** название */
    title: string,
    /** ссылка */
    url: string,
    /** размер */
    size: string,
    /** тип */
    type: string
  },
  /** boolean значение, указывающее на то, открыт попап с куками или нет */
  isDisplayed?: boolean,
  /** стили (CSS-модули) */
  style: {}
};

function Privacy({ title, description, btnAccept, linkMore, style = {}, isDisplayed = false }: PropsType) {
  const [display, setDisplay] = useState(isDisplayed);

  useEffect(() => {
    const cookie = getCookie('useCookie');
    if (typeof cookie === 'undefined') {
      setDisplay(true);
    }
  }, []);

  function buttonClickHandler() {
    setCookie('useCookie', true, { expires: 30, domain: window.location.hostname });
    setDisplay(false);
  }

  return (
    display && (
      <div className={style.privacyNotificationHolder}>
        <div className={style.privacyNotification}>
          <p className={style.privacyNotificationTitle}>{title}</p>
          <p className={style.privacyNotificationText}>{description}</p>
          <p className={style.privacyNotificationNav}>
            <Button
              styleClassName={style.privacyNotificationBtn}
              onClick={buttonClickHandler}
              size={btnAccept.size}
              type={btnAccept.type}
            >
              {btnAccept.title}
            </Button>
            <ButtonHref url={linkMore.url} size={linkMore.size} type={linkMore.type}>
              {linkMore.title}
            </ButtonHref>
          </p>
        </div>
      </div>
    )
  );
}

export default Privacy;
