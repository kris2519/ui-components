// @flow

import React from 'react';

type PropsType = {
  children: any,
  nav: any,
  style: {}
};

function Standings({ children = null, nav = null, style = {} }: PropsType) {
  return (
    <div className={style.standings}>
      {nav && <div className={style.standingsNav}>{nav}</div>}
      <div className={style.standingsContent}>{children}</div>
    </div>
  );
}

export default Standings;
