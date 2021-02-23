import React, { Component } from 'react'
import multi_img from '../assets/multiple_img.svg'

export default class Homepage extends Component {
    render() {
        return (
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
        )
    }
}
