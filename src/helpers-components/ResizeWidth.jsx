// @flow

import React, { Component } from 'react';

type PropsType = {};

type StateType = {
  windowWidth: number
};

const resizeWindowWidth = (ResizeComponent: any) =>
  class ResizeWidthComponent extends Component<PropsType, StateType> {
    state = {
      windowWidth: 0
    };

    componentDidMount() {
      this.getWindowWidth();
      window.addEventListener('resize', this.getWindowWidth);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.getWindowWidth);
    }

    getWindowWidth = () => {
      const windowWidth = window.innerWidth;
      this.setState({
        windowWidth
      });
    };

    render() {
      const { windowWidth } = this.state;
      const props = { ...this.props, windowWidth };
      return <ResizeComponent {...props} />;
    }
  };

export default resizeWindowWidth;
