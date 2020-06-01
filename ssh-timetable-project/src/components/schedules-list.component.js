import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    <td>
      <Link to={"/edit/" + props.schedule._id}>Ndrysho</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteSchedule(props.schedule._id);
        }}
      >
        Fshij
      </a>
    </td>
  </tr>
);
const SemestriSS = "";
export default class SchedulesList extends Component {
  constructor(props) {
    super(props);
    this.deleteSchedule = this.deleteSchedule.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { schedules: [], semestriSelect: 0 };
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
  deleteSchedule(id) {
    axios.delete("http://localhost:5000/schedules/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      schedules: this.state.schedules.filter((el) => el._id !== id),
    });
  }

  scheduleList() {
    return this.state.schedules.map((currentschedule) => {
      if (
        this.SemestriSS === "Semestri 4" &&
        currentschedule.semester === "IV"
      ) {
        return (
          <Schedule
            schedule={currentschedule}
            deleteSchedule={this.deleteSchedule}
            key={currentschedule._id}
          />
        );
      }
      if (
        this.SemestriSS === "Semestri 3" &&
        currentschedule.semester === "III"
      ) {
        return (
          <Schedule
            schedule={currentschedule}
            deleteSchedule={this.deleteSchedule}
            key={currentschedule._id}
          />
        );
      }
      if (this.SemestriSS === "Te gjithe semestrat") {
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
  handleChange(e) {
    this.setState({ semestriSelect: e.target.value });
  }
  render() {
    this.SemestriSS = this.state.semestriSelect;
    return (
      <div className="form-group">
        <h3 style={{ textAlign: "center" }}>Oraret e krijuara</h3>
        <select
          value={SemestriSS}
          onChange={this.handleChange}
          className="form-control"
        >
          <option hidden>Zgjidhni Semestrin</option>
          <option>Te gjithe semestrat</option>
          <option>Semestri 1</option>
          <option>Semestri 2</option>
          <option>Semestri 3</option>
          <option>Semestri 4</option>
          <option>Semestri 5</option>
          <option>Semestri 6</option>
        </select>
        <br />
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
