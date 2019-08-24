import React from 'react';
import Sidebar from './Navigator';
// import Sidebar from "./sidebar";
import Stars from "./stars";
import { Helmet } from 'react-helmet';
import Flip from 'react-reveal/Flip';
class Organizers extends React.Component {
  constructor(props) {
    super(props);
    this.staff = [
      {
        name: 'Sandana karuppan',
        img: 'IT'
      },
      {
        name: 'Sujaudeen',
        img: 'CSE'
      },
      {
        name: 'Nagarajan',
        img: 'EEE'
      },
      {
        name: 'Vaithianathan',
        img: 'ECE'
      },
      {
        name: 'ShivaPriya',
        img: 'Civil'
      },
      {
        name: 'Dhanalakshmi',
        img: 'BME'
      },
      {
        name: 'Vimal Samsingh',
        img: 'Mechanical'
      },
      {
        name: 'Balaji',
        img: 'Chemical'
      }
    ];
    this.student = [
      {
        name: 'Narayanan',
        img: 'IT'
      },
      {
        name: 'Logesh B',
        img: 'CSE'
      },
      {
        name: 'Nishanth',
        img: 'EEE'
      },
      {
        name: 'Sai Kiran',
        img: 'ECE'
      },
      {
        name: 'Sooraj',
        img: 'CIVIL'
      },
      {
        name: 'Aravind',
        img: 'BME'
      },
      {
        name: 'Navaneeth',
        img: 'MECH'
      },
      {
        name: 'Sriram',
        img: 'CHEM'
      }
    ];
    this.hod = [
      {
        name: 'Dr. Nagarajan',
        img: 'IT'
      },
      {
        name: 'Dr. Chitra Babu',
        img: 'CSE'
      },
      {
        name: 'Dr. Kamaraj',
        img: 'EEE'
      },
      {
        name: 'Dr. Radha',
        img: 'ECE'
      },
      {
        name: 'Dr. Ramana Gopal',
        img: 'CIVIL'
      },
      {
        name: 'Dr. Kavitha',
        img: 'BME'
      },
      {
        name: 'Dr. Annamalai',
        img: 'MECH'
      },
      {
        name: 'Dr. Parthiban',
        img: 'CHEM'
      }
    ];
  }
  render() {
    return (
      <div>
        <div style={{ display: 'none' }}>{/* <Sidebar /> */}</div>
        <Helmet>
          <title>Organizers | Invente 4.0 </title>
        </Helmet>
        {/* <div
          style={{
			position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        > 
        */}
        <Stars/>
        <div className="stars-overlay">
        <div className="organisers ">
          {/* <Flip  cascade>  */}

          <div
            data-aos="fade-zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
           
             

            <div id="hod" className="top">
              <div align="center">
                <h6>HEAD OF DEPARTMENTS</h6>
                <img
                  className="headline"
                  // style={{ width: "80%" }}
                  src={require('../images/heading_line_thin.svg')}
                  alt={''}
                />
              </div>
              <div className="card-set">
                {this.hod.map((x, index) => (
                  <div
                    className="card-set-child "
                    align="center"
                    key={'hod-' + index}
                  >
                    <img
                      className="img"
                      src={require('../images/organisers/hod_' +
                        x.img.toLowerCase() +
                        '.svg')}
                      alt={'hod-image-' + index}
                    />
                    <p className="staff-name">
                      {x.name}
                      <br />
                      <h3 className="dept-name">{x.img}</h3>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
                <h6>
                <br/><br/><br/>Advisor of Student Affairs</h6>
                <img
                  className="headline"
                  style={{ width: '50%' }}
                  src={require('../images/heading_line_thin.svg')}
                  alt={''}
                />
              </div>
              <div id="head-of-all">
                <div className="card" style={[]}>
                  <img
                    src={require('../images/organisers/asa.svg')}
                    alt="studentaffairs"
                  />
                  <p style={{}}>Sunita Nair</p>
                </div>
              </div>
            <div id="staff-coordinator" className="">
              <div>
                <h6><br/><br/><br/>Faculty Co-ordinators</h6>
                <img
                  className="headline"
                  style={{ width: '80%' }}
                  src={require('../images/heading_line_thin.svg')}
                  alt={''}
                />
              </div>
              <div className="card-set">
                {this.staff.map((x, index) => (
                  <div
                    className="card-set-child"
                    align="center"
                    key={'fac-' + index}
                  >
                    <img
                      src={require('../images/organisers/fac_' +
                        x.img.toLowerCase() +
                        '.svg')}
                      alt={'staff-image-' + index}
                    />
                    <p className="staff-name">
                      {x.name}
                      <br />
                      <h3 className="dept-name">{x.img}</h3>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          
            <div id="student-coordinator" className="">
              <div>
                <h6><br/><br/><br/>Association Presidents</h6>
                <img
                  className="headline"
                  style={{ width: '80%' }}
                  src={require('../images/heading_line_thin.svg')}
                  alt={''}
                />
              </div>
              <div className="card-set">
                {this.student.map((x, index) => (
                  <div
                    className="card-set-child"
                    align="center"
                    key={'stu-' + index}
                  >
                    <img
                      src={require('../images/organisers/p_' + x.img.toLowerCase() + '.svg')}
                      alt={'student-image-' + index}
                    />
                    <p className="staff-name">
                      {x.name}
                      <br />
                      <h3 className="dept-name">{x.img}</h3>
                    </p>
                  </div>
                ))}
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
      </div>
      // </div>

    );
  }
}
export default Organizers;
