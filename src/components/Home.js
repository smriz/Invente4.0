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
import NewHome from "../Home/NewHome";
import Cheifguest from "../Home/cheifguest";

class Home extends React.Component {
  state = {
    isLoading: true
  };
  constructor(props) {
    super(props);

    this.state = { show: true };
    this.state = { isLoading: false };
  }
  componentWillMount(){
    setTimeout(() => {
      document.removeEventListener('scroll', this.handleScroll, false);
  }, 25)
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

  componentDid() {
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
                     <React.Fragment>
                       <NewHome/> 

                     </React.Fragment> 
                     {/* <Spinner/> */}
{/* 
                       <Spheres show={this.state.show} />
                       <img 
                        src={Logo}
                        className="logo"
                      />  
                      <Ring />   */}
                    </div>
                    <div className="section section1">
                      <Aboutinvente show={this.state.show} />
                    </div>

                    <div className="section section1">
                      <Flagship />
                    </div>

                    {
                      <div className="section">
                       <Cheifguest/>
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
