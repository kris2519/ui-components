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

function TableRow({ row = [], children, style = {}, styleClassName = null }: PropsType) {
  const tableRow = row.filter(item => item != null);
  const tableRowChildren = React.Children.map(children, item => item);
  const tableRowFiltered = tableRowChildren.filter(item => item != null);
  return (
    <div className={classNames(style.tableRow, styleClassName)}>
      {tableRowFiltered.map((cell, index) => (
        <div
          /* eslint-disable-next-line react/no-array-index-key */
          key={index}
          className={classNames(
            style.tableCell,
            {
              [style.modMediaFixed]: tableRow[index] && tableRow[index].isMediaFixed
            },

            tableRow[index] && style[`${tableRow[index].cellClassName}`]
          )}
        >
          {tableRow[index] && tableRow[index].hasCustomHtml ? (
            cell
          ) : (
            <span
              className={classNames(style.tableCellText, {
                [style.modHighlighted]: tableRow[index] && tableRow[index].isHighlighted
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

export default TableRow;
