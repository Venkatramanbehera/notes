import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAccount } from '../action/userAction'

const Account = (props) => {
    const dispatch = useDispatch()

    const [ isLogin, userDetails ] = useSelector((state) => {
        return [state.user.isLogin, state.user.userDetails]
    })

    useEffect(() => {
        dispatch(getAccount())
    },[isLogin])


    return (
        <div>
            <h2>name - {userDetails.username}</h2>
            <h3>email- {userDetails.email} </h3>
        </div>
    )
}

export default Account
