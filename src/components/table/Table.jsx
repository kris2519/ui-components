// @flow

import React, { PureComponent } from 'react';

type PropsType = {
  children: any
};

class Table extends PureComponent<PropsType> {
  render() {
    const { children, style } = this.props;

    return (
      <div className={style.tableHolder}>
        <div className={style.tableScroll}>
          <div className={style.table}>{children}</div>
        </div>
      </div>
    );
  }
}

export default Table;
