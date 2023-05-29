import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, loginAction } from "../../redux/actions/actions";

export default function LoginScreen() {
    const loginState = useSelector(state => state.auth?.login);

    const dispatch = useDispatch();

    useEffect(() => {
        if (loginState?.data?.token) {
            getAuthed(loginState.data.token)
        }
    }, [loginState])



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