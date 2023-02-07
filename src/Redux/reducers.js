import { mockDataContacts, mockDataTeam } from "../AppData/mockData";
import { createUser, deleteUser, editUser, updateRole } from "./actionTypes";


const initialState = {
    usersInContactSection: mockDataContacts,
    usersInManageTeam: mockDataTeam
}


export const contactsReducer = (state = initialState, action) => {
    switch(action.type){
        case createUser: return{
            ...state,
            usersInContactSection: [...state.usersInContactSection, {...action.payload, id: state.usersInContactSection.length + 1}]
        }
        case deleteUser: return{
            ...state,
            usersInContactSection: state.usersInContactSection.filter((ele) => ele.id !== action.payload)
        }
        case editUser: return{
            ...state,
            usersInContactSection: state.usersInContactSection.map((ele) => ele.id === action.payload.id ? action.payload : ele)
        }
        default: return state
    }
}


export const manageTeamReducer = (state=initialState, action) => {
    switch(action.type){
        case updateRole: return{
            ...state,
            usersInManageTeam: state.usersInManageTeam.map((ele) => ele.id === action.payload.id ? {...ele, access: action.payload.access} : ele)
        }
        default: return state
    }
}