import React, { Component } from "react";

import Button from "react-bootstrap/Button";

export default class Btn extends Component {
  constructor() {
    super();
    this.state = {
      count: null,
      name: "deepak",
      kuchh: 11212,
    };
  }

  kuchhBhi = () => {
    this.setState({
      count: 1,
      name: "Amaan",
    });
  };

  render() {
    return (
      <>
        <Button className="container" variant={this.props.variant} onClick={this.kuchhBhi}>
          {this.props.name}
        </Button>
        <h1>
          {this.state.count} {this.state.name}
        </h1>
      </>
    );
  }
}
