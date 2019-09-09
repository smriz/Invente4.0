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
              {name}    <br/>
              <span className="dept-name" style={{color:"#ff9800",letterSpacing:"1px"}}>{contact}</span>
            </p>
      </div>
    );
  }
}

export default ContactCard;
