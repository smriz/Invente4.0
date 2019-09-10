import React from "react";
class Sponsor extends React.Component {
  render() {
    return (
      <div>

          <div className="organisers ">
            {/* <Flip  cascade>  */}

            <div
              data-aos="fade-zoom-in"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
        
               
              </div>
              
              <div id="head-of-all">
              <div>
                  <h6>
                    <br />
                    <br />
                    <br />
                    Title Sponsor
                  </h6>
                  <img
                    className="headline"
                    style={{ width: "60%" }}
                    src={require("../images/heading_line_thin.svg")}
                    alt={""}
                  />
                </div>
                <div className="card" style={{transform:"scale(2)"}}>
                  <img 
                  src={require("../images/sponsors/cooper_svg.svg")}
                    alt="studentaffairs"
                  />
                </div>
              </div>
              <div id="staff-coordinator" className="">
                <div>
                  <h6>
                    <br />
                    <br />
                    <br />
                    Gold Sponsors
                  </h6>
                  <img
                    className="headline"
                    style={{ width: "60%" }}
                    src={require("../images/heading_line_thin.svg")}
                    alt={""}
                  />
                </div>
                <div className="card-set">
                
                    <div
                      className="card-set-childs"
                      align="center"
                    >
                      <img className="adjust"
                        style={{transform:"scale(1)"}}
                        src={require("../images/sponsors/k7_svg.svg")}
                      />

                    </div>
          
                    <div
                      className="card-set-childs"
                      align="center"
                    >
                  <img
                  className="adjust"
                   style={{transform:"scale(1)"}}
                        src={require("../images/sponsors/quantler_svg.svg")}
                      />

                    </div>

                    </div>
                    <div className="card-set">
                
                <div
                  className="card-set-childs"
                  align="center"
                >
                  <img className="adjust"
                    style={{transform:"scale(.7)"}}
                    src={require("../images/sponsors/kaaylabs.jpg")}
                  />

                </div>
      
                <div
                  className="card-set-childs"
                  align="center"
                >
              <img
              className="adjust"
               style={{transform:"scale(.7)"}}
                    src={require("../images/sponsors/motorq_logo.png")}
                  />

                </div>

                </div>

              </div>

            <br />
            <br />
            <br />
            <br />
            {/* </Flip> */}
          </div>
        </div>
    );
  }
}
export default Sponsor;
