// @flow

import React from 'react';

type PropsType = {
  /** название матча */
  name: string,
  /** children компоненты */
  children: any,
  /** стили (CSS-модули) */
  style: {}
};

function MatchInfo({ name, children, style = {} }: PropsType) {
  return (
    <div className={style.matchInfo}>
      {name && <p className={style.matchName}>{name}</p>}
      {children}
    </div>
  );
}

export default MatchInfo;
