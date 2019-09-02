import React, { Component } from 'react';
import './styles/base.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Webpack</h1>
        <h1 className="blue" id="blue">
          Do you know, where is my build directory?
        </h1>
        <svg fill="red">
          <use xlinkHref="sprite.svg#instagram" />
        </svg>
      </div>
    );
  }
}

export default App;
