import React, { Component } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import {base} from '../base';
import moment from 'moment-js';

export default class individualPost extends Component {
    state = {
        heartcolor: '#E1E1E1',
       data:{
        artist_id: "",
        dname: "",
        profile: "",
        title:"",
        description:"",
        date: "",
        likes: [],
        filename:"",
        visibility: "",
       }
    }


    async componentDidMount() {
        const {data: myart} = await axios.get( base + `api/post/getart/${this.props.post_id}`);
        const data = {...this.state.data};

        
        data['artist_id'] = myart.artist.id;
        data['dname'] = myart.artist.dname;
        data['profile'] = myart.artist.profile;
        data['title'] = myart.title;
        data['description'] = myart.description;
        data['filename'] = myart.filename;
        data['likes'] = myart.likes;
        data['visibility'] = myart.visibility;
        data['date'] = moment().format("DD/MM/yyyy");

        this.setState({data});
  } 
    render() {
         
             if(!this.props.show === "All" && !this.state.data.visibility === this.props.show)
             {
                 return <div>  </div>
             }
             return (
            <div className="container post_wrapper d-flex flex-column">
            <div className="d-flex flex-row justify-content-between align-items-center">
              
              <div className="row align-items-center">
                   <img className="img-fluid post_userimage" src={base + "media/profile/"+this.state.data.profile}/>
                   <h3 className="post_username">{this.state.data.dname}</h3>
               </div>
               <svg className="post_heart" viewBox="0 0 70 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M15.5 0.0564445C12.3 0.431444 8.65 1.88144 6.5 3.63144C2.175 7.13144 0 11.8564 0 17.6064C0.025 24.0814 2.5 28.9814 8.9 35.1814C11.65 37.8314 12.4 38.4314 20.625 44.6564C27.15 49.5814 29.925 51.8814 33.075 54.8814L35.25 56.9814L38.2 54.1314C41.125 51.2564 43.925 48.9564 52.375 42.5064C62.2 34.9814 65.25 31.8064 67.9 26.2814C69.65 22.6064 70.075 20.6314 69.925 16.9314C69.875 15.1814 69.625 13.1314 69.4 12.3314C67.725 6.33144 63.3 2.23144 56.5 0.381444C54.875 -0.0685555 49.7 0.00644446 47.85 0.506444C44.55 1.35644 41.625 3.08144 39.35 5.45644C37.9 6.95644 36.3 9.25644 35.625 10.8314C35.35 11.4314 35.075 11.9064 34.95 11.9064C34.85 11.9064 34.45 11.3064 34.1 10.5814C31.45 5.30644 27.375 1.83144 22.325 0.556444C20.725 0.131444 17.025 -0.118556 15.5 0.0564445Z" fill={this.state.heartcolor}/>
               </svg>
            </div>
            <img className="img-fluid" src={base + "media/post/" + this.state.data.filename} />  
            <h2 className="postcontent_title">{this.state.data.title}</h2>
            <h3 className="postcontent_desc">{this.state.data.description}</h3>                         
        </div>
        
        )
    }
}
