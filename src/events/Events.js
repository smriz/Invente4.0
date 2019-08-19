import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "../components/sidebar";
import EventDetail from "./EventDetail";
import EventList from "./EventList";
import DepartmentList from "./DepartmentList";
import { Helmet } from "react-helmet";
import Stars from "../components/stars";

class Events extends React.Component {
  render() {
    return (
      <div className="holi">
        <Sidebar />
        <Helmet>
          <title> Events | Invente 4.0</title>
        </Helmet>

        {/* <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        > */}
          <Stars />
          <div
           className="stars-overlay"
          >
            <Route exact path="/events" component={DepartmentList} />
            <Route exact path="/events/:dept" component={EventList} />
            <Route exact path="/events/:dept/:slug" component={EventDetail} />
          </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Events;
