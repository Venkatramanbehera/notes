const initialNotesState = []

const noteReducer = (state = initialNotesState, action) => {
    switch(action.type){
        case 'ADD_NOTE':{
            return [...state, action.payload ]
        }
        case 'ALL_NOTES':{
            return [...state, ...action.payload]
        }
        case 'DELETE_NOTE':{
            return state.filter((data) => {
                return data._id !== action.payload._id
            })
        }
        case 'REMOVE_STATE_NOTES':{
            return initialNotesState
        }
        case 'UPDATE' : {
            return state.map((ele) => {
                if(ele._id === action.payload._id){
                    return { ...action.payload}
                }else{
                    return {...ele}
                }
            })
        }
        default : 
            return [...state]
    }
}

export default noteReducer