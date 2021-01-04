import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <input
        className="searchBar"
        type="text"
        name="searchBar"
        placeholder="Search by Name"
        onChange={this.props.changeHandler}
        value={this.props.value}
      />
    );
  }
}

export default SearchBar;
