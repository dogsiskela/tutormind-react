import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourseAction, getUserAction, loginAction, resetLoginAction } from "../../redux/actions/actions";

import './AuthBackground.css'
import './LoginScreen.css'
import { useNavigate } from "react-router-dom";

export default function CreateCourse() {
    const loginState = useSelector(state => state.auth?.login);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [length, setLength] = useState(0);
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <div className="login">
            <div className="login-main-hehe">
                <form className="login-form-hehe">
                    <h5>Create new course</h5>
                    <div className="label-input">
                        <label htmlFor="username" className="form-label">Name</label>
                        <input id="username" type="text" className="form-control-hehe" value={name} onChange={(e) => setName(e.target.value)} />
                        {/*</div>*/}
                        {/*<div className="label-input">*/}
                        <label htmlFor="password" className="form-label">Description</label>
                        <input className="form-control-hehe" value={description} onChange={(e) => setDescription(e.target.value)} />
                        {/*</div>*/}
                        <label htmlFor="username" className="form-label">Price (MKD)</label>
                        <input id="username" type="text" className="form-control-hehe" value={price} onChange={(e) => setPrice(e.target.value)} />
                        {/*</div>*/}
                        {/*<div className="label-input">*/}
                        <label htmlFor="password" className="form-label">Length (minutes)</label>
                        <input className="form-control-hehe" value={length} onChange={(e) => setLength(e.target.value)} />
                    </div>
                    <button className="btn btn-warning" onClick={(e) => {
                        e.preventDefault();
                        dispatch(createCourseAction({
                            name: name,
                            description: description,
                            price: Number(price),
                            length: Number(length),
                            category: 1,
                            username: loginState.data.username,
                        }));
                        navigate('/dashboard');
                    }}>Create course</button>
                </form>
            </div>
        </div >
    )
}
