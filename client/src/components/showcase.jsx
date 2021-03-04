import React, { Component } from 'react';
import Footer from '../common/footer';
import Navbar from './navbar';
import temp from '../assets/temp.jpg';
import Np from '../assets/np.jpg'

class Showcase extends Component {
    render() {
        return (
            <div className="showcase-wrapper">
                <Navbar navlink1="feed" navlink2="Logout" />
                <div className="frame-wrapper">
                    <div class="slideshow">
                    <div class="content">
                        <div>
                        <div class="slider-content">
                            <figure class="shadow"><img src={temp} /></figure>
                            <figure class="shadow"><img src={temp} /></figure>
                            <figure class="shadow"><img src={temp} /></figure>
                            <figure class="shadow"><img src={temp} /></figure>
                            <figure class="shadow"><img src={temp} /></figure>
                            <figure class="shadow"><img src={temp} /></figure>
                            <figure class="shadow"><img src={temp} /></figure>
                            <figure class="shadow"><img src={temp} /></figure>
                            <figure class="shadow"><img src={temp} /></figure>
                            <figure class="shadow" ><img src={temp} /></figure>
                        </div>    
                            <figure class="shadow test_"></figure>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer color="transparent" />
            </div>
        );
    }
}

export default Showcase;