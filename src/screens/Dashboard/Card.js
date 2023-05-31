import React from "react";
import Profile from 'assets/profile.png';
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
    const navigate = useNavigate();

    return (<div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: 15,
        cursor: 'pointer',
        background: '#e1e2e366',
        position: 'relative',
        alignItems: 'center',
        padding: 20
    }}>
        <img src={Profile} height={150} width={150} onClick={() => navigate(`/profile/${item.username}`)}></img>
        <div style={{ fontSize: 20, fontWeight: '600', paddingTop: 10 }}>
            {item.username}
        </div>
        <div style={{ fontSize: 14, fontWeight: '600', paddingTop: 10 }}>
            Courses:
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                item.courses.map(el => {
                    return <div style={{ background: '#E8993A', padding: '5px 10px', margin: '20px 5px', borderRadius: 100, width: 'min-content', whiteSpace: 'nowrap', fontSize: 12 }}>
                        {el.name}
                    </div>
                })
            }
            {
                !item.courses || item.courses.length == 0 && <div style={{ position: 'relative', bottom: 10, fontSize: 10, fontWeight: '200', marginTop: '30px' }}>
                    No courses yet
                </div>
            }
        </div>
        <div style={{ position: 'relative', bottom: 10, fontSize: 14, fontWeight: '200', marginTop: '15px' }}>
            Click to see profile
        </div>
    </div >)
}