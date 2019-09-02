// @flow

import React, { Component } from 'react';

type StateType = {
  hasError: boolean
};

type PropsType = {
  /** дочерний элемент */
  children: any
};

function withErrorBoundary(ComponentToWrap: any) {
  return class ErrorBoundary extends Component<PropsType, StateType> {
    state = { hasError: false };

    static getDerivedStateFromError(error: any): { hasError: boolean } {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    componentDidCatch(error: any, info: any) {
      // You can also log the error to an error reporting service
      console.error(error, info);
    }

    render() {
      const { hasError } = this.state;
      if (hasError) {
        // You can render any custom fallback UI
        return null;
      }

      return <ComponentToWrap {...this.props} />;
    }
  };
}

export default withErrorBoundary;
