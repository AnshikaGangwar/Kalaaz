import React, { Component } from 'react'
import temp from '../assets/temp.jpg'
import Navbar from './navbar';
import Footer from '../common/footer';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import Cookies from 'js-cookie'
import { base } from '../base';

export default class Editprofilepage extends Component {
    state={
        inputName:false,
        inputDName:false,
        data:{
            name: "Anshika Gangwar",
            dname: "anshika_2927",
            file:null,
            fileUrl:''
        },
        user:{
            name: "Anshika Gangwar",
            dname: "anshika_2927",
            profile: "",
            followers:  "",
            following: "",
            posts: "",
            likedposts: "",
        }
    }

    navlinks=[{
        link_name:"ArtShow",
        link_page:"/showcase" },
    {
        link_name:"Profile",
        link_page:"/profile"
    }];


     async componentDidMount() {
        const {data: currentUser} = await axios.get(base + `api/getuser/${Cookies.get("uid")}`)
        //console.log(currentUser);
        const newuser = {...this.state.user};
        newuser["dname"] = currentUser.dname;
        newuser["name"] = currentUser.name;
        newuser["following"] = currentUser.following;
        newuser["followers"] = currentUser.followers;
        newuser["profile"] = currentUser.profile;        
        newuser["posts"] = currentUser.following;
        this.setState({user: newuser});
     }




    onNameChangehandler= () =>{
        this.setState({inputName: !this.state.inputName})
    }

    onDNameChangehandler= () =>{
        this.setState({inputDName: !this.state.inputDName})
    }

    onChangeHandler = ({currentTarget:input}) =>{
            const place= input.name;
            const value= input.value;
            const data = {...this.state.data};
            if(input.type=== "file"){
                data[input.name]=input.files[0];
                data['fileUrl'] = URL.createObjectURL(input.files[0]);
            }
            data[place] = value;
            this.setState({data});
            console.log(data['file']);

    }
    
    onbuttonClick = (action, field) =>{

      if(action === "keep"){
        console.log("save");
        
        const user = {...this.state.user}

        if(field === "name")
         user["name"] = this.state.data.name;
        else
         user["dname"]= this.state.data.dname; 

        this.setState({user}); 

           
      }
      if(field === "name")
       this.onNameChangehandler();
      else
       this.onDNameChangehandler();
    }


    render() {
        const imgpreview= this.state.data.fileUrl;
        return (
            <div className=" edit_wrapper">
            <Navbar navlinks={this.navlinks} dname={this.state.user.dname} profile={this.state.user.profile}/>
                <div className="container edit_inner">
                  
                     
                     <div className="row"> 
                     {/* row1 */}
                        <div className="col-md-8">
                                <div className="row  d-flex flex-column edit_row">
                                    {/* col 1  */}
                                    <h2 className="edit_title">Name</h2>
                                    <h3 className="edit_name">{this.state.user.name}</h3>
                                    { !this.state.inputName && <div className="row" style={{cursor: "pointer"}} onClick={this.onNameChangehandler}>
                                    <h2 className="edit_text">Change name</h2>
                                    <i className="fa fa-pencil edit_icon"/>
                                    </div>
                                    }
                                    {this.state.inputName && <div className="row ">
                                    <input name="name" onChange={this.onChangeHandler}/>
                                    <Button variant="contained" className="button_edit" onClick={() => {this.onbuttonClick("discard", "name")}}>Discard</Button>
                                    <Button variant="contained" className="button_edit" onClick={() => {this.onbuttonClick("keep", "name")}}>Keep</Button> 
                                    </div>}
                                </div>
                                <div className="row  d-flex flex-column edit_row">
                                {/* col2 */}
                                    <h2 className="edit_title">Display Name</h2>
                                    <h3 className="edit_name">{this.state.user.dname}</h3>
                                    { !this.state.inputDName && <div className="row" style={{cursor: "pointer"}} onClick={this.onDNameChangehandler}>
                                    <h2 className="edit_text">Change display name</h2>
                                    <i className="fa fa-pencil edit_icon"/>
                                    </div>
                                    }
                                    {this.state.inputDName && <div className="row ">
                                    <input name="dname" onChange={this.onChangeHandler}/>
                                    <Button variant="contained" className="button_edit" onClick={() => {this.onbuttonClick("discard", "dname")}}>
                                    Discard</Button>
                                    <Button variant="contained" className="button_edit" onClick={() => {this.onbuttonClick("keep", "dname")}}>Keep</Button> 
                                    </div>}
                                </div>
                        </div>
                        <div className="col-md-4 d-flex flex-column align-items-center edit_row pl-0">
                            {/* col2 img */}
                            {imgpreview === "" ? <div></div> :<img src={imgpreview}  className="edit_userimage"/>}
                            
                            <label for="file">
                            <div>
                            <Button variant="contained" component="span" className="button_edit" >Change Profile Photo</Button>
                            </div>
                            </label>
                            <input type="file" name="file" id="file" className="input-from-device" style={{display:"none"}} onChange={this.onChangeHandler} />
                        </div>
                        
                     </div>
                     
                     <div className="row edit_row">
                         {/* row3 */}
                         <div className="col-md-8 pl-0">
                            {/* col 1  */}
                            <h2 className="edit_title">Email</h2>
                            <h3 className="edit_name">anshikagangwar289@gmail.com</h3>

                        </div>
                        <div className="col-md-4 pl-0 edit_row d-flex justify-content-center align-items-center">
                            {/* col2 img */}
                            <Button variant="contained" className="button_edit" >Reset Password</Button>
                        </div>
                     </div>
                     <div className="row edit_row ">
                         {/* row4 */}
                         <div className="col-md-3 pl-0">
                            <h3 className="edit_title">Posts</h3>
                            <h4 className="edit_title">44</h4>
                         </div>
                         <div className="col-md-3 pl-0">
                            <h3 className="edit_title">Followers</h3>
                            <h4 className="edit_title">{this.state.user.followers}</h4>
                         </div>
                     </div>
                     <div className="row edit_row">
                         {/* row5 */}
                         <div className="col-md-3 pl-0">
                            <h3 className="edit_title">Liked Posts</h3>
                            <h4 className="edit_title">94</h4>
                         </div>
                         <div className="col-md-3 pl-0">
                            <h3 className="edit_title">Following</h3>
                            <h4 className="edit_title">{this.state.user.following}</h4>
                         </div>
                     </div>
                     <div className="d-flex justify-content-center p-3 pt-5">
                     <Button variant="contained" className="button_edit " >Delete Account</Button>
                     </div>
                 
                  </div>

                
                <Footer color="#FDF7F4"/>
            </div>
        )
    }
}
