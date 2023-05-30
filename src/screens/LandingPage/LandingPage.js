import React from "react";
import IconLanding from 'assets/icon_landing.svg';

import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="backdrop">
            <img className="logo" src={IconLanding} height={400} width={400} style={{ marginTop: 150 }}>

            </img>
            <div className="landing-side">
                <div className="landing-auth">
                    <button className="btn btn-light" onClick={()=>navigate('/login')}>Log In</button>
                    <button className="btn btn-outline-light" onClick={()=>navigate('/register')}>Register</button>
                </div>
                <div className="landing-main">
                    <h3>Welcome to</h3>
                    <h1>TUTORMIND</h1>
                    <h6>Log in to access dashboard</h6>
                </div>
            </div>
        </div>
    )
}
