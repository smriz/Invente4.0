import React from 'react';
import '../res/animation.css';

class Animation extends React.Component {

    componentDidUpdate = () => {

        if (this.props.scrollup === true) {
            document
                .querySelector('#lball')
                .style = "animation:inleft 1s;position:absolute;top:-10vh;left:54vw;width:78vw;height:vw" +
                    ";overflow:hidden;"
            document
                .querySelector("#rball")
                .style = "animation:inright 1s;position:absolute;top:-10vh;left:-30vw;width:78vw;height:72" +
                    "vw;overflow:hidden;";
        }
        if (this.props.scrolldwn === true) {
            document
                .querySelector('#lball')
                .style = "animation:outleft 1s;position:absolute;top:-10vh;left:54vw;width:78vw;height:72v" +
                    "w;overflow:hidden;"
            document
                .querySelector("#rball")
                .style = "animation:outright 1s;position:absolute;top:-10vh;left:-30vw;width:78vw;height:7" +
                    "2vw;overflow:hidden;";
        }
        if (this.props.currentPage === 2) {
            setTimeout(() => {
                document
                    .querySelector("#rball")
                    .style = "opacity:0";
                document
                    .querySelector("#lball")
                    .style = "opacity:0";
            },1000);
        }
    }
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

        Array
            .from(document.querySelectorAll(".startspan"))
            .reverse()
            .forEach((x) => {
                setTimeout(() => {

                    x.style = `transition: 2.5s ease;opacity:0`;
                }, 3000)
            });

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
                .style = "opacity:1;animation : blink 3s;tranisition: 3s ease-in;position:absolute;top:38v" +
                    "h;left:30vw;width:40vw;height:40vh"
        }, 3000);
        setTimeout(() => {
            document
                .querySelector("#bulb")
                .style = "position:absolute;top:25vh;left:30vw;width: 40vw;height: 40vh;opacity:1";
        }, 6000);

    }

    render = () => {

        const rball = {
            position: "absolute",
            top: "-10vh",
            left: "-30vw",
            width: "78vw",
            height: "72vw",
            overflow: "hidden"
        };
        const lball = {
            position: "absolute",
            top: "-10vh",
            left: "54vw",
            width: "78vw",
            height: "72vw",
            overflow: "hidden"
        };
        const sdiv = {
            overflow: "hidden",
            position: "realtive"
        }
        // const bg = {
        //     width: "100vw",
        //     height: "100vh"
        // }

        return (
            <div style={sdiv}>
                {/* <img src={require("../../svg/Main_background.svg")} alt="bg" style={bg}/> */}
                <img
                    src={require("../images/Right_ball.svg")}
                    alt="rball"
                    style={rball}
                    id="rball"/>
                <img
                    src={require("../images/Left_ball.svg")}
                    alt="lball"
                    style={lball}
                    id="lball"/>
                <img src={require("../images/Logo_bulb.svg")} alt="logo" id="bulb"/>
                <img
                    src={require("../images/logo_with_tagline.svg")}
                    alt="title"
                    id="title"/>
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

        )
    }
}

export default Animation;