import React, { Component } from 'react'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Homepage from './components/homepage'
import LoginPage from './components/loginpage'
import SignupPage from './components/signuppage'
import FeedPage from './components/feedpage'
import './sass/main.scss'
import Showcase from './components/showcase';
import TestPage from './components/test';
import Addkalaa from './components/add'
import Profile from './components/profilepage'
import EditProfile from './components/editprofilepage'
import OthersProfile from './components/othersProfilePage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/feed' exact component={FeedPage} />
          <Route path='/showcase' exact component={Showcase} />
          <Route path='/post' exact component={Addkalaa} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/editprofile' exact component={EditProfile} />
          <Route path='/test' exact component={TestPage} />
          <Route path='/oprofile/:dname' render={props=> <OthersProfile {...props} key={props.location.key} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
