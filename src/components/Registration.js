import React from "react";
import Stars from "./stars";
import { Helmet } from "react-helmet";
class Registration extends React.Component {
  render() {
    return (
      <div align="">
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Stars />
          <div className="stars-overlay">
            <div className="register-area">
              <Helmet>
                <title>Registration | Invente 4.0</title>
              </Helmet>
              <br />
              <br />
              <br />
              <br />
              <div align="center" className="register-instructions">
                <span style={{ fontSize: "20px", color: "#ff9800" }}>
                  {" "}
                  Instructions to be followed:
                </span>
                <div className="align-center">
                  <ul className="register-points" style={{ textAlign: "left" }}>
                    <br />
                    <li>All Students must bring their college ID Card</li>
                    <li>
                      The entry fee for different events are as follows:
                      <div style={{ textAlign: "left" }}>
                        <ul>
                          <br />
                          <li>• General registration – 150 / person</li>
                          <li>• Data Analytics workshop – 300 / person </li>
                          <li>
                            • E-Vehicles and Hybrid Vehicles Workshop – 300 /
                            person{" "}
                          </li>
                          <li>• Staad.Pro Workshop – 300 / person </li>
                          <li>
                            • Workshop on PCB Desinging using Altium Designer –
                            250/person
                          </li>
                        </ul>
                        <br />
                      </div>
                      <li>Payment must be made on spot </li>
                      <li>
                        {" "}
                        Workshop participants must be at the venue 30 mins prior
                        the scheduled time.
                      </li>
                      <li>
                        {" "}
                        Students who have registered can take part in the events
                        on both days, 6
                      </li>
                      <li>
                        {" "}
                        September and 7 September 2019 (Applicable only for
                        General Registration)
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <div>
                {/* <iframe style={{height:'1000px',width:'100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLSf0onykh03arSsorpFzBKQ_WW3kuEyOzbHRYzd1twm9Fqv_sQ/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> */}
                {/*<iframe id="formdata" src="https://docs.google.com/forms/d/e/1FAIpQLSecQVbxa6NGzCmZrSp9-Gyqb1Tu1b435rVcRm73_6Aomn6yCg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
