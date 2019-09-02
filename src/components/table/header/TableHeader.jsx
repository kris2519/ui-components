// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import uuidv4 from 'uuid/v4';

type PropsType = {
  data: Array<{
    title: string
  }>,
  typeText: string
};

class TableHeader extends PureComponent<PropsType> {
  render() {
    const { typeText, data, style } = this.props;

    return (
      <div className={style.tableHeader}>
        <div className={classNames(style.tableHeaderCell, style.modMediaFixed)}>
          <span className={style.tableHeaderCellText}>{typeText}</span>
        </div>
        {data.map(cell => (
          <div className={style.tableHeaderCell} key={uuidv4()}>
            <span className={style.tableHeaderCellText}>{cell.title}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default TableHeader;
