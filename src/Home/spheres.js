import React from "react";
import "../res/animation.css";
import Fade from "react-reveal/Roll";
class Animation extends React.Component {

  componentDidMount() {

    setTimeout(() => {
        document
            .querySelector('#thirst')
            .style = "position: absolute;top: 30vh;left:25vw;width:50vw;height:50vh;opacity: 1;transit" +
                "ion:ease-in 1s;animation: enter 1s;";
    }, 25)

    setTimeout(() => {
        document
            .querySelector('#thirst')
            .style = "animation: exit 1s;top: 30vh;left:25vw;width:50vw;height:50vh;";
    }, 2000);

    setTimeout(() => {
        document
            .querySelector('#thirst')
            .style = "display: none";
    }, 2000);

    // Array
    //     .from(document.querySelectorAll(".startspan"))
    //     .reverse()
    //     .forEach((x) => {
    //         setTimeout(() => {

    //             x.style = `transition: 2.5s ease;opacity:0`;
    //         }, 3000)
    //     });

    document
        .querySelector("#title")
        .style = "opacity:0";
    document
        .querySelector("#bulb")
        .style = "opacity:0";

    setTimeout(() => {
        document
            .querySelector("#title")
            .style = "opacity:1;position:absolute;top:60vh;left:32vw;width:35vw;" +
                "height:35vh"
    }, 5000);
    setTimeout(() => {
        document
            .querySelector("#bulb")
            .style = "opacity:1;animation : blink 3s;tranisition: 3s ease-in;position:absolute;top:38v" +
                "h;left:30vw;width:40vw;height:40vh"
    }, 3000);
    setTimeout(() => {
        document
            .querySelector("#bulb")
            .style = "position:absolute;top:25vh;left:30vw;width: 40vw;height: 40vh;opacity:1";
    }, 6000);

}
  render() {
    let show = this.props.show;
    if(window.innerWidth>675){
    return (
      <div>
        <div>
        <Fade  right when={show}>
          <img src={require("../images/Right_ball.svg")} className="rball" />
        </Fade>
        <Fade left when={show}>
          <img src={require("../images/Left_ball.svg")} className="lball" />
        </Fade>
        </div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <img
            src={require("../images/Logo_bulb.svg")}
            alt="logo"
            // className="bulb"
            id="bulb"
          />
          <img
          style={{transform:"scale(.5)"}}
            src={require("../images/home/logo-with-tagline.svg")}
            alt="title"
            id="title"
          />
           <img
                    src={require("../images/Thirst for tech.svg")}
                    alt="thirst"
                    id="thirst"
                    style={{
                    opacity: "0",
                    position: "absolute",
                    top: "30vh",
                    left: "25vw",
                    width: "50vw",
                    height: "50vh",
                    transform: "translateZ(100px)"
                }}/>
        </div>
      </div>
    );}
    else{
      return (
        <div>
          <div>
          {/* <Fade  right when={show}> */}
            <img src={require("../images/Right_ball.svg")} style={{transform:"scale(2)",left:"90%"}} className="rball" />
          {/* </Fade> */}
          {/* <Fade left when={show}> */}
            <img src={require("../images/Left_ball.svg")} style={{transform:"scale(2)",left:"-63%"}} className="lball" />
          {/* </Fade> */}
          </div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          >
            <img
              src={require("../images/Logo_bulb.svg")}
              alt="logo"
              // className="bulb"
              id="bulb"
            />
            <img
            style={{transform:"scale(.5)"}}
              src={require("../images/home/logo-with-tagline.svg")}
              alt="title"
              id="title"
            />
             <img
                      src={require("../images/Thirst for tech.svg")}
                      alt="thirst"
                      id="thirst"
                      style={{
                      opacity: "0",
                      position: "absolute",
                      top: "30vh",
                      left: "25vw",
                      width: "50vw",
                      height: "50vh",
                      transform: "translateZ(100px)"
                  }}/>
          </div>
        </div>
      );
    }
  }
}
export default Animation;