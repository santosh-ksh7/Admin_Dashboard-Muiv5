import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { contactsReducer, manageTeamReducer } from "./reducers";



const rootReducer = combineReducers({
    contactsReducer: contactsReducer,
    manageTeamReducer: manageTeamReducer
})



export const store = createStore(rootReducer, applyMiddleware(logger))