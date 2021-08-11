import React from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import { logout } from '../action/userAction'

const LoginHeader = (props) => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <>
            <Link to="/account">Account</Link>
            <Link to="/logout" onClick={ handleLogout }>Logout</Link>
        </>
    )
}

export default LoginHeader
