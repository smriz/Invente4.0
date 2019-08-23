import React from "react";
import Sidebar from "./sidebar";
import Aboutinvente from "../Home/aboutinvente";
import Flagship from "../Home/flagship";
import Spinner from "../Home/spinner";
import Logo from "../images/ssn.png";
import Ring from "../Home/ring";
import Spheres from "../Home/spheres";
import { Helmet } from "react-helmet";
import ReactFullpage from "@fullpage/react-fullpage";

class Home extends React.Component {
  state = {
    isLoading: true
  };
  constructor(props) {
    super(props);

    this.state = { show: true };
    this.state = { isLoading: false };
  }
  onLeave(origin, destination, direction) {
    console.log(
      "Leaving section " + origin.index + "hello" + destination.index
    );
    if (origin.index === 0) {
      this.setState({ show: false });
    }
    if (origin.index === 1 && destination.index === 0) {
      this.setState({ show: true });
    }
    // this.setState({ show: !this.state.show });
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    console.log(this.state.isLoading);
  }
  render() {
    if (this.state) {
      return (
        <div>
          <Sidebar />
          <div style={{ position: "fixed" }}>
            <ReactFullpage
              scrollOverflow={true}
              sectionsColor={["", "", ""]}
              onLeave={this.onLeave.bind(this)}
              afterLoad={this.afterLoad.bind(this)}
              render={({ state, fullpageApi }) => {
                return (
                  <div id="fullpage-wrapper">
                    <div
                      className="section section1"
                      style={{ overflow: "hidden" }}
                    >
                     {/* <Spinner/> */}

                       <Spheres show={this.state.show} />
                       <img 
                        src={Logo}
                        className="logo"
                      />
                      <Ring /> 
                    </div>
                    <div className="section section1">
                      <Aboutinvente show={this.state.show} />
                    </div>

                    <div className="section section1">
                      <Flagship />
                    </div>

                    {
                      <div className="section">
                        <div id="guest-of-honor">
                          <div id="guest-content">
                            <div id="head">Our Chief Guest for Invente 4.0</div>
                            <div id="photo">
                              <img
                                src={require("../images/organisers/Placeholder.svg")}
                                width="200px"
                                height="200px"
                              />
                            </div>
                            <div id="head">
                              <span style={{ color: "#ff9800" }}>
                                {" "}
                                Dr. A.K Rawat
                              </span>
                              <br />
                              Department of biotechnology , DST
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                );
              }}
            />
          </div>
        </div>
      );
    } else {
      return <p>hello</p>;
    }
  }
}
export default Home;
