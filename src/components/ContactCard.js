import React from "react";

class ContactCard extends React.Component {
  render() {
    let { name, contact } = this.props.contact;
    return (
          <div className="card-set-child" align="center" key={"hod-"}>
			<img 
			className="roundimg"
              src={require("../images/organisers/Placeholder.svg")}
              alt={name}
            />
            <p className="title-name">
              {name}
              <br />   <br />          
              <h3 className="dept-name" style={{color:"#ff9800",letterSpacing:"1px"}}>{contact}</h3>
            </p>
      </div>
    );
  }
}

export default ContactCard;
