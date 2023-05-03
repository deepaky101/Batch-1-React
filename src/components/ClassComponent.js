//~ ==============> React Libraries <==============
import React, { Component } from "react";

//~ ==============> Bootstrap Components <==============
import Button from "react-bootstrap/Button";

export default class ClassComponent extends Component {
  constructor() {
    super();
    //~ ==============> To define State Variables <==============
    this.state = {
      count: 0,
      name: "Deepak",
    };
  }

  changeState = () => {
    //~ ==============> To Update State Variables <==============
    this.setState({
      count: this.state.count + 1,
      name: "Amaan",
    });
  };

  render() {
    return (
      <>
        <div>
          {/* //~ ==============> To use Props --> this.props.propsName <============== */}
          <Button variant={this.props.variant} onClick={this.changeState}>
            {this.props.name}
          </Button>
          <h1>
            {this.state.count} {this.state.name}
          </h1>
        </div>
        <h3>To Understand Class based Components</h3>
      </>
    );
  }
}
