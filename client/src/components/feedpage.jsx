import React, { Component } from 'react'
import plus from '../assets/plus.svg'
import heart from '../assets/heart.svg'
import Navbar from './navbar'
//import temp from '../assets/temp.jpg'
import temp1 from '../assets/temp1.svg';
import temp from '../assets/me_2.jpg'

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
    }
    render() {
        return (
           
            <div className="container-fluid feedpage_wrapper vh-100">
                <div className="navbar-wrapper">
                <Navbar navlink1="Art Show" navlink2="Logout" />
                </div>
               <div className="row"> 
                <div className="col-md-7 d-flex flex-column align-items-center ">
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
                         <h3>{post.description}</h3>                         
                     </div>
                   ))}
                   </div>
                </div>
               <div className="col-md-5">
                <div className="row user_row">
                    <div className="col-md-4">
                       <div className="userimage_wrapper d-flex flex-column">
                          <div className="userimage">
                          <img src={temp} className="userimage" />
                          </div>
                          <div className="info_tags ">
                             <h3 className="info_text">My Arts</h3>
                             <h3 className="info_text">Liked</h3>
                             <h3 className="info_text">Settings</h3>
                          </div>

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
            </div>
        )
    }
}
