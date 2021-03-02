import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from '../common/footer';

class Addkala extends Component {
    render() {
        return (
            <div style={{background: '#FDF7F4'}}>
                 <Navbar navlink1="feed" navlink2="Logout" />
                 <div className="d-flex flex-column justify-content-center align-items-center">
                     <h1 className="add_title">Add Kalaa</h1>
                    <form className="container form_wrapper">
                        <div className="form-group">
                            <lable className="add-lable" for="title">Title</lable>
                            <input type="text" name="title"></input>
                        </div>
                        <div className="form-group">
                            <lable className="add-lable" for="description">Description</lable>
                            <input type="text" name="description"></input>
                        </div>
                        <div className="form-group">

                        </div>
                        
                    </form>
                </div>
                 <Footer color="transparent" />
            </div>
        );
    }
}

export default Addkala;