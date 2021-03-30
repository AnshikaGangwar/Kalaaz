import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {toast} from 'react-toastify';
import Navbar from './navbar';
import Footer from '../common/footer';
import Google from '../assets/google_img.svg';
import axios from 'axios';
import { base } from '../base';

export default class Signuppage extends Component {
    state= {
        data : {
            email : "",
            name : "",
            dname: "",
            password: "",
            repassword: ""
        },
        checkdname:""
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
    handlednameChange =async ({currentTarget:input}) =>{
                  
        const data = {...this.state.data};
        data[input.name] = input.value;
        await this.setState({data});
        const res = await axios.get(base + `api/auth/check/dname/${input.value}`);
        console.log(res);
        if(res.status===404){
            this.setState({checkdname:"available"});
        }
        if(res.status==200){
            this.setState({checkdname:"notavailable"})

        }
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
          const res  = await axios.post(base + 'api/auth/register',payload);
          console.log(res);
    }
    

    render() {
        const checkdname = this.state.checkdname;
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
                           <input type="text" name="dname" onChange={this.handlednameChange}/>
                           {checkdname==="available" &&
                           <div className="dname_check">
                                <i className="fa fa-check"> username available</i>   
                           </div>
                           }
                           {checkdname==="notavailable" && 
                           <div className="dname_notcheck">
                                <i className="fa fa-times"> username not available</i>   
                           </div>
                           }                           
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
                          <a href={base + "/auth/google"}><Button variant="contained" className="google_btn">Continue with google <img src={Google}/></Button></a>
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
