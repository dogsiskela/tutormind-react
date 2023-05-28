import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/actions";

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
        <div>
            Login Screen
        </div>
    )
}