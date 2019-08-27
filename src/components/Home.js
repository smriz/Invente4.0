import React from "react";
import Sidebar from "./sidebar";
import Stars from "./stars";
import Aboutinvente from "../Home/aboutinvente";
import Flagship from "../Home/flagship";
import Spinner from "../Home/spinner";
import Logo from "../images/ssn.png";
import ReactFullpage from "@fullpage/react-fullpage";
import NewHome from "../Home/NewHome";
import Cheifguest from "../Home/cheifguest";

class Home extends React.Component {
  state = {
    isLoading: true,
    canScroll:false
  };
  constructor(props) {
    super(props);

    this.state = { show: false };
    this.state = { canScroll: true };
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
        <div className="stars-appear"> <Stars/></div> 
          <div
          className="stars-overlay"
          >
          <div style={{ position: "fixed" }}>
            <ReactFullpage
              scrollOverflow={true}
              // autoScrolling={this.state.canScroll}
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
                        <NewHome />
                      </React.Fragment>

                      <img src={Logo} className="logo" />
                    
                    </div>
                    <div className="section section1">
                      <Aboutinvente show={this.state.show} />
                    </div>

                    <div className="section section1">
                      <Flagship />
                    </div>

                    {
                      <div className="section">
                        <Cheifguest />
                      </div>
                    }
                  </div>
                );
              }}
            />
          </div>
        </div>
        </div>
      );
    } else {
      return <p>hello</p>;
    }
  }
}
export default Home;
