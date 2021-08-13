import React from 'react'
import {  useSelector } from 'react-redux'


const Account = (props) => {
    
    const userDetails = useSelector((state) => {
        return state.user.userDetails
    })

    return (
        <div>
            <h2>name - {userDetails.username}</h2>
            <h3>email- {userDetails.email} </h3>
        </div>
    )
}

export default Account
