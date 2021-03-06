import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import Navbar from './navbar';
import Footer from '../common/footer';
import upload from '../assets/upload.svg'
import drive from '../assets/gdrive.svg'
import temp from '../assets/temp.jpg'
import temp1 from '../assets/temp1.svg'

export default class Addkalaa extends Component {
    state={
        username: "anshika_2927",
        visibilty: "",
        data:{
            title: "",
            description: "",
            file: ""
        }
    }
    navlinks=[{
        link_name:"home",
        link_page:"/" },
    {
        link_name:"feed",
        link_page:"/feed"
    }];
    handleChange_visibility = async(event) => {
        await this.setState({ visibility: event.target.value });
    };
    handleRadio = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        if(input.name === 'file')data[input.name] = input.files[0]
        this.setState({ data });
    };
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
                    
                    <input on type="file" name="file" id="file" className="input-from-device" style={{display:"none"}}/>
                    <input on type="file" name="file" id="gfile" className="input-from-drive" style={{display:"none"}} />
                    <div className="visibility-wrapper">
                            <h3 className="label_text">Visibility</h3>    
                            <div className="dropdown_wrapper">
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="visibility">Visibility</InputLabel>
                                    <Select
                                    native
                                    value={this.state.visibility}
                                    onChange={this.handleChange_visibility}
                                    label="Visibility"
                                    inputProps={{
                                        name: 'visibility',
                                        id: 'visibility',
                                    }}
                                    >
                                    <option value="Public">Public</option>
                                    <option value="Private">Private</option>
                                    <option value="Followers">Followers</option>
                                    </Select>
                                </FormControl>
                            </div>   
                    </div>     
                </div>
                <div className="row">
                    <div className="addkalaa_card">
                           <div className="container-fluid row preview_header">
                              <img src={temp} className="img-fluid preview_userimage"/>
                              <h4 className="preview_username">{this.state.username}</h4>
                           </div>
                           <div className="d-flex flex-column preview_body">
                                <img src={temp1} className="img-fluid preview_img"/>
                                <div className="addkalaa-input-wrapper">
                                    <input onChange={this.handleRadio} value={this.state.data.title} type="text" name="title" className="addkalaa_title" placeholder="Title" />
                                    <input onChange={this.handleRadio} value={this.state.data.description} type="textarea" name="description" className="addkalaa_description" placeholder="Description" />
                                </div>
                           </div>
                    </div>
                    <div className="button_wrapper">
                        <Button className="addkalaa_btn">Discard</Button>
                        <Button className="addkalaa_btn">Post</Button>
                    </div>
                </div>
            </div>
            <Footer color="transparent" />
            </div> 
        )
    }
}
