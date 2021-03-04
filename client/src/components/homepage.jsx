import React, { Component } from 'react';
import Navbar from './navbar';
import multi_img from '../assets/multiple_img.svg'
import Footer from '../common/footer';

export default class Homepage extends Component {
    state={
        heartcolor: 'red'
    }
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
                <svg width="70" height="57" viewBox="0 0 70 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 0.0564445C12.3 0.431444 8.65 1.88144 6.5 3.63144C2.175 7.13144 0 11.8564 0 17.6064C0.025 24.0814 2.5 28.9814 8.9 35.1814C11.65 37.8314 12.4 38.4314 20.625 44.6564C27.15 49.5814 29.925 51.8814 33.075 54.8814L35.25 56.9814L38.2 54.1314C41.125 51.2564 43.925 48.9564 52.375 42.5064C62.2 34.9814 65.25 31.8064 67.9 26.2814C69.65 22.6064 70.075 20.6314 69.925 16.9314C69.875 15.1814 69.625 13.1314 69.4 12.3314C67.725 6.33144 63.3 2.23144 56.5 0.381444C54.875 -0.0685555 49.7 0.00644446 47.85 0.506444C44.55 1.35644 41.625 3.08144 39.35 5.45644C37.9 6.95644 36.3 9.25644 35.625 10.8314C35.35 11.4314 35.075 11.9064 34.95 11.9064C34.85 11.9064 34.45 11.3064 34.1 10.5814C31.45 5.30644 27.375 1.83144 22.325 0.556444C20.725 0.131444 17.025 -0.118556 15.5 0.0564445Z" fill={this.state.heartcolor}/>
</svg>

                   


                </div>
                <Footer color="#FDF7F4" />
            </div>
        )
    }
}
