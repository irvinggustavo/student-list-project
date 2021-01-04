import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./StudentsList.css";

import Student from '../Student/Student';

class Students extends Component {
  
  render() {

    if (!this.props.students === null) {
      return <h1>Loading !!!</h1>;
    } else {
      if (!this.props.value) {
        const fullStudentList = this.props.students.map((student) => {
          return <Student key = {uuidv4()} student ={student}/>;
        });

        return <ul className = 'container'> {fullStudentList} </ul>;
      } else {
        let studentsNames = [];
        let studentsLastnames = [];

        // check for user input in the students array NAME property or return an error msg
        if (this.props.value.length > 1) {
          let studentsByName = this.props.students.map((student) => {
            return student.firstName
              .toLowerCase()
              .substring(0, this.props.value.length);
          });

          if (studentsByName.includes(this.props.value)) {
            studentsByName.filter((name, i) => {
              return name === this.props.value
                ? studentsNames.push(this.props.students[i])
                : "";
            });
          } else {
            return <h1>Not Student with that name,try a diferent one !!!</h1>;
          }
        }

        // check for user input in the students array LASTNAME property or return an error msg
        if (this.props.value.length > 1) {
          let studentsbyLastname = this.props.students.map((student) => {
            return student.lastName
              .toLowerCase()
              .substring(0, this.props.value.length);
          });
          if (studentsbyLastname.includes(this.props.value)) {
            studentsbyLastname.filter((name, i) => {
              return name === this.props.value
                ? studentsLastnames.push(this.props.students[i])
                : "";
            });
          }
        }

        let filterStudentList =
          studentsNames.length > studentsLastnames.length
            ? studentsNames
            : studentsLastnames;

        let filterJSXList = filterStudentList.map((student) => {
          return <Student key = {uuidv4()} student ={student}/>;
        });

        return <ul className = 'container'> {filterJSXList} </ul> ;
      }
    }
  }
}

export default Students;
