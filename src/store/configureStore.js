import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import noteReducer from "../reducers/noteReducer";
import userReducer from "../reducers/userReducer";

const configureStore = () => {
    const store = createStore(combineReducers({
        user : userReducer,
        notes : noteReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore