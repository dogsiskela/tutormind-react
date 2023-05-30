import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div className="backdrop">
            <img className="logo" src="">

            </img>
            <div className="landing-side">
                <div className="landing-auth">
                    <button className="btn btn-light">Log In</button>
                    <button className="btn btn-outline-light">Register</button>
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
