import React from "react";
import "../res/animation.css";
class spinner extends React.Component {
  



    
  render() {
    return (
      <div className="" style={{ overflow: "hidden" }}>
        <img
          className="layer fifth_layer"
          src={require("../images/home/fifth_layer.svg")}
          alt="fifth_layer"
        />

        <img
          className="layer fourth_layer"
          src={require("../images/home/fourth_layer.svg")}
          alt="fourth_layer"
        />

        <img
          className="layer third_layer"
          src={require("../images/home/third_layer.svg")}
          alt="third_layer"
        />

        <img
          //   style={{top:"9%"}}
          className="layer second_layer"
          src={require("../images/home/second_layer.svg")}
          alt="fifth_layer"
        />

        <img
          className="layer first_layer"
          src={require("../images/home/first_layer.svg")}
          alt="fifth_layer"
        />

        <img
          className="layer bottom_triangle"
          src={require("../images/home/bottom_triangle.svg")}
          alt="bottom_triangle"
        />

        {/* <div id="content" style={{ width: "100%", height: "100%" }}> */}
        {/* <svg> */}
        {/* < div className="layer dia_triangle">
            {/* <img 
              className="dia_triangle"
              src={require("../images/home/left_dia.svg")}
              alt="fifth_layer"/>*/}
        {/* </div>     */}

        <img
          className="layer"
          src={require("../images/home/centre_circle.svg")}
          alt="fifth_layer"
        />
        <img
          className="layer"
          src={require("../images/home/thirst_for_tech.svg")}
          alt="fifth_layer"
          id="thirst"
        />
        <img
          className="layer bulb_scale"
          //   style={{transform:"scale(.5)"}}
          src={require("../images/Logo_bulb.svg")}
          alt="fifth_layer"
          //   className="bulb"
          id="bulb"
        />

        {/* <img
          src={require("../images/Logo_bulb.svg")}
          alt="logo"
          className="layer"
          // id="bulb"
          style={{ transform: "scale(.4)" }}
        /> */}

        <img
          className="layer"
          style={{ top: "30%" }}
          src={require("../images/home/logo_with_tagline.svg")}
          alt="fifth_layer"
          id="thirst"
        />

        <div className="layer left_diagonal2" />
      </div>
    );
  }
}
export default spinner;