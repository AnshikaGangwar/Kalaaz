import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Navbar from './navbar';
import upload from '../assets/upload.svg'
import drive from '../assets/gdrive.svg'
import temp from '../assets/temp.jpg'
import temp1 from '../assets/temp1.svg'

export default class Addkalaa extends Component {
    state={
        username: "anshika_2927"
    }
    navlinks=[{
        link_name:"Home",
        link_page:"/" },
    {
        link_name:"Feed",
        link_page:"/feed"
    }];
    render() {
        return (
            <div className="addkalaa_wrapper">
            <Navbar navlinks={this.navlinks}/>
            <div className="addkalaa_container">
                <h2 className="addkalaa_title">Add Kalaa</h2> 
                <div className="row addkalaa_label">
                   <h3 className="label_text">Kalaa</h3>
                  
                       <div className="label_upload_div">
                            <label for="file">
                                <div className="row">
                                    <img src={upload} className="label_upload_img"/>
                                    <h4 className="upload_text" >Upload from device</h4>
                                </div>
                            </label>
                            
                            <h4 className="upload_text" >or</h4>
                            <label for="gfile">
                                <div className="row">
                                    <img src={drive} className="label_upload_img"/>
                                    <h4 className="upload_text" >Get from drive</h4>
                                </div>
                            </label>
                        </div>
                    
                    <input type="file" name="file" id="file" className="input-from-device" style={{display:"none"}}/>
                    <input type="file" name="gfile" id="gfile" className="input-from-drive" style={{display:"none"}} />
                   <h3 className="label_text">Visibility</h3>    
                   <div>
                      dropdown
                   </div>     
                </div>
                <div className="row">
                    <div className="addkalaa_card">
                           <div className="row preview_header">
                              <img src={temp} className="img-fluid preview_userimage"/>
                              <h4 className="preview_username">{this.state.username}</h4>
                           </div>
                           <div className="d-flex flex-column">
                                <img src={temp1} className="img-fluid preview_img"/>
                                <input type="text" name="title" className="addkalaa_title" />
                                <input type="text" name="description" className="addkalaa_description" />
                           </div>
                    </div>
                    <Button className="addkalaa_btn">Discard</Button>
                    <Button className="addkalaa_btn">Post</Button>
                </div>
            </div>
            </div> 
        )
    }
}
