import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import '../css/Header.css'
import LoginHeader from './LoginHeader'
import LogoutHeader from './LogoutHeader'

import { isLogin } from '../action/userAction'
import { getNotes } from '../action/noteAction'

const Header = (props) => {

    const dispatch = useDispatch()

    const isLoginValue = useSelector((state) => {
        return state.user.isLogin
    })

    useEffect(() => {
        if(localStorage.getItem('token')){
            dispatch(isLogin(true))
            dispatch(getNotes())
        }
    },[])

    return (
        <div className="header">
            <div className="header__left">
                <h2>UserAuth</h2>
            </div>
            <div className="header__right">
                <Link to="/">Home</Link>
                {
                    isLoginValue ? <LoginHeader/> : <LogoutHeader/>
                }
            </div>
        </div>
    )
}

export default Header
