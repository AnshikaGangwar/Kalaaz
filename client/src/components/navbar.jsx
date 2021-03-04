import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import navicon from '../assets/Kalaaz.svg' 
import temp from '../assets/temp.jpg'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'

export default class navbar extends Component {
    state ={
        showdropdown: false,
    };
    handlearrowclick = () => {
        this.setState({showdropdown: !this.state.showdropdown});
    };
    render() {
        const login_flag = Cookies.get("u_id") === undefined ? false : true;
        const user_name="Anshika_2927";
        const sym=this.state.showdropdown ? "fa-caret-up": "fa-caret-down";
        const el= login_flag==false ?  <Nav.Link >
        <div className="d-flex flex-row align-items-center justify-content-center pl-3">
          <img src={temp} className="navbar_pofile_img"/>
          <h4 className="navbar_username">{user_name}</h4>
          <i className={"pl-1 fa " + sym} onClick={this.handlearrowclick}></i>
          {this.state.showdropdown && <div className="navbar_mydropdown">
             <h3 className="dropdown_text">logout</h3>
          </div>}
         </div>  
      </Nav.Link> :
      <Nav.Link href="/login" className="nav_text">login</Nav.Link>;
        return (
           <div>
               <Navbar expand="lg" className="navbar nav_wrapper">
                <Navbar.Brand>
                  <img src={navicon} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 justify-content-end">
                   
                    {this.props.navlinks.map(navlink => (
                        <Nav.Link href={navlink.link_page} ><h3 className="nav_text">{navlink.link_name}</h3></Nav.Link>
                    ))}
                    {el}
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
           </div>
        )
    }
}
