import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import MyNotes from './components/MyNotes'
import { useDispatch } from 'react-redux'
import { getAccount, isLogin } from './action/userAction'
import { getNotes } from './action/noteAction'

const App = (props) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      dispatch(isLogin(true))
      dispatch(getNotes())
      dispatch(getAccount())
    }
  },[dispatch])

  return (
    <div>
      <Header/>
      <Route path="/" component={ Home } exact={true} />
      <Route path="/login" component={ Login } exact={true} />
      <Route path="/mynotes" component={ MyNotes } exact={true} />
      <Route path="/register" component={ Register } exact={true} />
      <Route path="/account" component={ Account } exact={true} />
    </div>
  )
}

export default App
