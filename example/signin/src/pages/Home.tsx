import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../redux/modules/auth';
import { RootState } from '../types';

export default function Home() {
    const dispatch = useDispatch();
    const token = useSelector<RootState, string | null>(
        (state) => state.auth.token
    )

    if (token === null) {
        return <Redirect to="/signin" />;
    }
    return (
        <div>
            <h1>Home</h1>
            <p>기본 페이지라고 할 수 있다.</p>
            <button onClick={click}>logout</button>
        </div>
    );

    function click() {
        dispatch(logout());
    }
}
