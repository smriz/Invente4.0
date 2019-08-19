import React from "react";
import about from "../data/aboutus.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../res/about.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class Aboutus extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About Us | Invente 4.0</title>
        </Helmet>
        <div
          className="aboutus"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <h6>About Us</h6>
          <img
            className="headline"
            src={require("../images/Heading_Line.svg")}
            alt={""}
          />
          <div
            data-aos="fade-zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <div className="container">
              <div className="caption">
                            {" "}
                {Object.keys(about).map(x => (
                  <Link to={`/about-us/${x}`}>
                                {" "}
                    <svg>
                      <defs>
                        <clipPath id="circleView">
                          <circle cx="125" cy="125" r="120" fill="#12345" />
                        </clipPath>
                      </defs>
                      <image
                        width="250"
                        height="220"
                        xlinkHref={require(`../images/about-us/${x}.svg`)}
                        clip-path="url(#circleView)"
                      />
                    </svg>
                    <div className="name">{about[x].name}</div>
                    <div className="pos">{about[x].pos}</div>
                                                                 
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Aboutus;
