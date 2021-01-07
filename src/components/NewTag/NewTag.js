import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTag.css";

class NewTag extends Component {
  render() {
    let mapingTags = this.props.newTagsList.map((item, i) => {
      return (
        <li className="tag tag__square" key={uuidv4()} index={i}>
          {" "}
          {item}{" "}
        </li>
      );
    });

    return (
      <>
        <ul className="tag__container">{mapingTags}</ul>
        <form onSubmit={this.props.submitHandler} index={this.props.index}>
          <input
            className="tag_input"
            name={this.props.index}
            placeholder="Add a new tag"
            type="text"
            onKeyDown={this.props.onKeyDownHandler}
          />
        </form>
      </>
    );
  }
}

export default NewTag;
