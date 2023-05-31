import React, { useEffect } from "react";
import IconLanding from 'assets/icon_landing.svg';

import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LandingPage() {
    const navigate = useNavigate();

    const loginState = useSelector(state => state.auth?.login);

    useEffect(() => {
        if (loginState?.data?.token) {
            getAuthed(loginState.data.token)
        }
    }, [loginState])

    const getAuthed = async (token) => {
        let res = await fetch("http://localhost:9091/api/user/validate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }).catch(e => {
            return null;
        })
        if (res) {
            console.log(res)
            let authed = await res.json();
            if (authed) {
                navigate('/dashboard')
            }
        }
        return null;

    }


    return (
        <div className="backdrop">
            <img className="logo" src={IconLanding} height={400} width={400} style={{ marginTop: 150 }}>

            </img>
            <div className="landing-side">
                <div className="landing-auth">
                    <button className="btn btn-light" onClick={() => navigate('/login')}>Log In</button>
                    <button className="btn btn-outline-light" onClick={() => navigate('/register')}>Register</button>
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
