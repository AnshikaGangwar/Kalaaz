import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Navbar from './navbar';
import Footer from '../common/footer';
import upload from '../assets/upload.svg';
import drive from '../assets/gdrive.svg';
import Cookies from 'js-cookie';
import axios from 'axios';
import { base } from '../base';


export default class Addkalaa extends Component {
    state={
        
        username: "",
        profile: "",
        posted: false,

        data:{
            title: "",
            description: "",
            visibility: "Public",
            file:null,
            fileURL: " ",
        }
    }
    navlinks=[{
        link_name:"home",
        link_page:"/" },
    {
        link_name:"feed",
        link_page:"/feed"
    }];

    baseState= this.state.data;

    componentDidMount = async() => {
        const {data: currentUser} = await axios.get(base + `api/getuser/${Cookies.get("uid")}`)

        const dname  = currentUser.dname;
        const profile = currentUser.profile;

        this.setState({username: dname, profile: profile})
    }


    handleChange_visibility = async(event) => {
        const data = {...this.state.data}
        data['visibility']= event.target.value;
        await this.setState({ data });
    };
    handleRadio = async({currentTarget:input}) => {
        const data = {...this.state.data};
        if(input.name === 'file' && input.files['length']!=0){
            data[input.name] = input.files[0]
            data['fileURL'] = URL.createObjectURL(data[input.name])
        }
        else
        data[input.name] = input.value;
        await this.setState({ data });
    };


    resetValues = () =>{
        this.setState({data:this.baseState});
    }

    handlePost = async() =>{
        const artist = {id: Cookies.get("uid"),
                        dname: this.state.username,
                        profile: this.state.profile,
                         }
        const data = new FormData();
        data.append( 'title',this.state.data.title);
        data.append( 'description', this.state.data.description);
        data.append( 'artist', JSON.stringify(artist));
        data.append( 'file', this.state.data.file);
        data.append( 'visibility', this.state.data.visibility);
           
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        const res = await axios.post( base + 'api/post', data,config);
        
        this.resetValues();
        this.setState({posted: true});
        
    }

   


    render() {

        const imgpreview = this.state.data.fileURL;
        if(this.state.posted === true) {
            return <Redirect to="/feed"/>
        }

        return (
            <div className="addkalaa_wrapper">
            <Navbar navlinks={this.navlinks} profile={this.state.profile} dname={this.state.username}/>
            <div className="addkalaa_container">
                <h2 className="addkalaa_title">Add Kalaa</h2> 
                <div className="row container-fluid addkalaa_label">
                   <h3 className="label_text">Kalaa</h3>
                       <div className="label_upload_div">
                            <label for="file">
                                <div className="row label_innerdiv mt-2">
                                    <img src={upload} className="label_upload_img"/>
                                    <h4 className="upload_text" >Upload from device</h4>
                                </div>
                            </label>
                            
                            <span className="upload_text" >or</span>
                            <label for="gfile">
                                <div className="row label_innerdiv">
                                    <img src={drive} className="label_upload_img"/>
                                    <h4 className="upload_text" >Get from drive</h4>
                                </div>
                            </label>
                        </div>
                    
                    <input onChange={this.handleRadio} type="file" name="file" id="file" className="input-from-device" style={{display:"none"}}/>
                    <input onChange={this.handleRadio} type="file" name="file" id="gfile" className="input-from-drive" style={{display:"none"}} />
                    <div className="visibility-wrapper">
                            <h3 className="label_text">Visibility</h3>    
                            <div className="dropdown_wrapper">
                                <FormControl variant="outlined">
                                    <Select
                                    native
                                    value={this.state.data.visibility}
                                    onChange={this.handleChange_visibility}
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
                <div className="row container-fluid">
                    <div className="addkalaa_card">
                           <div className="container-fluid row preview_header">
                              <img src={base + 'media/profile/' + this.state.profile} className="img-fluid preview_userimage"/>
                              <h4 className="preview_username">{this.state.username}</h4>
                           </div>
                           <div className="d-flex flex-column preview_body">
                                {imgpreview === "" ? <div></div> : <img src={imgpreview} className="img-fluid preview_img"/>}
                                
                                <div className="addkalaa-input-wrapper">
                                    <input onChange={this.handleRadio} value={this.state.data.title} type="text" name="title" className="addkalaa_title_input" placeholder="Title" />
                                    <textarea onChange={this.handleRadio} value={this.state.data.description} type="textarea" name="description" className="addkalaa_desc_input" placeholder="Description" />
                                </div>
                           </div>
                    </div>
                    <div className="button_wrapper">
                        <Button className="addkalaa_btn" onClick={this.resetValues}>Discard</Button>
                        <Button className="addkalaa_btn" onClick={this.handlePost}>Post</Button>
                    </div>
                </div>
            </div>
            <Footer color="transparent" />
            </div> 
        )
    }
}
