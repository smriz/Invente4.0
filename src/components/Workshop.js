import React from 'react';
import Sidebar from './sidebar';
import eventlist from '../data/eventlist.json';
import { Helmet } from 'react-helmet';
import Stars from './stars';
import eventdetail from '../data/eventdetail.json';
import _ from 'lodash';

import { Link } from 'react-router-dom';
class Workshop extends React.Component {
  constructor() {
    super();
    this.obj = [];

    Object.keys(eventdetail).forEach(dept => {
      Object.keys(eventdetail[dept]).forEach(event => {
        if (eventdetail[dept][event].eventtype === 'Workshop') {
          this.obj.push({ dept, event });
        }
      });
    });
  }
  render() {
    return (
      <div className="">
        {/* <Sidebar /> */}
        <Stars />
        <div className="stars-overlay">
          <div className="events ">
            <Helmet>
              <title>Workshops | Invente 4.0</title>
            </Helmet>
            <div align="center">
              <h6 className="top">
                {this.props.location.pathname
                  .split('/')
                  .splice(1)
                  .map((x, i, arr) => [
                    <Link to={'/' + _.slice(arr, 0, i + 1).join('/')}>
                      {i === 1 ? '>' : ''} {x}{' '}
                    </Link>
                  ])}
              </h6>
              {/* <h6>Events > {dept}</h6> */}
              <img
                className="headline"
                style={{ width: '80%' }}
                src={require('../images/heading_line_thin.svg')}
                alt={''}
              />

              <h6 style={{ color: '#ff9800', marginTop: '3%' }}>Technical</h6>
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
                        src={require('../images/Capsule.svg')}
                        alt={x.event}
                      />
                    </div>
                    <p className="dept-name" style={{ textAlign: 'center' }}>
                      {eventlist[x.dept][x.event]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        </div>
    );
  }
}

export default Workshop;
