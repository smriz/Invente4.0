import React from 'react';
import Sidebar from './Navigator';
// import Sidebar from "./sidebar";
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
        name: 'Thiruvenkatesan',
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
        name: ' ',
        img: 'IT'
      },
      {
        name: 'Logesh B',
        img: 'CSE'
      },
      {
        name: '',
        img: 'EEE'
      },
      {
        name: 'Kaushik',
        img: 'ECE'
      },
      {
        name: '',
        img: 'CIVIL'
      },
      {
        name: ' ',
        img: 'BME'
      },
      {
        name: ' ',
        img: 'MECH'
      },
      {
        name: ' ',
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
        img: 'BME'
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
        <div className="organisers top">
          {/* <Flip  cascade>  */}

          <div
            data-aos="fade-zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <div
              data-aos="fade-zoom-in"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <div>
                <h6>Advisor of Student Affairs</h6>
                <img
                  className="headline"
                  style={{ width: '80%' }}
                  src={require('../images/Heading_Line.svg')}
                  alt={''}
                />
              </div>
              <div id="head-of-all">
                <div className="card" style={[]}>
                  <img
                    src={require('../images/organisers/asa.jpg')}
                    alt="studentaffairs"
                  />
                  <p style={{}}>Sunita Nair</p>
                </div>
              </div>
            </div>

            <div id="hod" className="top">
              <div align="center">
                <h6>HEAD OF DEPARTMENTS</h6>
                <img
                  className="headline"
                  style={{ width: '80%' }}
                  src={require('../images/Heading_Line.svg')}
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
                      src={require('../images/organisers/hod-' +
                        x.img +
                        '.jpg')}
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
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <div id="staff-coordinator" className="top">
              <div>
                <h6>Faculty Co-ordinators</h6>
                <img
                  className="headline"
                  style={{ width: '80%' }}
                  src={require('../images/Heading_Line.svg')}
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
                      src={require('../images/organisers/fac-' +
                        x.img +
                        '.jpg')}
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
          </div>

          <div
            data-aos="fade-zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <div id="student-coordinator" className="top">
              <div>
                <h6>Association Presidents</h6>
                <img
                  className="headline"
                  style={{ width: '80%' }}
                  src={require('../images/Heading_Line.svg')}
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
                      src={require('../images/organisers/sc-' + x.img + '.jpg')}
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
    );
  }
}
export default Organizers;
