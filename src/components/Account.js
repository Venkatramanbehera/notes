import React from 'react'
import {  useSelector } from 'react-redux'

import '../css/Account.css'

const Account = (props) => {
    
    const userDetails = useSelector((state) => {
        return state.user.userDetails
    })

    return (
        <div className="account">
            <h2>Name - {userDetails.username}</h2>
            <h3>Email- {userDetails.email} </h3>
        </div>
    )
}

export default Account
