import React from 'react';
import '../res/animation.css';
class spinner extends React.Component {

  
    componentDidMount() {

        
    
        setTimeout(() => {
            document
                .querySelector('#thirst')
                .style = "display: none";
        }, 2000);
    
    
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
        }, 6000);
        setTimeout(() => {
            document
                .querySelector("#bulb")
                .style = "opacity:1;animation : blink 3s;tranisition: 3s ease-in;position:absolute;top:30v" +
                    "h;left:30vw;width:40vw;height:40vh"
        }, 3000);
        setTimeout(() => {
            document
                .querySelector("#bulb")
                .style = "position:absolute;top:30vh;left:30vw;width: 40vw;height: 40vh;opacity:1";
        }, 3000);
    
    }

    render(){
        return(
            <div className="">
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
            //   className="bulb"
              id="bulb"
            />
            <img
              src={require("../images/home/logo_with_tagline.svg")}
              alt="title"
              id="title"
            />
             {/* <img
                      src={require("../images/home/thirst_for_tech.svg")}
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
                  }}/> */}
          </div>
      {/*
      <div className="layer left_diagonal2">
            <img src="./left_diagonal.svg" alt="left_diagonal" />
          </div>  */}
 

    </div>
      
        );
    }
}
export default spinner;