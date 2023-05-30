import React from "react";

import LogoBackground from 'assets/logo_background.svg'
import { useNavigate, useNavigation } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return <div style={{
        width: "100%",
        height: '70px',
        backgroundColor: "#E8993A",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 20px',
    }}>
        <img style={{ cursor: 'pointer' }} src={LogoBackground} height={60} width={60} onClick={() => navigate('/')}></img>
    </div >
}