import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Events from './events/Events';
import Organizers from './components/Organizers';
import Home from './components/Home';
import Aboutus from './aboutus/Aboutus';
import Footer from './components/Footer';
import Hospitality from './components/Hospitality';
import Registration from './components/Registration';
import Workshop from './components/Workshop';
import Sidebar from './components/sidebar';
import Stars from './components/stars';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar />
        <div className="App">
          
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/about-us" component={Aboutus} />
          <Route path="/organizers" component={Organizers} />
          <Route path="/hospitality" component={Hospitality} />
          <Route path="/register" component={Registration} />
          <Route path="/workshops" component={Workshop} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
// temporary one just for nav purpose

// const Default = ()=><div>Component has not yet created. From the navbar branch</div>

export default App;
