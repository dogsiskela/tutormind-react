import React, { useEffect, useState } from 'react';
import AuthBackground from "../LoginScreen/AuthBackground";
import "./RegisterUser.css"
import { FaMailBulk } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from 'redux/actions/actions';
import { useNavigate } from 'react-router-dom';


export default function RegisterUser() {
    const registerState = useSelector(state => state.auth?.register);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');


    function registerUser() {
        dispatch(registerAction({
            username: username,
            password: password,
            repeatPassword: confPassword,
            name: name,
            surname: surname,
            role: 'ROLE_USER'
        }))
    }

    useEffect(() => {
        if (registerState?.status == 200) {
            navigate('/login')
        }
        console.log(registerState)
    }, [registerState])


    return (
        <div className="register-user">
            <div className="register-user-main">
                <div className="login-options">
                    <FaMailBulk className="icon" />
                    <FaFacebook className="icon" />
                    <FaTwitter className="icon" />
                </div>
                <h6>OR</h6>
                <form className="">
                    <input className="form-control" placeholder="First Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="form-control" type="text" placeholder="Last Name" value={surname} onChange={(e) => setSurname(e.target.value)} />
                    <input className="form-control" type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className="form-control" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input className="form-control" placeholder="Confirm Password" type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                    <button className="btn btn-warning" onClick={(e) => {
                        e.preventDefault();
                        registerUser()
                    }}>Register</button>
                </form>
            </div>
            <AuthBackground screenWidthPct={50} text={"Register Professor"}></AuthBackground>
        </div>
    )
}
