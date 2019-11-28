import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
//import Navbar from './pages/lisa_navbar.js';
import './pages/lisa_navbar.css'
import './App.css';
//import QRCodeForm from './QRCodeForm/QRCodeForm';
import DatabasePage from './DatabaseTest';

export default function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/database' component={DatabasePage}/>
        </Switch>
      </div>  
    </Router>
  );
}
