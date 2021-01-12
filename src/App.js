import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import StudentsList from "./components/StudentsList/StudentsList";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchByTag from "./components/SearchByTag/SearchByTag";

class App extends Component {
  state = {
    students: [],
    value: "",
  };

  componentDidMount() {
    axios.get("https://api.hatchways.io/assessment/students").then((res) => {
      let updatedData = res.data.students.map((obj, i) => {
        return Object.assign(obj, (obj.tags = []));
      });
      this.setState({
        students: updatedData,
      });
    });
  }

  addNewTag = (e) => {
    if (e.keyCode === 13) {
      let studentsCopy = this.state.students.slice();
      studentsCopy
        .find((x) => x.id === e.target.name)
        .tags.push(e.target.value);

      let newTag = [e.target.value];
      let i = Number(e.target.name);

      console.log(i);
      console.log(newTag);

      this.setState({
        students: studentsCopy,
      });
    }
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      value: e.target.value,
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
        <StudentsList
          students={this.state.students}
          value={this.state.value}
          addNewTag={this.addNewTag}
        />
      </>
    );
  }
}

export default App;
