import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button
        className="toggle"
        onClick={this.props.clickHandler}
        value={this.props.index}
      >
        <h1>{this.props.sign}</h1>
      </button>
    );
  }
}

export default Button;
