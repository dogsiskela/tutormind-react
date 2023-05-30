import React from 'react';
import AuthBackground from "../LoginScreen/AuthBackground";
import "./RegisterUser.css"
import {FaMailBulk} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa"

export default function RegisterUser() {
    return (
        <div className="register-user">
            <div className="register-user-main">
                <div className="login-options">
                    <FaMailBulk className="icon"/>
                    <FaFacebook className="icon"/>
                    <FaTwitter className="icon"/>
                </div>
                <h6>OR</h6>
                <form className="">
                    <input className="form-control" placeholder="First Name" type="text"/>
                    <input className="form-control" type="text" placeholder="Last Name"/>
                    <input className="form-control" type="email" placeholder="Email"/>
                    <select className="form-select">
                        <option selected disabled>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <input className="form-control" placeholder="Password" type="password"/>
                    <input className="form-control" placeholder="Confirm Password" type="password"/>
                    <button type="submit" className="btn btn-warning">Register</button>
                </form>
            </div>
            <AuthBackground screenWidthPct={50} text={"Register User"}></AuthBackground>
        </div>
    )
}
