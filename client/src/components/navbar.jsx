import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'
import navicon from '../assets/Kalaaz.svg' 
import temp from '../assets/temp.jpg'
import Cookies from 'js-cookie';
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios';
import {base} from '../base';



const MyNavbar = props => {
    
    const [showdropdown, setshowdropdown]= useState(false);
    const history = useHistory();
    
    const handlearrowclick = () => {
        setshowdropdown(!showdropdown);
    };

    const handleLogout = async() => {
        await Cookies.remove("uid");
        const data = await axios.get(base + '/google/logout');
        history.push('/login');
    }

        const profile = props.profile === undefined ? "": props.profile;
        const login_flag = Cookies.get("uid") === undefined ? false : true;
        const user_name=props.dname;
        const sym= showdropdown ? "fa-caret-up": "fa-caret-down";
        const el= login_flag ? <Nav.Link >
        <div className="d-flex flex-row align-items-center justify-content-center pl-3">
          <img src={base + 'media/profile/' + profile} className="navbar_pofile_img"/>
          <h4 className="navbar_username">{user_name}</h4>
          <i className={"pl-1 fa " + sym} onClick={handlearrowclick}></i>
          {showdropdown && <div className="navbar_mydropdown" onClick={handleLogout}>
             <h3 className="dropdown_text" >logout</h3>
          </div>}
         </div>  
      </Nav.Link> :<div></div>
        return (
           <div>
               <Navbar expand="lg" className="navbar nav_wrapper">
                <Navbar.Brand>
                  <img src={navicon} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 justify-content-end">
                   
                    {props.navlinks.map(navlink => (
                        <Nav.Link href={navlink.link_page} ><h3 className="nav_text">{navlink.link_name}</h3></Nav.Link>
                    ))}
                    <div style={{ margin:'0 auto !important'}}>
                        {el}
                    </div>
                    
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
           </div>
        )
    }
    export default MyNavbar;
