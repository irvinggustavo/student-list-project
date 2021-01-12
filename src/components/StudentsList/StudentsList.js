import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./StudentsList.css";

import Student from "../Student/Student";

class StudentsList extends Component {
  // state = {
  //   newTags: Array.from(Array(27), (x, i) => [i]),
  // };

  submitHandler = (event) => {
    event.preventDefault();
  };

  // addNewTag = (e) => {
  //   if (e.keyCode === 13) {
  //     let updatedTagContainer = this.state.newTags.splice(0, 25);
  //     let newTag = e.target.value;
  //     let i = Number(e.target.name);
  //     updatedTagContainer[i].push(newTag);


  //     this.setState({
  //       newTags: updatedTagContainer,
  //     });
  //   }
  // };

  filterStudents(arr, arr2, arr3, query) {
    return arr.filter((profile, i) => {
      return profile.toLowerCase().indexOf(query.toLowerCase()) !== -1
        ? arr2.push(arr3[i])
        : "";
    });
  }

  render() {
    // console.log(this.state.newTags);
    if (!this.props.students === null) {
      return <h1>Loading !!!</h1>;
    } else {
      if (!this.props.value || this.props.value.length === 1) {
        const fullStudentList = this.props.students.map((student, i) => {
          return (
            <Student
              key={uuidv4()}
              student={student}
              index={i}
              submitHandler={this.submitHandler}
              addNewTag={this.props.addNewTag}
              // newTags={this.state.newTags}
            />
          );
        });

        return <ul className="container"> {fullStudentList} </ul>;
      } else {
        const value = this.props.value.toLowerCase();
        const splitValue = value.split(" ");
        const profilesByNames = [];
        const profilesByLastNames = [];
        let studentsProfiles = [];
        let profiles = [];

        const studentsByName = this.props.students.map((student) => {
          return student.firstName
            .toLowerCase()
            .substring(0, this.props.value.trim().length);
        });

        const studentsbyLastname = this.props.students.map((student) => {
          return student.lastName
            .toLowerCase()
            .substring(0, this.props.value.length);
        });

        const studentsFullName = this.props.students.map((student) => {
          return (
            student.firstName.toLowerCase() +
            " " +
            student.lastName.toLowerCase()
          ).substring(0, this.props.value.length);
        });

        if (studentsFullName.includes(value)) {
          if (
            studentsByName.includes(splitValue[0]) ||
            studentsbyLastname.includes(splitValue[0])
          ) {
            this.filterStudents(
              studentsByName,
              profilesByNames,
              this.props.students,
              splitValue[0]
            );

            this.filterStudents(
              studentsbyLastname,
              profilesByLastNames,
              this.props.students,
              splitValue[0]
            );

            profiles = profilesByNames.concat(profilesByLastNames);
          } else {
            studentsFullName.filter((student, i) => {
              return student === value
                ? studentsProfiles.push(this.props.students[i])
                : "";
            });
          }
          let data = profiles ? profiles : studentsProfiles;

          const studentsProfilesJSX = data.map((profile, i) => {
            return (
              <Student
                key={uuidv4()}
                student={profile}
                index={i}
                submitHandler={this.submitHandler}
                addNewTag={this.props.addNewTag}
                // newTags={this.state.newTags}
              />
            );
          });

          return <ul>{studentsProfilesJSX}</ul>;
        } else {
          let errMsg = "";

          if (
            studentsByName.includes(splitValue[0]) ||
            studentsbyLastname.includes(splitValue[0])
          ) {
            this.filterStudents(
              studentsByName,
              profilesByNames,
              this.props.students,
              splitValue[0]
            );

            this.filterStudents(
              studentsbyLastname,
              profilesByLastNames,
              this.props.students,
              splitValue[0]
            );

            profiles = profilesByNames.concat(profilesByLastNames);
          } else {
            errMsg = (
              <h1>
                {" "}
                This student is not in our database, try a diferent one !!!
              </h1>
            );
          }

          if (
            studentsByName.indexOf(splitValue[0]) >= 1 &&
            studentsbyLastname.indexOf(splitValue[0]) === -1
          ) {
            errMsg = (
              <h1>
                {" "}
                This student is not in our database, try a diferent one !!!
              </h1>
            );
          }

          if (
            studentsByName.indexOf(splitValue[0]) === -1 &&
            studentsbyLastname.indexOf(splitValue[0]) === -1
          ) {
            errMsg = (
              <h1>
                {" "}
                This student is not in our database, try a diferent one !!!
              </h1>
            );
          }

          const studentsProfilesJSX = profiles.map((profile, i) => {
            return (
              <Student
                key={uuidv4()}
                student={profile}
                index={i}
                submitHandler={this.submitHandler}
                // newTags={this.state.newTags}
                addNewTag={this.props.addNewTag}
              />
            );
          });

          return errMsg ? errMsg : <ul>{studentsProfilesJSX}</ul>;
        }
      }
    }
  }
}

export default StudentsList;
