import React, { Component } from "react";
import axios from "axios";
const date = require("date-and-time");
const now = new Date();
const ditaSot = date.format(now, "dddd");
console.log(ditaSot);

const hene = "E hene";
const marte = "E marte";
const merkure = "E merkure";
const enjte = "E enjte";
const premte = "E premte";

const Schedule = (props) => (
  <tr>
    <td>{props.schedule.professor}</td>
    <td>{props.schedule.subject}</td>
    <td>{props.schedule.ects}</td>
    <td>{props.schedule.nrhours}</td>
    <td>{props.schedule.day}</td>
    <td>{props.schedule.duration}</td>
    <td>{props.schedule.classroom}</td>
    <td>{props.schedule.stype}</td>
    <td>{props.schedule.group}</td>
    <td>{props.schedule.semester}</td>
    <td>{props.schedule.note}</td>
  </tr>
);

export default class ListaSot extends Component {
  constructor(props) {
    super(props);
    this.state = { schedules: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/schedules/")
      .then((response) => {
        this.setState({ schedules: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  scheduleList() {
    return this.state.schedules.map((currentschedule) => {
      if (currentschedule.day === hene && ditaSot === "Monday") {
        return (
          <Schedule
            schedule={currentschedule}
            deleteSchedule={this.deleteSchedule}
            key={currentschedule._id}
          />
        );
      }
      if (currentschedule.day === marte && ditaSot === "Tuesday") {
        return (
          <Schedule
            schedule={currentschedule}
            deleteSchedule={this.deleteSchedule}
            key={currentschedule._id}
          />
        );
      }
      if (currentschedule.day === merkure && ditaSot === "Wednesday") {
        return (
          <Schedule
            schedule={currentschedule}
            deleteSchedule={this.deleteSchedule}
            key={currentschedule._id}
          />
        );
      }
      if (currentschedule.day === enjte && ditaSot === "Thursday") {
        return (
          <Schedule
            schedule={currentschedule}
            deleteSchedule={this.deleteSchedule}
            key={currentschedule._id}
          />
        );
      }
      if (currentschedule.day === premte && ditaSot === "Friday") {
        return (
          <Schedule
            schedule={currentschedule}
            deleteSchedule={this.deleteSchedule}
            key={currentschedule._id}
          />
        );
      }
    });
  }

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Orari i Sotem</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Profesori</th>
              <th>Lenda</th>
              <th>ECTS</th>
              <th>Fondi</th>
              <th>Dita</th>
              <th>Koha</th>
              <th>Salla</th>
              <th>Ligjerate/Ushtrime</th>
              <th>Grupet</th>
              <th>Semestri</th>
              <th>Verejtje</th>
            </tr>
          </thead>
          <tbody>{this.scheduleList()}</tbody>
        </table>
      </div>
    );
  }
}
