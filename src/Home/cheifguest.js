import React from 'react';
import '../res/about.css';
class Aboutinvente extends React.Component {
  render() {
    return (
        <div className="aboutus">
        <h6 className="">Chief Guest</h6>
        <img
          className="headline "
          id="headline"
          style={{width:"50%"}}
          src={require('../images/heading_line_thin.svg')}
          alt={''}
          
        />
        <br/>
        <br/>
        <br/>
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
                      height="200"
                            // src={`https://images.ssninvente.com/designericons/department/${x}.png`}                    
                      // xlinkHref={require("../images/Capsule.svg")}
                      xlinkHref={require("../images/organisers/Placeholder.svg")}

                      clip-path="url(#circleView)"
                    />
                  </svg>
                  <div className="name" style={{fontSize:"20px"}}>
                  <br/>
                  <br/>
                      <br/>
                      Dr. A K Rawat</div>
                <div className="pos" style={{fontSize:"18px"}}>Department of Biotechnology, DST</div>
				</div>
                <p className="text" style={{width:"100%"}}>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
                </p>
        </div>
      </div>
    );
  }
}

export default Aboutinvente;
