import axios from "axios"
import { asyncGetNotes } from "./noteAction"
import swal from "sweetalert"

export const isRegister = (bool) => {
    return {
        type : "IS_REGISTER",
        payload : bool
    }
}

export const registerError = (errors) => {
    return {
        type : "REGISTER_ERROR",
        payload : errors
    }
}

export const asynclogin = (formData,resetForm,redirectToHome) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
            .then((response) => {
                const data = response.data
                if(data.errors){
                    dispatch(registerError(data.errors))
                }else if(data.token){
                    localStorage.setItem('token',data.token)
                    resetForm()
                    dispatch(isLogin(true))
                    dispatch(asyncGetNotes())
                    dispatch(asyncgetAccount())
                    swal("Login Successful!", "plz click the button!", "success")
                    redirectToHome()
                }
            })
            .catch( (err) => {
                console.log(err);
            })
    }
}

export const isLogin = (bool) => {
    return {
        type : 'IS_LOGIN',
        payload : bool
    }
}


export const asyncgetAccount = () => {
    return (dispatch, getState) => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account',
        {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const data = response.data
                const userDetails = {
                    username : data.username,
                    email : data.email
                }
                dispatch(userAccount(userDetails))
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const userAccount = (userDetails) => {
    return {
        type : "USER_ACCOUNT",
        payload : userDetails
    }
}