import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import "./NewTagInput.css";

class NewTagInput extends Component {
  render() {

    return (
      <>
        <form onSubmit={this.props.submitHandler}>
          <input
            className="tag_input"
            name={this.props.id}
            placeholder="Add a new tag"
            type="text"
            onKeyDown={this.props.onKeyDownHandler}
          />
        </form>
      </>
    );
  }
}

export default NewTagInput;
