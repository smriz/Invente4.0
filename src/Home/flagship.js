import React from 'react';
import '../res/flagship.css';
import eventdetail from '../data/eventdetail.json';
import { Link } from 'react-router-dom';
class Flagship extends React.Component {
  constructor() {
    super();
    this.obj = [];

    Object.keys(eventdetail).forEach(dept => {
      Object.keys(eventdetail[dept]).forEach(event => {
        if (eventdetail[dept][event].isFlagship === true) {
          this.obj.push({
            dept,
            eventname: eventdetail[dept][event].eventname,
            event
          });
        }
      });
    });
  }
  render() {
    return (
      <div className="flagship">
        <div align="center">
          <h6 />
          <h6>Flagship Events</h6>
          <img
            className="headline"
            style={{ width: '80%' }}
            src={require('../images/heading_line_thin.svg')}
            alt={''}
          />
          <br />
        </div>
        <div className="card-set">
          {this.obj.map(x => (
            <Link
              to={`/events/${x.dept}/${x.event}`}
              className="card-set-child"
            >
              <div align="center">
                <div className="customdiv">
                  <img
                    className="img"
                    src={require('../images/events/' +
                      x.dept +
                      '_' +
                      x.eventname +
                      '.svg')}
                    style={{ pointerEvents: 'none', height: '100px' }}
                    alt={x.event}
                  />
                  {/* <img
                    className="seemore "
                    src={require('../images/see_more_button.svg')}
                    alt={'see more'}
                  /> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Flagship;
