// @flow

import React from 'react';
import classNames from 'classnames';

type PropsType = {
  /** дочерний элемент */
  children: any,
  /** параметры ячейки в строке таблицы */
  row: Array<{
    /** кастомный html код */
    hasCustomHtml: boolean,
    /** выделение */
    isHighlighted: boolean,
    /** фиксированная ширина для респонсива */
    isMediaFixed: boolean,
    /** кастомный класс */
    cellClassName: string
  }>,
  /** стили (CSS-модули) */
  style: {}
};

function TableHeader({ row = [], children, style = {} }: PropsType) {
  const tableHeader = row.filter(item => item != null);
  const tableHeaderChildren = React.Children.map(children, item => item);
  const tableHeaderFiltered = tableHeaderChildren.filter(item => item != null);
  return (
    <div className={style.tableHeader}>
      {tableHeaderFiltered.map((cell, index) => (
        <div
          /* eslint-disable-next-line react/no-array-index-key */
          key={index}
          className={classNames(
            style.tableHeaderCell,
            {
              [style.modMediaFixed]: tableHeader[index] && tableHeader[index].isMediaFixed
            },

            tableHeader[index] && style[`${tableHeader[index].cellClassName}`]
          )}
        >
          {tableHeader[index] && tableHeader[index].hasCustomHtml ? (
            cell
          ) : (
            <span
              className={classNames(style.tableHeaderCellText, {
                [style.modHighlighted]: tableHeader[index] && tableHeader[index].isHighlighted
              })}
            >
              {cell}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default TableHeader;
