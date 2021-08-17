import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const IsRegisterTrue  = () => {
    return( <Link to="/login" style={{ textDecoration:'none',fontSize:'25px'}}>Login</Link> )
}

const IsRegisterFalse = () => {
    return (
        <>
            <Link to="/register" style={{ textDecoration:'none',fontSize:'25px'}}>Register</Link>
            <Link to="/login" style={{ textDecoration:'none',fontSize:'25px'}}>Login</Link>
        </>
    )
}

const LogoutHeader = (props) => {

    const isRegister = useSelector((state) => {
        return state.user.isRegister
    })

    return (
        <>
            {
                isRegister ? <IsRegisterTrue/> : <IsRegisterFalse/>
            }
        </>
    )
}

export default LogoutHeader
