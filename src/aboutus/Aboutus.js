import React from "react";
import { Route } from "react-router-dom";
import AboutusList from "./AboutusList";
import AboutusDetails from "./AboutusDetails";
import { Helmet } from "react-helmet";
import Stars from "../components/stars";
import Home from "../components/Home";
import Sidebar from "../components/sidebar";

class Events extends React.Component {
  render() {
    return (
      <div className="holi">
        <Helmet>
          <title> About Us | Invente 4.0</title>
        </Helmet>
        <Sidebar />
         {/* <div
          style={{
			position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >  */}
          <Stars />
          <div
          className="stars-overlay"
          >
             <Route exact path="/about-us" component={AboutusList} />
             <Route exact path="/about-us/Home" component={Home} />
             {/* <Route exact path="/about-us/:about" component={AboutusDetails} /> */}
      </div>
         </div> 
        // </div>
    );
  }
}

export default Events;
