// @flow

import React from 'react';

type PropsType = {
  /** дочерний элемент */
  children: any,
  style: {}
};

function Grid({ children, style = {} }: PropsType) {
  return (
    <ul className={style.grid}>
      {React.Children.map(
        children,
        (child, index) =>
          child != null && (
            // eslint-disable-next-line react/no-array-index-key
            <li className={style.gridItem} key={index}>
              {child}
            </li>
          )
      )}
    </ul>
  );
}

export default Grid;
