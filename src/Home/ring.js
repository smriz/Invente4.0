import React from 'react';
import '../res/animation.css';
class Ring extends React.Component {

    render(){
        return(
            <div className="scale">
                
                {/* <img
                    src={require("../images/Right_ball.svg")}
                    alt={"rball"}
                    // style={rball}
                    id="rball"/>
                <img
                    src={require("../images/Left_ball.svg")}
                    alt={"lball"}
                    // style={lball}
                    id="lball"/>
                <img src={require("../images/Logo_bulb.svg")} alt="logo" id="bulb"/>
                <img
                    src={require("../images/logo_text_with_tagline.svg")}
                    alt="title"
                    id="title"/> */}
            <div className="herosplash1">
            <div id="herosplash" className="commondiv">
                <div id="hypno" className="commondiv">
                    <div id="lastdiv" className="commondiv">
                        <span className="startspan">
                            <span className="startspan">
                                <span className="startspan">
                                    <span className="startspan">
                                        <span className="startspan">
                                            <span className="startspan">
                                                <span className="startspan">
                                                    <span className="startspan">
                                                        <span className="startspan"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* <img
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
    }}/> */}
    </div>
      
        );
    }
}
export default Ring;