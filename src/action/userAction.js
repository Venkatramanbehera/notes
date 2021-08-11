import axios from "axios"

export const postData = (formData,resetForm,redirectToLogin) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
            .then( response => {
                const data = response.data
                if(data.errors){
                    const errors = response.data.errors
                    dispatch(registerError(errors))
                }
                else if( data.createdAt ){
                    resetForm()
                    redirectToLogin()
                    dispatch(isRegister(true))
                }
            })
            .catch( err => alert(err))
    }
}

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

export const login = (formData,resetForm) => {
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

export const logout = () => {
    return {
        type : 'LOGOUT'
    }
}

export const getAccount = () => {
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