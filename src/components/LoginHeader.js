import React from 'react'
import { useDispatch } from 'react-redux'

import { Link, withRouter } from 'react-router-dom'

import { logout } from '../action/userAction'

const LoginHeader = (props) => {

    const dispatch = useDispatch()

    const redirectToHome = () => {
        props.history.push('/home')
    }

    const handleLogout = () => {
        dispatch(logout(redirectToHome))
    }
    return (
        <>
            <Link to="/account">Account</Link>
            <Link to="/mynotes">My Notes</Link>
            <Link to="/logout" onClick={ handleLogout }>Logout</Link>
        </>
    )
}



export default withRouter(LoginHeader)
