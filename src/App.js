import React from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'

const App = (props) => {
  return (
    <div>
      <Header/>
      <Route path="/" component={ Home } exact={true} />
      <Route path="/login" component={ Login } exact={true} />
      <Route path="/register" component={ Register } exact={true} />
      <Route path="/account" component={ Account } exact={true} />
    </div>
  )
}

export default App
