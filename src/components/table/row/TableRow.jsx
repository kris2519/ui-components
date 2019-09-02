// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import uuidv4 from 'uuid/v4';

type PropsType = {
  children: any,
  data: Array<{
    value: string | number,
    isHighlighted?: boolean
  }>
};

class TableRow extends PureComponent<PropsType> {
  render() {
    const { data, children, style } = this.props;

    return (
      <div className={style.tableRow}>
        <div className={classNames(style.tableCell, style.modMediaFixed)}>{children}</div>
        {data.map(cell => (
          <div className={style.tableCell} key={uuidv4()}>
            <span className={classNames(style.tableCellText, { [style.modHighlighted]: cell.isHighlighted })}>
              {cell.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default TableRow;
