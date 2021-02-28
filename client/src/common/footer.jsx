import React, { Component } from 'react';
import Cookies from 'js-cookie';

class Footer extends Component {
    render() {
        const login_flag = Cookies.get("u_id") === undefined ? false : true;
        const bg = this.props.color === undefined ? "#FDF7F4" : this.props.color;
        return (
            <div className="container-fluid footer_wrapper" style={{ background:`${bg}`}}>
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="footer_title">KALAAZ</h1>
                        <h4 className="footer_text">With you in the journey of creating a better tommorow for artist </h4>
                    </div>
                    {login_flag && <div className="col-md-3">
                        <h3 className="footer-link-heading">Site Links</h3>
                        <h4 className="footer-link">Your Profile</h4>
                        <h4 className="footer-link">Your feeds</h4>
                        <h4 className="footer-link">Your showcase</h4>
                    </div> }
                    <div className="col-md-4">
                        <h3 className="footer-link-heading">Important Links</h3>
                        <h4 className="footer-link">Home</h4>
                        <h4 className="footer-link">Privacy Policies</h4>
                        <h4 className="footer-link">Terms and Conditions</h4>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Footer;