// @flow

import React, { PureComponent } from 'react';

type PropsType = {
  /** дочерний элемент */
  children: any,
  /** стили (CSS-модули) */
  style: {}
};

class Table extends PureComponent<PropsType> {
  render() {
    const { children, style = {} } = this.props;

    return (
      <div className={style.tableHolder}>
        <div className={style.tableScroll}>
          <div className={style.table}>
            {React.Children.map(children, child => child != null && React.cloneElement(child, { style }))}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
