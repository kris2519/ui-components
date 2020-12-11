// @flow

import React from 'react';

type PropsType = {
  /** прогресс загрузки в процентах */
  loading: number,
  /** стили (CSS-модули) */
  style: {}
};

function ProgressBar({ loading, style = {} }: PropsType) {
  return (
    <div className={style.progressBarLoaderBox}>
      <div className={style.progressBarLoader} style={{ width: `${loading}%` }} />
    </div>
  );
}

export default ProgressBar;
