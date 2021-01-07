import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./StudentsList.css";

import Student from "../Student/Student";

class Students extends Component {
  render() {
    if (!this.props.students === null ) {
      return <h1>Loading !!!</h1>;
    } else {

        let studentsNames = [];
        let studentsLastnames = [];
        let studentFullnames = [];
        let valueTolowCase = this.props.value.toLowerCase();
        let fullName = valueTolowCase.split(" ");

       let studentsByName = this.props.students.map((student) => {
          return student.firstName
            .toLowerCase()
            .substring(0, this.props.value.length);
        });

        let studentsbyLastname = this.props.students.map((student) => {
          return student.lastName
            .toLowerCase()
            .substring(0, this.props.value.length);
        });




      if (!this.props.value || this.props.value.length === 1) {
        const fullStudentList = this.props.students.map((student, i) => {
          return <Student key={uuidv4()} student={student} index={i} />;
        });

        return <ul className="container"> {fullStudentList} </ul>;
      } else {

       if(studentsByName.includes(valueTolowCase) ||
         studentsbyLastname.includes(valueTolowCase) ||  
          valueTolowCase.indexOf(" ") >= 0  && studentsByName.includes(fullName[0])
            )
          {
          
          if (this.props.value.length > 1) {  
            if (studentsByName.includes(valueTolowCase)) {
              studentsByName.filter((name, i) => {
                return name === valueTolowCase
                  ? studentsNames.push(this.props.students[i])
                  : "";
              });
            }
          }
  
          // check for user input in the students array LASTNAME property or return an error msg
          if (this.props.value.length > 1) {
            if (studentsbyLastname.includes(valueTolowCase)) {
              studentsbyLastname.filter((name, i) => {
                return name === valueTolowCase
                  ? studentsLastnames.push(this.props.students[i])
                  : "";
              });
            }
          }
  
          if (
            (studentsByName &&
              studentsByName.includes(fullName[0]) &&
              studentsbyLastname &&
              studentsbyLastname.includes(fullName[1])) ||
            fullName[1] || 
            this.props.value.indexOf(" ") >= 0
          ) {
            let i = studentsByName.indexOf(fullName[0]);
  
            studentFullnames.push(this.props.students[i]);
          }
  
          let filterStudentList =
            studentFullnames.length === 1
              ? studentFullnames
              : studentsNames.concat(studentsLastnames);
  
          let filterJSXList = filterStudentList.map((student, i) => {
            return <Student key={uuidv4()} student={student} index={i} />;
          });
          console.log(this.props.value);
          console.log(fullName[1]);
          return <ul className="container"> {filterJSXList} </ul>;
       }
       else { 
        
        return <h1>This name is not in our database, please try a diferent one !!!!</h1>
        }
      }
    }
  }
}

export default Students;
