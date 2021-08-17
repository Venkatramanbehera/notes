import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import configureStore from './store/configureStore';

import { Provider } from 'react-redux';
import { getAccount, isLogin } from './action/userAction';
import { getNotes } from './action/noteAction';

const store = configureStore()
console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState())
})

if(localStorage.getItem('token')){
    store.dispatch(isLogin(true))
    store.dispatch(getNotes())
    store.dispatch(getAccount())
}


ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'))