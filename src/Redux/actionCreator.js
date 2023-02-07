import { createUser, deleteUser, editUser, updateRole } from "./actionTypes"


export const createNewUser = (data) => {
    return {
        type: createUser,
        payload: data
    }
}

export const editExistngUser = (data) => {
    return {
        type: editUser,
        payload: data
    }
}

export const deleteExistingUser = (data) => {
    return {
        type: deleteUser,
        payload: data
    }
}

export const updateUserRole = (data) => {
    return{
        type: updateRole,
        payload: data
    }
}