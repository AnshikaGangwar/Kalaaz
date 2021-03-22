import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import {toast} from 'react-toastify'
import Navbar from './navbar';
import Footer from '../common/footer';
import Google from '../assets/google_img.svg'
import axios from 'axios'

export default class Signuppage extends Component {
    state= {
        data : {
            email : "",
            name : "",
            dname: "",
            password: "",
            repassword: ""
        }
    }
    navlinks=[
        {link_name: "Home",
         link_page: "/"
        },
        {link_name: "Login",
          link_page: "/login"
        },
    ]

    handleChange = ({currentTarget:input}) =>{
                  
           const data = {...this.state.data};
           data[input.name] = input.value;
           this.setState({data});
    }
    handleSubmit = async() =>{
        //   if(this.state.data.password != this.state.data.repassword)
        //   {
        //       toast("Confirm password mismatched");
        //       return;
        //   }
          const payload={
              email:this.state.data.email,
              password:this.state.data.password,
              name:this.state.data.name,
              dname:this.state.data.dname
          }
          const res  = await axios.post('http://localhost:2727/api/auth/register',payload);
          console.log(res);
    }
    

    render() {
        return (
            
            <div className="container-fluid login_wrapper p-0 ">
               <Navbar navlinks={this.navlinks} />
                 <div>
                   <form className="container login_card">
                      <div className="inner_form w-100">
                       <div className="form-group d-flex flex-column ">
                           <label for="name">Name</label>
                           <input type="text" name="name" onChange={this.handleChange}/>
                           
                       </div>
                       <div className="form-group d-flex flex-column ">
                           <label for="email">Email</label>
                           <input type="email" name="email" onChange={this.handleChange}/>
                           
                       </div>
                       <div className="form-group d-flex flex-column ">
                           <label for="dname">Display Name</label>
                           <input type="text" name="dname" onChange={this.handleChange}/>
                           
                       </div>
                       <div className="form-group d-flex flex-column">
                           <label for="password">Password</label>
                           <input type="password" name="password" onChange={this.handleChange}/>
                       </div>
                       <div className="form-group d-flex flex-column">
                           <label for="re-password">Re-enter Password</label>
                           <input type="password" name="re-password" onChange={this.handleChange}/>
                       </div>
                       <div className="mt-5 d-flex">
                          <Button className="login_btn" onClick={this.handleSubmit} >Sign Up</Button>
                          
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
                <div className="pt-5">
                <Footer color="#FDF7F4" />
                </div>
            </div>
        )
    }
}
