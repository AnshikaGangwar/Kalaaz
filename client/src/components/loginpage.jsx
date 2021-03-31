import React, { Component } from 'react'
import { Link,Redirect } from 'react-router-dom';
import Cookies from 'js-cookie'
import Button from '@material-ui/core/Button'
import Navbar from './navbar';
import Footer from '../common/footer';
import Google from '../assets/google_img.svg'
import axios from 'axios';
import { base } from '../base';


export default class Loginpage extends Component {
    
    state={
        checklogin:Cookies.get("uid"),       
        data:{
        email: "",
        password: "",
        }
    }
    onChangehandler= ({currentTarget:input})=>{
       const data= {...this.state.data};
       data[input.name]= input.value;
       this.setState({data});

    }

    handleSubmit = async() =>{
        const payload = {
            email: this.state.data.email,
            password: this.state.data.password
        };
        const res = await axios.post(base + 'api/auth/login', payload);
        console.log(res);
        if(res.status === 200) {
            Cookies.set("uid", res.data._id )
            this.setState({checklogin: Cookies.get("uid")})
        }
    }
    navlinks=[
        {link_name: "Home",
         link_page: "/"
        },
        {link_name: "SignUp",
          link_page: "/signup"
        },
    ]
    render() {
        if( this.state.checklogin){
            return <Redirect to="/feed" />
        }
        return (
            
            <div className="container-fluid login_wrapper vh-100 p-0">
               <Navbar navlinks={this.navlinks}/>
                 <div className="inner_wrapper">
                   <form className="container login_card">
                      <div className="inner_form w-100">
                       <div className="form-group d-flex flex-column w-100">
                           <label for="email">Email</label>
                           <input type="text" name="email" onChange={this.onChangehandler}/>
                           
                       </div>
                       <div className="form-group d-flex flex-column">
                           <label for="password">Password</label>
                           <input type="password" name="password" onChange={this.onChangehandler}/>
                       </div>
                       <div className="mt-5 d-flex">
                          <Button className="login_btn" onClick={this.handleSubmit}>Login</Button>
                          
                          <div className="mt-4">
                          <span className="login_text ">or</span>
                          </div>
                          <a href={base + 'auth/google'}>
                          <Button variant="contained" className="google_btn" onClick={this.handleGoogleLogin}>Continue with google <img src={Google}/></Button> 
                          </a>
                       </div>
                       <div className="d-flex mt-3">
                           <h4>New here, </h4>
                           <Link to='/signup'><h4 className="pl-1 pr-1 sup_color">Signup </h4></Link> 
                           <h4>to enjoy our services</h4>
                       </div>
                     </div>
                   </form>
                </div>
                <div className="mt-5">
                <Footer color="#FDF7F4" />
                </div>
            </div>
        )
    }
}
