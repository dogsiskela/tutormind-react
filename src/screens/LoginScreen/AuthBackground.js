import React from 'react';
import "./AuthBackground.css"

export default function AuthBackground({text, screenWidthPct}) {
    return (
        <div className="authBackground" style={{width: `${screenWidthPct}%`}}>
            <img className="image" src={require("./../../img/Group 3.png")} alt={"logo"}/>
            <h2 className="text">{text}</h2>
        </div>
    )
}
