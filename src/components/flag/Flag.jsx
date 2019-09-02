// @flow

import React from 'react';

type PropsType = {
  /** код страны */
  code: string
};

function Flag({ code, style }: PropsType) {
  const getIcon = (iconCode: string): any => {
    try {
      /* $flow-disable-line */
      return require(`./svg/${iconCode}.svg`);
    } catch (e) {
      return require(`./svg/cis.svg`);
    }
  };
  const countryCode = getIcon(code);
  if (!countryCode.default) {
    countryCode.default = {};
  }

  return (
    <svg
      /* $flow-disable-line */
      viewBox={countryCode.default.viewBox}
      /* $flow-disable-line */
      className={style.flag}
    >
      <use
        /* $flow-disable-line */
        xlinkHref={`#${countryCode.default.id}`}
      />
    </svg>
  );
}

export default Flag;
