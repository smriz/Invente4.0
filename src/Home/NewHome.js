import React, { Component } from 'react';
import './style.css';


class NewHome extends Component {
  state = {};

  render() {
    return (
      <div className="fit_container" id="">
        <img
          className="layer fifth_layer"
          src={require('./images/fifth_layer.svg')}
          alt="fifth_layer"
        />
 
        <img
          className="layer fourth_layer"
          src={require('./images/fourth_layer.svg')}
          alt="fourth_layer"
        /> 

        <img
          className="layer third_layer"
          src={require('./images/third_layer.svg')}
          alt="third_layer"
        />

        <img
          className="layer second_layer"
          src={require('./images/second_layer.svg')}
          alt="fifth_layer"
        />

        <img
          className="layer first_layer"
          src={require('./images/first_layer.svg')}
          alt="fifth_layer"
        />

        <img
          className=" bottom_triangle"
          src={require('./images/bottom_triangle.svg')}
          alt="bottom_triangle"
        />
        <img
            className=" diagonal_triangle "
            src={require("./images/left2.svg")}
            alt="bottom_triangle"
          />

        <img
          className="layer"
          src={require('./images/centre_circle.svg')}
          alt="fifth_layer"
        />

        <img
          className="layer thirst_for_tech"
          src={require('./images/thirst_for_tech.svg')}
          alt="fifth_layer"
        />

        <img
          className="layer Logo_bulb"
          src={require('./images/Logo_bulb.svg')}
          alt="Logo_bulb"
        />

        <img
          className=" layer logo_with_tagline"
          src={require('./images/logo_with_tag_date.svg')}
          alt="logo_with_tagline"
        />
      </div>
    );
  }
}

export default NewHome;
