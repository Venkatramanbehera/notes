const initialUserState ={ 
                            isRegister : false,
                            isLogin : false,
                            userDetails : {}, 
                            error : {}
                        }

const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case 'REGISTER_ERROR': {
            return { ...state,error : action.payload} 
        }
        case 'IS_REGISTER' : {
            return { ...state,isRegister: action.payload, error : {}}
        }
        case 'IS_LOGIN' : {
            return { ...state, isLogin: action.payload }
        }
        case 'USER_ACCOUNT' : {
            return { ...state, userDetails: action.payload}
        }
        default :
            return {...state}
    }
}

export default userReducer