// @flow

import React, { Component } from 'react';

type PropsType = {
  style: string,
  defaultActive: number,
  valueToGet: string | Array<string>,
  children: any,
  onTabClick: (value1: string | number | Array<string | number | boolean>) => void,
  handleTabClick: ?(value: string | number) => void,
  showActive: boolean
};

type StateType = {
  activeTab: number
};

class Tabs extends Component<PropsType, StateType> {
  static getDerivedStateFromProps(props: PropsType, state: StateType) {
    if (props.defaultActive !== state.activeTab) {
      return { activeTab: props.defaultActive };
    }
    return null;
  }

  state = {
    activeTab: 0
  };

  /**
   * устанавливает текущий таб
   */
  componentDidMount() {
    const { defaultActive = 0 } = this.props;
    this.setState({ activeTab: defaultActive });
  }

  render() {
    const { activeTab } = this.state;
    const { children, onTabClick, valueToGet, style, handleTabClick = null, showActive = true } = this.props;
    const tabs = React.Children.map(children, (item, index) =>
      React.cloneElement(item, {
        key: item.value,
        isActive: showActive ? index === activeTab : false,
        style,
        onTabClick: () => {
          this.setState({
            activeTab: index
          });
          if (typeof valueToGet === 'string') {
            onTabClick(item.props[valueToGet]);
          }
          if (Array.isArray(valueToGet)) {
            const funArgs = valueToGet.filter(value => {
              // eslint-disable-next-line no-prototype-builtins
              if (!item.props.hasOwnProperty(value)) {
                /* eslint-disable-line */
                console.error(`UITabs, UiTab---> ${value} not found in items props`);
                return false;
              }
              return true;
            });
            onTabClick(funArgs.map(value => item.props[value]));
          }
          if (typeof handleTabClick === 'function') {
            handleTabClick(index);
          }
        }
      })
    );

    return <ul className={style.tabs}>{tabs}</ul>;
  }
}

export default Tabs;
