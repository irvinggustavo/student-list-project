import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Students from "./components/StudentsList/StudentsList";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchByTag from "./components/SearchByTag/SearchByTag";

class App extends Component {
  state = {
    students: [],
    value: "",
  };

  componentDidMount() {
    axios.get("https://api.hatchways.io/assessment/students").then((res) => {
      this.setState({
        students: res.data.students,
      });
    });
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <>
        <SearchBar
          students={this.state.students}
          changeHandler={this.changeHandler}
          value={this.state.value}
        />
        <SearchByTag />
        <Students students={this.state.students} value={this.state.value} />
      </>
    );
  }
}

export default App;
