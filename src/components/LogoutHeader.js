import React from 'react'

import { Link } from 'react-router-dom'

const LogoutHeader = (props) => {
    return (
        <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </>
    )
}

export default LogoutHeader
