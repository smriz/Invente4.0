import React from "react";
import eventdetail from "../data/eventdetail.json";
import ContactCard from "../components/ContactCard";
import FA from "react-fontawesome";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ENETDOWN } from "constants";

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: 0
    };
  }
  render() {
    let { dept, slug } = this.props.match.params;
    let event = eventdetail[dept][slug];

    return (
      <div className="events">
        <Helmet>
          <title>
            {event.displayName} | {dept}
          </title>
        </Helmet>

        <div
          data-aos="fade-zoom-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div align="center">
            <h6 className="top" style={{ width: "90%" }}>
              {this.props.location.pathname
                .split("/")
                .splice(1)
                .map((x, i, arr) => [
                  <Link to={"/" + _.slice(arr, 0, i + 1).join("/")}>
                    {i === 1 ? " >" : ""} {i === 2 ? ">" : ""} {x}
                  </Link>
                ])}
            </h6>
            <img
              className="headline"
              style={{ width: "80%" }}
              src={require("../images/heading_line_thin.svg")}
              alt={""}
            />

            <h6
              style={{
                marginTop: "3%",
                letterSpacing: "1px",
                textTransform: "initial"
              }}
            >
              {event.displayName}
            </h6>
            {event.tagline && <h6 className="tagline">{event.tagline}</h6>}
          </div>
          <div className="description" style={{ lineHeight: "25px" }}>
            {event.description &&
              event.description.split("\n").map(x => <div>{x}</div>)}
          </div>
          <div
            className="description"
            style={{ lineHeight: "25px", marginTop: "3%" }}
          >
            <h6
              className="tagline"
              style={{ color: "#ff9800", textTransform: "initial" }}
            >
              General Rules <br />
            </h6>

            {event.general_rules &&
              event.general_rules
                .split("\n")
                .map(x => (x !== "" ? <div>* {x}</div> : ""))}
          </div>
          {event.eventtype === "Workshop" && (
            <a
              target="_blank"
              className="16m-"
              style={{
                margin: "16px auto",
                marginLeft: "auto",
                background: "purple",
                display: "inline-block",
                color: "white",
                padding: "8px 16px"
              }}
              className="workshop-register"
              href="http://bit.ly/ssninventeworkshops"
            >
              Register Here
            </a>
          )}

          {event.eventtype === "Hackathon" && (
            <a
              target="_blank"
              className="16m-"
              style={{
                margin: "16px auto",
                marginLeft: "auto",
                background: "purple",
                display: "inline-block",
                color: "white",
                padding: "8px 16px"
              }}
              className="workshop-register"
              href="http://hack-infinity.github.io"
            >
              Register Here
            </a>
          )}

          <div style={{ marginTop: "2%" }}>
            {event.timing && <Fielder field="DATE" content={event.timing} />}
            {event.venue && <Fielder field="VENUE" content={event.venue} />}
          </div>

          <p className="tagline" style={{ marginTop: "2%" }}>
            Number of Rounds : {event.no_of_rounds} <br />{" "}
          </p>

          <div style={{ marginTop: "3%" }}>
            {event.rounds && (
              <div className={"row rules-tab-holder"}>
                {event.rounds.map((x, i) => (
                  <div
                    className={`${
                      this.state.open === i ? "active" : ""
                    } rules-tab`}
                    onClick={() => {
                      this.setState({ open: i });
                    }}
                  >
                    Round {i + 1}
                  </div>
                ))}
              </div>
            )}
            {event.rounds && (
              <div className="rules-pane" style={{ lineHeight: "25px" }}>
                {event.rounds &&
                  event.rounds[this.state.open] &&
                  event.rounds[this.state.open].map(x =>
                    x.split("\n").map(x => <div>{x}</div>)
                  )}
              </div>
            )}
          </div>

          <div>
            <div
              className="card-set"
              align="center"
              style={{ marginTop: "5%" }}
            >
              {event.eventHeads.map(head => (
                <ContactCard contact={head} />
              ))}
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const Fielder = ({ field, content, color }) => (
  <div style={{ borderColor: color, margin: "8px 0" }} className="fielder row">
    <div
      style={{
        backgroundColor: "#ff9800",
        display: "inline-flex",
        width: "60px"
      }}
      className="row centerify"
    >
      {field}
      {/* <FA className="icon" name={icon} /> */}
    </div>
    <div>{content}</div>
  </div>
);

export default EventDetail;
