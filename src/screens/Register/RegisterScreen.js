import React from "react";
import AuthBackground from "../LoginScreen/AuthBackground";
import "./Register.css"

export default function RegisterScreen() {
    return (
        <div className="register">
            <div className="register-main">
                <button className="btn btn-outline-dark register-button">User Account</button>
                <h6>OR</h6>
                <button className="btn btn-outline-dark register-button">Professor Account</button>
            </div>
            <AuthBackground text={"TUTORMIND"} screenWidthPct={50}></AuthBackground>
        </div>
    )
}
