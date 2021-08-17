import React from 'react'

import { Link } from 'react-router-dom'

const LogoutHeader = (props) => {
    return (
        <>
            <Link to="/register" style={{ textDecoration:'none',fontSize:'25px'}}>Register</Link>
            <Link to="/login" style={{ textDecoration:'none',fontSize:'25px'}}>Login</Link>
        </>
    )
}

export default LogoutHeader
