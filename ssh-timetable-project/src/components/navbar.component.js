import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DataP = (props) => (
  <Link to="/listasot" className="nav-link">
    Orari Sot {props.dataV.date}
  </Link>
);

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { dataA: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:7888/api/time")
      .then((res) => {
        this.setState({ dataA: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  kohaShow() {
    return this.state.dataA.map((dataTash) => {
      return <DataP dataV={dataTash} key={dataTash.date} />;
    });
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Orari FIEK
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Oraret
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Krijo orarin
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Krijo perdoruesin
              </Link>
            </li>
            <li className="navbar-item">
              <a href="http://localhost:5555" className="nav-link">
                Takimet
              </a>
            </li>
            <li className="navbar-item" style={{ align: "right" }}>
              {this.kohaShow()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
