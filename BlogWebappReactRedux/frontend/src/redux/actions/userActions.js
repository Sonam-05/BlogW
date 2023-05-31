import { DELETE_USER, GET_ALL_USERS, GET_SINGLE_USER, LOGIN_USER, REGISTER_USER } from "../constants/userConstants"

export const registerUser = (data) => {
    return {
        type : REGISTER_USER,
        payload : data
    }
}

export const loginUser = (data) => {
    return {
        type : LOGIN_USER,
        payload : data
    }
}

export const deleteUser = (id) => {
    return {
        type : DELETE_USER,
        payload : id
    }
}

export const getAllUsers = () => {
    return {
        type : GET_ALL_USERS,
    }
}

export const getSingleUser = (id) => {
    return {
        type : GET_SINGLE_USER,
        payload : id
    }
}