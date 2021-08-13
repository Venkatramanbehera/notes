import React from 'react'
import { useDispatch } from 'react-redux'

import { Link, withRouter } from 'react-router-dom'
import { removeStateNotes } from '../action/noteAction'

import { isLogin } from '../action/userAction'

const LoginHeader = (props) => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('token')
        props.history.push('/')
        dispatch(isLogin(false))
        dispatch(removeStateNotes())
    }
    return (
        <>
            <Link to="/account">Account</Link>
            <Link to="/mynotes">My Notes</Link>
            <Link to="#" onClick={ handleLogout }>Logout</Link>
        </>
    )
}



export default withRouter(LoginHeader)
