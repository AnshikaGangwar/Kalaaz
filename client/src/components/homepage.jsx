import React, { Component } from 'react';
import Navbar from './navbar';
import multi_img from '../assets/multiple_img.svg'
import Footer from '../common/footer';

export default class Homepage extends Component {
    render() {
        return ( 
            <div style={{ background:"#FDF7F4"}}>
        <Navbar navlink1="Login" navlink2="SignUP" navlink1_link="/login" navlink2_link="/signup" />
            <div className=" homepage_wrapper">
           
                <img src={multi_img} width="60%" height="80%"/>
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
