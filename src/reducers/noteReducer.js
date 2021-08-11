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
        default : 
            return [...state]
    }
}

export default noteReducer