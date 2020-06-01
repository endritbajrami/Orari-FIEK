import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import SchedulesList from "./components/schedules-list.component";
import EditSchedule from "./components/edit-schedule.component";
import CreateSchedule from "./components/create-schedule.component";
import CreateUser from "./components/create-user.component";
import Chat from "./components/chat.component";
import ListaSot from "./components/lista-sot.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={SchedulesList} />
        <Route path="/edit/:id" component={EditSchedule} />
        <Route path="/create" component={CreateSchedule} />
        <Route path="/user" component={CreateUser} />
        <Route path="/chat" component={Chat} />
        <Route path="/listasot" component={ListaSot} />
      </div>
    </Router>
  );
}

export default App;
