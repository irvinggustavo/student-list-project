import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Student.css";

import NewTag from "../NewTag/NewTag";
import Button from "../Button/Button";

class Student extends Component {
  state = {
    plusORminus: "+",
    visible: false,
    students: [],
    newTags: [],
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  addNewTag = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        newTags: [...this.state.newTags, e.target.value],
      });
    }
  };

  toggle = () => {
    this.setState({
      plusORminus: this.state.visible ? "+" : "-",
      visible: !this.state.visible,
    });
  };

  render() {
    let grades = this.props.student.grades.map((i) => Number(i));
    let averageGrade =
      grades.reduce((accumulator, currentValue) => accumulator + currentValue) /
      grades.length;

    return (
      <li key={uuidv4()} className="student__container">
        <img
          className="student__pic"
          src={this.props.student.pic}
          alt={`student ${this.props.student.firstName} ${this.props.student.lastName}`}
        />

        <div className="student__innerContainer">
          <h1>
            {this.props.student.firstName} {this.props.student.lastName}
          </h1>
          <div className="student__details">
            <p>Email: {this.props.student.email}</p>
            <p>Company: {this.props.student.company}</p>
            <p>Skill : {this.props.student.skill}</p>
            <p>Average : {averageGrade} %</p>

            <ul className={this.state.visible === true ? "vissible" : "hidden"}>
              {this.props.student.grades.map((grade) => (
                <li key={uuidv4()} className="student__grades">
                  Test: {grade} %
                </li>
              ))}
            </ul>
            <NewTag
              submitHandler={this.submitHandler}
              onKeyDownHandler={this.addNewTag}
              newTagsList={this.state.newTags}
              index={this.props.index}
            />
          </div>
        </div>
        <Button sign={this.state.plusORminus} clickHandler={this.toggle} />
      </li>
    );
  }
}

export default Student;
