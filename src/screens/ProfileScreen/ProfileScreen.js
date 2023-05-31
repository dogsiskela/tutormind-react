import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserAction } from "../../redux/actions/actions";
import Header from "../../components/Header/Header";
import Profile from 'assets/profile.svg';

export default function ProfileScreen() {
    const { username } = useParams();

    const userProfileState = useSelector(state => state.app?.userProfile);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(userProfileState)
    }, [userProfileState])

    useEffect(() => {
        dispatch(getUserAction(username))
    }, [])

    return (userProfileState?.data && <div>
        <Header />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: '600',
            marginTop: '30px',
            marginLeft: '30px'
        }}>
            <img src={Profile} height={100} width={100} />
            <div>{userProfileState.data.username}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{
                textAlign: 'start',
                marginTop: '50px',
            }}
            >
                <div style={{
                    fontSize: 24,
                    fontWeight: 600,
                }}>Details</div>
                <div style={{
                    textAlign: 'start',
                    backgroundColor: "#D9D9D9",
                    width: '500px',
                    borderRadius: '10px',
                    padding: '15px',

                }}>
                    <div style={{ fontWeight: '600' }}>First name:</div>
                    <div>{userProfileState.data.name}</div>
                    <div style={{ fontWeight: '600', marginTop: 30 }}>Last name:</div>
                    <div>{userProfileState.data.surname}</div>
                    <div style={{ fontWeight: '600', marginTop: 30 }}>Description: </div>
                    <div>{userProfileState.data.description}</div>
                </div>
            </div>
            <div style={{
                textAlign: 'start',
                marginTop: '50px',
                marginLeft: '100px'
            }}
            >
                <div style={{
                    fontSize: 24,
                    fontWeight: 600,
                }}>Courses</div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    textAlign: 'start',
                    backgroundColor: "#D9D9D9",
                    width: '500px',
                    borderRadius: '10px',
                    padding: '15px',

                }}>
                    {
                        userProfileState.data?.courses?.map(el => {
                            return <div style={{ background: 'white', padding: '5px 10px', margin: '20px 5px', borderRadius: 15, width: 'min-content', whiteSpace: 'nowrap' }}>
                                <div style={{ fontWeight: 600 }}>
                                    {el.name}
                                </div>
                                <div>
                                    {el.price} MKD
                                </div>
                                <div>
                                    {el.length} min
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div>
                <button
                    style={{ background: '#E8993A', color: 'white', border: 'none', padding: '10px 15px', borderRadius: 100 }}>Schedule class</button>
            </div>

        </div>
    </div >);

}