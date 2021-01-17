import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {

    const {name, placeholder, namesHandler, tagFinder, value} = this.props;
    return (
      <input
        className="searchBar"
        type="text"
        name= {name}
        placeholder= {placeholder}
        onChange={ name === 'searchByNames' ? namesHandler : tagFinder}
        value={value}
      />
    );
  }
}

export default SearchBar;
