// @flow

import React from 'react';

type PropsType = {
  /** дочерний элемент */
  children: any,
  /** стили (CSS-модули) */
  style: {}
};

function List({ children, style = {} }: PropsType) {
  return (
    <ul className={style.list}>
      {React.Children.map(
        children,
        (child, index) =>
          child != null && (
            // eslint-disable-next-line react/no-array-index-key
            <li className={style.item} key={index}>
              {child}
            </li>
          )
      )}
    </ul>
  );
}

export default List;
