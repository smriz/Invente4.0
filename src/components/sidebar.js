
import React from 'react';
import '../res/sidebar.css';
import { stack as Menu } from 'react-burger-menu';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.routeMap = {
      main: {
        Home: '/',
        Events: '/events',
        Workshops: '/workshops',
        Hackathon: '/events/ece/ai-4-good-hackathon',
        Registration: '/register',
        Organizers: '/organizers',
        AboutUs: '/about-us',
        Hospitality: '/hospitality'
      }
    };
    
  }
  render() {
    return (
      <Menu right>
        {Object.keys(this.routeMap.main).map(key => (
          <a
            className="menu-item"
            onfocus="this.blur()"
            style={{ border: '3px solid #ff9800' }}
            href={this.routeMap.main[key]}
          >
            {key}
          </a>
        ))}
      </Menu>
    );
  }
}

export default Sidebar;
