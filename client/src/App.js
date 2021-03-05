import React, { Component } from 'react'
import {BrowserRouter as Router , Route } from 'react-router-dom'
import Homepage from './components/homepage'
import LoginPage from './components/loginpage'
import SignupPage from './components/signuppage'
import FeedPage from './components/feedpage'
import './sass/main.scss'
import Showcase from './components/showcase';
import TestPage from './components/test';
import Addkalaa from './components/add'
import Profile from './components/profilepage'

function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/feed' exact component={FeedPage} />
          <Route path='/showcase' exact component={Showcase} />
          <Route path='/post' exact component={Addkalaa} />
          <Route path='/profile' exact component={Profile} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
