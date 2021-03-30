import React, { Component } from 'react';
import Footer from '../common/footer';
import Navbar from './navbar';
import temp from '../assets/temp.jpg';
import axios from 'axios';
import Cookies from 'js-cookie';
import { base } from '../base';

class Showcase extends Component {
    state={
        data:{
            danme:"",
            name:"",
            profile:"",
            arts:""
        }

    }
    navlinks=[{
        link_name:"ArtShow",
        link_page:"/showcase" },
    {
        link_name:"Profile",
        link_page:"/profile"
    }];
    componentDidMount = async() => {
        const { data : currentuser } = await axios.get(base + `api/getuser/${Cookies.get("uid")}`);
        const data = {...this.state.data}
        data['dname'] = currentuser.dname;
        data['name'] = currentuser.name;
        data['profile'] = currentuser.profile;
        data['arts'] = currentuser.arts;
        this.setState({data});
    }
    
    render() {
        return (
            <div className="showcase-wrapper">
                <Navbar navlinks={this.navlinks} dname={this.state.data.dname} profile={this.state.data.profile} />
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