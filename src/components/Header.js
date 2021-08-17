import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import '../css/Header.css'
import LoginHeader from './LoginHeader'
import LogoutHeader from './LogoutHeader'

const Header = (props) => {

    const isLoginValue = useSelector((state) => {
        return state.user.isLogin
    })

    return (
        <div className="header">
            <div className="header__left">
                <h2>UserAuth</h2>
            </div>
            <div className="header__right">
                <Link to="/" style={{ textDecoration:'none',fontSize:'25px'}}>Home</Link>
                {
                    isLoginValue ? <LoginHeader/> : <LogoutHeader/>
                }
            </div>
        </div>
    )
}

export default Header
