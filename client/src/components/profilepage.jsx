import React, { Component } from 'react';
import plus from '../assets/plus.svg';
import heart from '../assets/heart.svg';
import Navbar from './navbar';
import Footer from '../common/footer';
//import temp from '../assets/temp.jpg'
import temp1 from '../assets/temp1.svg';
import temp from '../assets/me_2.jpg';
import Cookies from 'js-cookie'
import axios from 'axios'

export default class Feedpage extends Component {
    state={
        defaultselection:2,
        heartcolor: '#E1E1E1',
        user:{
        username:"anshika_2927",
        name:"Anshika Gangwar",
        profile: "",
        },
        followers:1634,
        following:2341,
        posts: [
           {
              title: "Abstract Art",
              desc: "Abstract art has been with us in one form or another for almost a century now and has proved to be not only a long-standing crux of cultural debate but a self-renewing, vital tradition of creativity.",
           },
           {
            title: "Abstract Art",
            desc: "Abstract art has been with us in one form or another for almost a century now and has proved to be not only a long-standing crux of cultural debate but a self-renewing, vital tradition of creativity.",
           },
           {
            title: "Abstract Art",
            desc: "Abstract art has been with us in one form or another for almost a century now and has proved to be not only a long-standing crux of cultural debate but a self-renewing, vital tradition of creativity.",
           },
           {
            title: "Abstract Art",
            desc: "Abstract art has been with us in one form or another for almost a century now and has proved to be not only a long-standing crux of cultural debate but a self-renewing, vital tradition of creativity.",
           },
           {
            title: "Abstract Art",
            desc: "Abstract art has been with us in one form or another for almost a century now and has proved to be not only a long-standing crux of cultural debate but a self-renewing, vital tradition of creativity.",
           },
        ]
    }

    navlinks=[{
        link_name:"ArtShow",
        link_page:"/showcase" },
    {
        link_name:"Home",
        link_page:"/"
    }];

    changeRadio = e => {
        this.setState({ defaultselection: e.target.value})
    }

    async componentDidMount() {
        const  {data: currentuser} = await axios.get('')
    }

    render() {
        const val =this.state.defaultselection;
        return (
           
            <div className="container-fluid feedpage_wrapper vh-100">
                <div className="navbar-wrapper">
                <Navbar navlinks={this.navlinks} />
                </div>
               <div className="row"> 
                <div className="col-md-8 d-flex flex-column align-items-center ">
                  <div className="container feed_col">
                   <div className="container feedpage_titlebar ">
                   <div className="wrapper">
                    <div className="toggle_radio">
                        <input onClick={this.changeRadio} type="radio" value="1" checked={ val==1 ? true : false } className="toggle_option" id="first_toggle"  name="toggle_option" />
                        <input onClick={this.changeRadio} type="radio" value="2" checked={ val==2 ? true : false } className="toggle_option" id="second_toggle" name="toggle_option" />
                        <input onClick={this.changeRadio} type="radio" value="3" checked={ val==3 ? true : false } className="toggle_option" id="third_toggle"  name="toggle_option" />
                        <label htmlFor="first_toggle"><p>Public</p></label>
                        <label htmlFor="second_toggle"><p>All</p></label>
                        <label htmlFor="third_toggle"><p>Private</p></label>
                        <div className="toggle_option_slider"></div>
                    </div>
                </div>
                   </div>
                  </div> 
                   <div className="feed_container">
                   {this.state.posts.map( post => (
                     
                      <div className="container post_wrapper d-flex flex-column">
                         <div className="d-flex flex-row justify-content-between align-items-center">
                           
                           <div className="row align-items-center">
                                <img className="img-fluid post_userimage" src={temp}/>
                                <h3 className="post_username">{this.state.username}</h3>
                            </div>
                            <svg className="post_heart" viewBox="0 0 70 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 0.0564445C12.3 0.431444 8.65 1.88144 6.5 3.63144C2.175 7.13144 0 11.8564 0 17.6064C0.025 24.0814 2.5 28.9814 8.9 35.1814C11.65 37.8314 12.4 38.4314 20.625 44.6564C27.15 49.5814 29.925 51.8814 33.075 54.8814L35.25 56.9814L38.2 54.1314C41.125 51.2564 43.925 48.9564 52.375 42.5064C62.2 34.9814 65.25 31.8064 67.9 26.2814C69.65 22.6064 70.075 20.6314 69.925 16.9314C69.875 15.1814 69.625 13.1314 69.4 12.3314C67.725 6.33144 63.3 2.23144 56.5 0.381444C54.875 -0.0685555 49.7 0.00644446 47.85 0.506444C44.55 1.35644 41.625 3.08144 39.35 5.45644C37.9 6.95644 36.3 9.25644 35.625 10.8314C35.35 11.4314 35.075 11.9064 34.95 11.9064C34.85 11.9064 34.45 11.3064 34.1 10.5814C31.45 5.30644 27.375 1.83144 22.325 0.556444C20.725 0.131444 17.025 -0.118556 15.5 0.0564445Z" fill={this.state.heartcolor}/>
</svg>
                         </div>
                         <img className="img-fluid" src={temp1}/>  
                         <h2>{post.title}</h2>
                         <h3>{post.desc}</h3>                         
                     </div>
                   ))}
                   </div>
                </div>
               <div className="col-md-4">
                <div className="row user_row">
                    <div className="col-md-4">
                       <div className="userimage_wrapper d-flex flex-column">
                          <div className="userimage">
                          <img src={temp} className="userimage" />
                          </div>
                          {/* <div className="info_tags ">
                             <h3 className="info_text">My Arts</h3>
                             <h3 className="info_text">Liked</h3>
                             <h3 className="info_text">Settings</h3>
                          </div> */}

                       </div>   
                    </div>
                    <div className="col-md-8">
                       
                       <div className="userdetails_wrapper pr-5">
                         <h3 className="username">{this.state.name}</h3>
                         <div className="row mt-4">
                          
                            <h3 className="col-md-5 user_follow">{this.state.followers}</h3>
                            <h3 className="col-md-5 user_follow">{this.state.following}</h3>
                         </div>
                         <div className="row">
                            <h3 className="col-md-5 user_follow">Followers</h3>
                            <h3 className="col-md-5 user_follow">Following</h3>
                         </div>
                       </div>  
                    </div>
                </div>
               </div> 
              </div> 
              <Footer color="#FDF7F4" />
            </div>
        )
    }
}
