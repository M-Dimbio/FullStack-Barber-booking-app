import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Appointment from './components/Appointment';
import ViewPictures from './components/ViewPictures';
import Error from './components/Error';



function App() {  


  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/appointment'>
            <Appointment />
        </Route>
        <Route path='/viewPictures'>
            <ViewPictures />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
