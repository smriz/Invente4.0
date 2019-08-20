import React from "react";
import "../res/about.css";
class Aboutinvente extends React.Component {
  componentDidMount(){
    setTimeout(() => {
      document
          .querySelector('#headline')
          .style = " animation: createBox 0.7s;";
  }, 1)
  }
  render() {
    let show = true;
    return (
      <div className="aboutus " align="center">

        <h6 className="forhome">About Us</h6>
        
       <img
          className="headline "
          id="headline"
          src={require("../images/Heading_Line.svg")}
          alt={""}
        />

        
          <div className="container" align="center">
            <p className="textforhome" >
            <br/>  SSN unveils Invente, a two-day techfest built around encouraging
              budding engineers to discover hidden interests and enticing
              technophiles to showcase their talents with unbridled
              enthusiasm.This is a space for the tech-savvy, the fun-loving, and
              the puzzle-solvers to flaunt their abilities to the world. Here is
              a platform to put your ideas into action; to test your ability;
              and to reinvent yourself.SSN's national level technical symposiums
              of eight departments amalgamate to form this massive technical
              festival. So keep your planners clean on the 21st and 22nd of
              September and take a trip down to Kalavakkam. It's time for you to
              Invente.
            </p>

        </div>{" "}
      </div>
    );
  }
}

export default Aboutinvente;
