// возвращает cookie с именем name, если есть, если нет, то undefined
export function getCookie(name) {
  const matches = document.cookie.match(
    // eslint-disable-next-line no-useless-escape
    new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// устанавливает cookie с именем name и значением value
// options - объект с свойствами cookie (expires, path, domain, secure)
export function setCookie(name, value, options = {}) {
  // eslint-disable-next-line no-param-reassign
  options = {
    path: '/',
    samesite: 'Lax',
    ...options
  };

  let { expires } = options;

  if (typeof expires == 'number' && expires) {
    const d = new Date();
    d.setTime(d.getTime() + expires * 1e12);
    // eslint-disable-next-line no-multi-assign,no-param-reassign
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    // eslint-disable-next-line no-param-reassign
    options.expires = expires.toUTCString();
  }

  // eslint-disable-next-line no-param-reassign
  value = encodeURIComponent(value);

  let updatedCookie = `${name}=${value}`;

  // eslint-disable-next-line guard-for-in
  for (const propName in options) {
    updatedCookie += `; ${propName}`;
    const propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += `=${propValue}`;
    }
  }

  document.cookie = updatedCookie;
}

// удаляет cookie с именем name
export function deleteCookie(name) {
  setCookie(name, '', {
    expires: -1
  });
}
