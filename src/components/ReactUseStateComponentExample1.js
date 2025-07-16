import React, { Component } from 'react';

class ReactUseStateComponentExample1 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  handleDecrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }
  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleIncrement}> increment</button>
          <button onClick={this.handleDecrement}>dicrement </button>
          <button onClick={this.handleReset}>reset</button>
        </div>
        <div> count : {this.state.count}</div>
      </div>
    );
  }
}

export default ReactUseStateComponentExample1;
