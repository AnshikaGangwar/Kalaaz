import React, { Component } from 'react';
import Navbar from './navbar';
import multi_img from '../assets/multiple_img.svg'
import Footer from '../common/footer';

export default class Homepage extends Component {
    
    render() {
        const navlinks=[
            {link_name: "Login",
              link_page: "/login",  
        },
        {link_name: "SignUp",
        link_page: "/signup"  
  }]
//const navlinks=[{link_name: "Art show", link_page: "/feed"}]

        return ( 
            <div style={{ background:"#FDF7F4"}}>
        <Navbar navlinks={navlinks}/>
            <div className=" homepage_wrapper">
           
                <img src={multi_img}  className="homepage_centerimg"/>
                <span className="homepage_title">
                    KALAAZ
                </span>
                <div className="w-50 text-center">
                <span className="homepage_desc text-center">
                A platform for the artists to display their amazing works in an unique way, for art lover view the kalaas (arts) of their favourite artists in their feeds and much more. 
                </span>
                </div>
                

                   


                </div>
                <Footer color="#FDF7F4" />
            </div>
        )
    }
}
