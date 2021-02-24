import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Navbar from './navbar'
import Google from '../assets/google_img.svg'

export default class Signuppage extends Component {
    render() {
        return (
            
            <div className="container-fluid login_wrapper ">
               <Navbar navlink1="Home" navlink2="Login"/>
                 <div className="inner_wrapper">
                   <form className="container login_card">
                      <div className="inner_form w-100">
                       <div className="form-group d-flex flex-column ">
                           <label for="name">Name</label>
                           <input type="text" name="name"/>
                           
                       </div>
                       <div className="form-group d-flex flex-column ">
                           <label for="email">Email</label>
                           <input type="email" name="email"/>
                           
                       </div>
                       <div className="form-group d-flex flex-column ">
                           <label for="profession">Profession</label>
                           <input type="text" name="profession"/>
                           
                       </div>
                       <div className="form-group d-flex flex-column">
                           <label for="password">Password</label>
                           <input type="password" name="password"/>
                       </div>
                       <div className="form-group d-flex flex-column">
                           <label for="re-password">Re-enter Password</label>
                           <input type="password" name="re-password"/>
                       </div>
                       <div className="mt-5 d-flex">
                          <Button className="login_btn">Sign Up</Button>
                          
                          <div className="mt-4">
                          <span className="login_text ">or</span>
                          </div>
                          <Button variant="contained" className="google_btn">Continue with google <img src={Google}/></Button> 
                       </div>
                       <div className="d-flex mt-3">
                           <h4>Already a member? </h4>
                           <h4 className="pl-1 pr-1 sup_color">Login </h4> 
                           
                       </div>
                     </div>
                   </form>
                </div>
            </div>
        )
    }
}
