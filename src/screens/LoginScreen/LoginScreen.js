import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, loginAction, resetLoginAction } from "../../redux/actions/actions";
import AuthBackground from "./AuthBackground";

import './AuthBackground.css'
import './LoginScreen.css'
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
    const loginState = useSelector(state => state.auth?.login);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (loginState?.status === 200) {
            // getAuthed(loginState.data.token)
            navigate('/dashboard')
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
            let j = await res.json();
            console.log(j)
            return j;
        }
        return null;

    }

    return (
        <div className="login">
            <div className="login-main">
                <form className="login-form">
                    <div className="label-input">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input id="username" type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                        {/*</div>*/}
                        {/*<div className="label-input">*/}
                        <label htmlFor="password" className="form-label">Password</label>
                        <input id="password" type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {/*</div>*/}
                        <div className="form-check">
                            <label htmlFor="rememberMe" className="form-check-label">Remember me</label>
                            <input id="rememberMe" type="checkbox" className="form-check-input" />
                        </div>
                    </div>
                    <button className="btn btn-warning" onClick={(e) => {
                        e.preventDefault();
                        dispatch(loginAction({
                            username: username,
                            password: password
                        }))
                    }}>LOGIN</button>
                </form>
            </div>
            <AuthBackground text={"TUTORMIND"} screenWidthPct={50}></AuthBackground>
        </div>
    )
}
