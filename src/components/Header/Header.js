import React, { useEffect } from "react";

import LogoBackground from 'assets/logo_background.svg'
import { useNavigate, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetLoginAction } from "redux/actions/actions";

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginState = useSelector(state => state.auth?.login);

    console.log(loginState)
    return <div style={{
        width: "100%",
        height: '70px',
        backgroundColor: "#E8993A",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 20px',
    }}>
        <img style={{ cursor: 'pointer' }} src={LogoBackground} height={60} width={60} onClick={() => navigate('/dashboard')}></img>
        <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {loginState?.data.role == "ROLE_TEACHER" && < button
                onClick={() => navigate('/courses/create')}
                style={{ background: 'white', color: '#E8993A', border: 'none', padding: '10px 15px', marginRight: 50, borderRadius: 100 }}>+ Create course</button>
            }
            <div style={{
                fontWeight: 800,
                fontSize: 18,
                color: 'white',
                cursor: 'pointer'
            }}
                onClick={() => navigate(`/profile/${loginState?.data.username}`)}
            >{loginState?.data.username}</div>
            <div style={{
                fontWeight: 800,
                fontSize: 14,
                color: 'white',
                cursor: 'pointer',
                marginLeft: 15
            }}
                onClick={() => {
                    dispatch(resetLoginAction());
                    navigate('/')
                }}
            >Log out</div>
        </div>
    </div >
}