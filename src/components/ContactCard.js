import React from "react";

class ContactCard extends React.Component {
  render() {
    let { name, contact } = this.props.contact;
    return (
          <div className="card-set-child" align="center" key={"hod-"}>
			<img 
			className="roundimg"
              src={require("../images/organisers/hod-BME.jpg")}
              alt={name}
            />
            <p className="title-name">
              {name}
              <br />   <br />          
              <h3 className="dept-name" style={{color:"#ff9800"}}>{contact}</h3>
            </p>
      </div>
    );
  }
}

export default ContactCard;
