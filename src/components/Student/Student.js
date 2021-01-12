import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Student.css";

import NewTagInput from "../NewTagInput/NewTagInput";
import Button from "../Button/Button";

class Student extends Component {
  state = {
    plusORminus: "+",
    visible: false,
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

    const dinamicTags = this.props.student.tags
      ? this.props.student.tags.map((tag) => {
          return (
            <li className="tag_input tag__square tag" key={uuidv4()}>
              {tag}
            </li>
          );
        })
      : "";

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
            <ul className="tag__container ">{dinamicTags}</ul>
            <NewTagInput
              submitHandler={this.props.submitHandler}
              onKeyDownHandler={this.props.addNewTag}
              index={this.props.index}
              id={this.props.student.id}
            />
          </div>
        </div>
        <Button sign={this.state.plusORminus} clickHandler={this.toggle} />
      </li>
    );
  }
}

export default Student;
