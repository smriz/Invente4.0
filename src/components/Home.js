import React from 'react';
import Sidebar from './sidebar';
import Aboutinvente from '../Home/aboutinvente';
import Flagship from '../Home/flagship';
import Ring from '../Home/ring';
import Spheres from '../Home/spheres';
import ReactFullpage from '@fullpage/react-fullpage';

class Home extends React.Component {
  state = {
    isLoading: true
  };
  constructor(props) {
    super(props);

    this.state = { show: true };
  }
  onLeave(origin, destination, direction) {
    console.log(
      'Leaving section ' + origin.index + 'hello' + destination.index
    );
    if (origin.index === 0) {
      this.setState({ show: false });
    }
    if (origin.index === 1 && destination.index === 0) {
      this.setState({ show: true });
    }
    // this.setState({ show: !this.state.show });
  }
  afterLoad(origin, destination, direction) {
    console.log('After load: ' + destination.index);
  }

  handleLoading = () => {
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <div>
        {this.state.isLoading && (
          <div style={{ backgroundColor: 'black' }}>
            <img
              style={{
                height: '100vh',
                width: '100%',
                src: require('../images/loadd.gif')
              }}
              alt="loader"
            />
          </div>
        )}
        <div style={{ position: 'fixed' }}>
          <ReactFullpage
            scrollOverflow={false}
            setAllowScrolling={false}
            sectionsColor={['', '', '']}
            onLeave={this.onLeave.bind(this)}
            afterLoad={this.afterLoad.bind(this)}
            render={({ state, fullpageApi }) => {
              return (
                <div id="fullpage-wrapper">
                  <div
                    className="section section1"
                    style={{ overflow: 'hidden' }}
                  >
                    <Spheres
                      handleLoading={this.handleLoading}
                      show={this.state.show}
                    />
                    <Ring />
                  </div>
                  <div className="section section1">
                    <Aboutinvente />
                  </div>

                  <div className="section section1">
                    <Flagship />
                  </div>

                  {/* <div className="section">
                  <div id="guest-of-honor">
                    <div id="guest-content">
                      <div id="head">
                        SSN Welcomes Someone as Our Chief Guest for Invente 5.0
                      </div>
                      <div id="photo">
                        <img
                          // src={require("./narayanan.jpg")}
                          width="200px"
                          height="200px"
                        />
                      </div>
                      <div id="content">Chief guest description</div>
                    </div>
                  </div>
                  <h3>Section 3</h3>
                  <button onClick={() => fullpageApi.moveTo(1, 0)}>
                    Move top
                  </button>
                </div> */}
                </div>
              );
            }}
          />
        </div>
      </div>
    );
  }
}
export default Home;
