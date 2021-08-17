import React from 'react'
import { useDispatch } from 'react-redux'

import { Link, withRouter } from 'react-router-dom'
import swal from 'sweetalert'
import { removeStateNotes } from '../action/noteAction'

import { isLogin } from '../action/userAction'

const LoginHeader = (props) => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('token')
        props.history.push('/')
        swal("Logout Successful!", "plz click the button!", "success")
        dispatch(isLogin(false))
        dispatch(removeStateNotes())
    }
    return (
        <>
            <Link to="/account" style={{ textDecoration:'none',fontSize:'25px'}}>Account</Link>
            <Link to="/mynotes" style={{ textDecoration:'none',fontSize:'25px'}}>My Notes</Link>
            <Link to="#" onClick={ handleLogout } style={{ textDecoration:'none',fontSize:'25px'}}>Logout</Link>
        </>
    )
}



export default withRouter(LoginHeader)
