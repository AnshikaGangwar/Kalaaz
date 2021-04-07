import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from '../common/footer';
import Cookies from 'js-cookie'
import axios from 'axios'
import {base} from '../base'
import Post from './individualPost'
export default class OthersProfilePage extends Component {
    state={
        defaultselection:2,
        heartcolor: '#E1E1E1',
        profilename:"",
        data:{
            dname:"",
            name:"",
            profile: "",
            followers:1634,
            following:2341,
            art: []
        }
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
        const { match: { params } } = this.props;
        this.setState({ profilename:params.dname })
        const  {data: currentuser} = await axios.get(base +`api/getprofile/${params.dname}`);
        
        const data = {...this.state.data}

        data['name'] = currentuser.name;
        data['dname'] = currentuser.dname;
        data['profile'] = currentuser.profile;
        data['art'] = currentuser.art;
        data['followers'] = currentuser.followers.length;
        data['following'] = currentuser.following.length;

        this.setState({data});
        
    }

    render() {
        const val =this.state.defaultselection;
        const arts  =this.state.data.art=== undefined ? []:this.state.data.art;
        return (
           
            <div className="container-fluid feedpage_wrapper vh-100">
                <div className="navbar-wrapper">
                <Navbar navlinks={this.navlinks} dname={this.state.data.dname} profile={this.state.data.profile} />
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
                   {arts.reverse().map( post => (
                     
                          <Post post_id={post} show="Public"/>
                   ))}
                   </div>
                </div>
               <div className="col-md-4">
               <div className="row searchbar_wrapper">
                    
                    <input type="text"
                              value= {this.state.searchkey}
                              placeholder="Search"
                              className="searchbar"
                          />
   
                    </div>
                <div className="row user_row">
                    <div className="col-md-4">
                       <div className="userimage_wrapper d-flex flex-column">
                          <div className="userimage">
                          <img src={base + "media/profile/" + this.state.data.profile} className="userimage" />
                          </div>
                       </div>   
                    </div>
                    <div className="col-md-8">
                       
                       <div className="userdetails_wrapper pr-5">
                         <h3 className="username">{this.state.data.name}</h3>
                         <div className="row mt-4">
                            <h3 className="col-md-5 user_follow">{this.state.data.followers}</h3>
                            <h3 className="col-md-5 user_follow">{this.state.data.following}</h3> 
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
