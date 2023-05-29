import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../redux/actions/actions";
import AuthBackground from "./AuthBackground";
import "./LoginScreen.css";

export default function LoginScreen() {
    const state = useSelector(state => state?.auth?.login);

    useEffect(() => {
        if (state?.data?.token) {
            getAuthed(state.data.token)
        }
    }, [state])

    useEffect(() => {
        // dispatch(loginAction())
    }, [])

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
                        <input id="username" type="text" className="form-control"/>
                        {/*</div>*/}
                        {/*<div className="label-input">*/}
                        <label htmlFor="password" className="form-label">Password</label>
                        <input id="password" type="password" className="form-control"/>
                        {/*</div>*/}
                        <div className="form-check">
                            <label htmlFor="rememberMe" className="form-check-label">Remember me</label>
                            <input id="rememberMe" type="checkbox" className="form-check-input"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning">LOGIN</button>
                </form>
            </div>
            <AuthBackground text={"TUTORMIND"} screenWidthPct={50}></AuthBackground>
        </div>
    )
}
