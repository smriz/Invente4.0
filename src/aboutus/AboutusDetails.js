import React from 'react';
import aboutus from '../data/aboutus.json';import { Helmet } from "react-helmet";
class AboutusDetails extends React.Component{
   
    render(){
	let {about} = this.props.match.params;
        return (
        <div>
        <Helmet>
          <title>About Us | Invente 4.0</title>
        </Helmet>
        <div className="aboutus">
          <h6>About Us</h6>
          <img
            className="headline"
            src={require("../images/Heading_Line.svg")}alt={""}
          />
          <div
            data-aos="fade-zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="container">
              <div className="caption">
                  
              <svg style={{ pointerEvents: "none"}}>
                    <defs>
                      <clipPath id="circleView">
                        <circle cx="125" cy="125" r="125" fill="#12345"/>
                      </clipPath>
                    </defs>
                    <image
                      width="250"
                      height="220"
                            // src={`https://images.ssninvente.com/designericons/department/${x}.png`}                    
                      // xlinkHref={require("../images/Capsule.svg")}
                      xlinkHref={require(`../images/about-us/${about}.svg`)}

                      clip-path="url(#circleView)"
                    />
                  </svg>
             
                <div className="name">{aboutus[about].name}</div>
                <div className="pos">{aboutus[about].pos}</div>
				</div>
				<p className="text" style={{width:"100%"}}>
				<br />
				{aboutus[about].desc}</p>
                    
                               <br/><br/><br/><br/>
                 
              </div>
            </div>
          </div>
<br/><br/><br/><br/> <br/><br/><br/><br/><br/>
<br/><br/><br/><br/>        </div>

    
            );  };
}

export default AboutusDetails;

