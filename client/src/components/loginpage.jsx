import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Navbar from './navbar'
import Google from '../assets/google_img.svg'

export default class Loginpage extends Component {
    render() {
        return (
            
            <div className="container-fluid login_wrapper vh-100">
               <Navbar navlink1="Home" navlink2="Signup"/>
                 <div className="inner_wrapper">
                   <form className="container login_card">
                      <div className="inner_form w-100">
                       <div className="form-group d-flex flex-column w-100">
                           <label for="username">Username</label>
                           <input type="text" name="username"/>
                           
                       </div>
                       <div className="form-group d-flex flex-column">
                           <label for="password">Password</label>
                           <input type="text" name="password"/>
                       </div>
                       <div className="mt-5 d-flex">
                          <Button className="login_btn">Login</Button>
                          
                          <div className="mt-4">
                          <span className="login_text ">or</span>
                          </div>
                          <Button variant="contained" className="google_btn">Continue with google <img src={Google}/></Button> 
                       </div>
                       <div className="d-flex mt-3">
                           <h4>New here, </h4>
                           <h4 className="pl-1 pr-1 sup_color">Signup </h4> 
                           <h4>to enjoy our services</h4>
                       </div>
                     </div>
                   </form>
                </div>
            </div>
        )
    }
}
