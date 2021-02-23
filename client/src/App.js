import React, { Component } from 'react'
import {BrowserRouter as Router , Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import './sass/main.scss'

function App() {
  return (
    <div>
      <Router>
        <Navbar navlink1="Login" navlink2="Signup" />
        <switch>
          <Route path='/' exact component={Homepage} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
