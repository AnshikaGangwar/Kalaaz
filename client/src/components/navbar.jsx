import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import navicon from '../assets/Kalaaz.svg' 
import {Link} from 'react-router-dom'

export default class navbar extends Component {
    render() {
        return (
           <div>
               <Navbar expand="lg" className="navbar nav_wrapper">
                <Navbar.Brand>
                  <img src={navicon} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 justify-content-end">
                    <Nav.Link href="#home" className="nav_text mr-4">{this.props.navlink1}</Nav.Link>
                    <Nav.Link href="#link" className="nav_text">{this.props.navlink2}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
           </div>
        )
    }
}
