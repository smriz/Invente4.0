import React from "react";
import eventlist from "../data/eventlist.json";
import eventdetail from "../data/eventdetail.json";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Helmet } from "react-helmet";
class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
  }

  sort(a, b) {
    let { dept } = this.props.match.params;
    let ea = eventdetail[dept][a];
    let eb = eventdetail[dept][b];
    return ea.isTechnical === eb.isTechnical ? 0 : ea.isTechnical ? -1 : 1;
  }

  render() {
    let { dept } = this.props.match.params;
    return (
      <div className="events">
        <Helmet>
          <title>{dept} | Invente 4.0</title>
        </Helmet>
        <div
          data-aos="fade-zoom-in"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div align="center">
            <h6 className="top">
              {this.props.location.pathname
                .split("/")
                .splice(1)
                .map((x, i, arr) => [
                  <Link to={"/" + _.slice(arr, 0, i + 1).join("/")}>
                    {i === 1 ? ">" : ""} {x}{" "}
                  </Link>
                ])}
            </h6>
            {/* <h6>Events > {dept}</h6> */}
            <img
              className="headline"
              style={{ width: "80%" }}
              src={require("../images/Heading_Line.svg")}
              alt={""}
            />

            <h6 style={{ color: "#ff9800", marginTop: "3%" }}>Technical</h6>
          </div>
          <div className="card-set">
            {Object.keys(eventdetail[dept]).map(x =>
              eventdetail[dept][x].isTechnical === true ? (
                <Link to={`/events/${dept}/${x}`} className="card-set-child">
                  <div align="center">
                    <div className="customdiv">
                    {require("../images/events/"+dept+"_"+
                            eventlist[dept][x] +
                            ".svg") ?
                      <img
                        src={require("../images/events/"+dept+"_"+
                        eventlist[dept][x] +
                        ".svg")} 
                      // src={require("../images/Capsule.svg")}
                       alt={x} /> : null}
                    </div>
                    <p
                      className="dept-name"
                      style={{
                        textAlign: "center",
                        letterSpacing: "1px",
                        textTransform: "initial"
                      }}
                    >
                      {eventlist[dept][x]}
                    </p>
                  </div>
                </Link>
              ) : (
                ""
              )
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <h6 style={{ color: "#ff9800", marginTop: "1%" }} className="">
            Non - Technical
          </h6>
          <div className="card-set">
            {Object.keys(eventdetail[dept])
              .sort(this.sort)
              .map(x =>
                eventdetail[dept][x].isTechnical === false ? (
                  <Link to={`/events/${dept}/${x}`} className="card-set-child">
                    <div align="center">
                      <div className="customdiv">
                       {require("../images/events/"+dept+"_"+
                            eventlist[dept][x] +
                            ".svg") ?
                        <img
                          src={require("../images/events/"+dept+"_"+
                            eventlist[dept][x] +
                            ".svg")}
                          alt={x}
                        />: null }
                      </div>
                      <p className="dept-name" style={{ textAlign: "center" }}>
                        {eventlist[dept][x]}
                      </p>
                    </div>
                  </Link>
                ) : (
                  ""
                )
              )}
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default EventList;
