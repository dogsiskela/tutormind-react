import Header from "components/Header/Header";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTutorsAction } from "redux/actions/actions";
import Card from "./Card";

export default function Dashboard() {
    const tutorsState = useSelector(state => state.app?.tutors);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTutorsAction());
    }, [])

    return (
        <div>
            <Header />
            <div style={{ fontWeight: '600', fontSize: 20, textAlign: 'center', padding: 30 }}>Tutors</div>
            <div style={{ margin: 40, display: 'flex', flexWrap: 'wrap', gap: 50 }}>
                {tutorsState?.data?.map(el =>
                    <Card
                        item={el}
                    />
                )}
            </div>
        </div>
    )
}