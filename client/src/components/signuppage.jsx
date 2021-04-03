import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {toast} from 'react-toastify';
import { Link,Redirect } from 'react-router-dom';
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
        checkdname:"",
        checkpass:"",
        redirect:false
    }
    navlinks=[
        {link_name: "Home",
         link_page: "/"
        },
        {link_name: "Login",
          link_page: "/login"
        },
    ]

    componentDidUpdate=async()=>{
       
        
    }
    handleChange = ({currentTarget:input}) =>{
                  
           const data = {...this.state.data};
           data[input.name] = input.value;
           this.setState({data});
    }
    handlednameChange =async ({currentTarget:input}) =>{
                  
        const data = {...this.state.data};
        data[input.name] = input.value;
        await this.setState({data});
        if(this.state.data.dname != ""){
            const res = await axios.get(base + `api/auth/check/dname/${this.state.data.dname}`);
            console.log(res);
            if(res.data=="Dname not found"){
                this.setState({checkdname:"available"});
            }
            else if(res.data=="Dname found"){
                this.setState({checkdname:"notavailable"})

            }
        }
        else{
            this.setState({checkdname:""})
        }

 }

 handlerepasswordChange = async({currentTarget:input}) =>{
    const data = {...this.state.data};
    data[input.name] = input.value;
    await this.setState({data});
    if(this.state.data.repassword != ""){
        if(this.state.data.repassword != this.state.data.password){
            this.setState({checkpass:"not same"});
        }
        if(this.state.data.repassword == this.state.data.password){
            this.setState({checkpass:"same"});
        }
    }
    if(this.state.data.repassword==""){
        this.setState({checkpass:""})
    }
 }   
 
 handleSubmit = async(e) =>{
     e.preventDefault();
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
          this.setState({redirect:true})
    }
    

    render() {
        if(this.state.redirect){
            return <Redirect to="/login"></Redirect>
        }
        const checkdname = this.state.checkdname;
        const checkpass = this.state.checkpass;
        console.log(this.state)
        return (
            
            <div className="container-fluid login_wrapper p-0 ">
               <Navbar navlinks={this.navlinks} />
                 <div>
                   <form onSubmit={this.handleSubmit} className="container login_card">
                      <div className="inner_form w-100">
                       <div className="form-group d-flex flex-column ">
                           <label for="name">Name</label>
                           <input type="text" name="name" onChange={this.handleChange} required/>
                       </div>
                       <div className="form-group d-flex flex-column ">
                           <label for="email">Email</label>
                           <input type="email" name="email" onChange={this.handleChange} required/>
                           
                       </div>
                       <div className="form-group d-flex flex-column ">
                           <label for="dname">Display Name</label>
                           <input type="text" name="dname" onChange={this.handlednameChange} required/>
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
                           <input type="password" name="password" onChange={this.handleChange} required/>
                       </div>
                       <div className="form-group d-flex flex-column">
                           <label for="repassword">Re-enter Password</label>
                           <input type="password" name="repassword" onChange={this.handlerepasswordChange} required/>
                           {checkpass==="same" &&
                           <div className="dname_check">
                                <i className="fa fa-check"> correct</i>   
                           </div>
                           }
                           {checkpass==="not same" && 
                           <div className="dname_notcheck">
                                <i className="fa fa-times"> confirm password should be same as password</i>   
                           </div>
                           }  
                       </div>
                       <div className="mt-5 d-flex">
                          <Button type="submit" className="login_btn" >Sign Up</Button>
                          
                          <div className="mt-4">
                          <span className="login_text ">or</span>
                          </div>
                          <a href={base + "/auth/google"}><Button variant="contained" className="google_btn">Continue with google <img src={Google}/></Button></a>
                       </div>
                       <div className="d-flex mt-3">
                           <h4>Already a member? </h4>
                           <Link to='/login'><h4 className="pl-1 pr-1 sup_color">Login </h4> </Link>
                           
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
