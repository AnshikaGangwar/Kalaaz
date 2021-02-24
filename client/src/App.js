import React, { Component } from 'react'
import {BrowserRouter as Router , Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import LoginPage from './components/loginpage'
import SignupPage from './components/signuppage'
import './sass/main.scss'

function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/signup' exact component={SignupPage} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
