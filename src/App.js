import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import StudentsList from "./components/StudentsList/StudentsList";
import SearchBar from "./components/SearchBar/SearchBar";

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

      this.setState({
        students: studentsCopy,
      });
    }
  };

  studentFinder = (e) => {
    e.preventDefault();
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <>
        <SearchBar
          name="searchByNames"
          placeholder="Search By Name"
          students={this.state.students}
          namesHandler={this.studentFinder}
          value={this.state.value}
        />
        {/* <SearchBar
          name="searchByTags"
          placeholder="Search By Tag"
          students={this.state.students}
          tagFinder={this.tagFinder}
          value={this.state.tagsValue}
        /> */}
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
