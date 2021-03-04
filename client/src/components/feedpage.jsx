import React, { Component } from 'react';
import plus from '../assets/plus.svg';
import heart from '../assets/heart.svg';
import Navbar from './navbar';
import Footer from '../common/footer';
//import temp from '../assets/temp.jpg'
import temp1 from '../assets/temp1.svg';
import temp from '../assets/me_2.jpg';

export default class Feedpage extends Component {
    state={
        name:"Anshika Gangwar",
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
    };

    navlinks=[{
       link_name:"ArtShow",
       link_page:"/showcase" },
   {
       link_name:"Profile",
       link_page:"/profile"
   }];

    render() {
        return (
           
            <div className="container-fluid feedpage_wrapper vh-100">
                <div className="navbar-wrapper">
                <Navbar navlinks={this.navlinks} />
                </div>
               <div className="container"> 
                <div className="d-flex flex-column align-items-center ">
                  <div className="container feed_col">
                   <div className="container feedpage_titlebar ">
                      <img src={plus}/>  
                      <h3 className="feed_title">Feeds</h3>
                      <img src={heart}/> 
                   </div>
                  </div> 
                   <div className="feed_container">
                   {this.state.posts.map( post => (
                     
                      <div className="container post_wrapper d-flex flex-column">
                         <div className="d-flex flex-row justify-content-between">
                           
                            <img className="img-fluid post_userimage" src={temp}/>
                            
                            <img className="img-fluid" src={heart}/>
                         </div>
                         <img className="img-fluid" src={temp1}/>  
                         <h2>{post.title}</h2>
                         <h3>{post.desc}</h3>                         
                     </div>
                   ))}
                   </div>
                </div>
              <Footer color="#FDF7F4" />
            </div>
            </div>
        )
    }
}
