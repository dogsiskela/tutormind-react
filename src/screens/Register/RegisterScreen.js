import React from "react";
import AuthBackground from "../LoginScreen/AuthBackground";
import "./Register.css"
import { useNavigate } from "react-router-dom";

export default function RegisterScreen() {
    const navigate = useNavigate();

    return (
        <div className="register">
            <div className="register-main">
                <button className="btn btn-outline-dark register-button" onClick={() => navigate('/register/user')}>User Account</button>
                <h6>OR</h6>
                <button className="btn btn-outline-dark register-button" onClick={() => navigate('/register/professor')}>Professor Account</button>
            </div>
            <AuthBackground text={"TUTORMIND"} screenWidthPct={50}></AuthBackground>
        </div>
    )
}
