import { takeEvery, put } from 'redux-saga/effects';
import { DELETE_USER, GET_ALL_USERS, GET_SINGLE_USER, LOGIN_USER, REGISTER_USER, SET_GET_ALL_USERS, SET_GET_SINGLE_USER, SET_LOGIN_USER, SET_REGISTER_USER, UPDATE_USER } from '../constants/userConstants';
import { message } from 'antd';
import axios from 'axios'

// function* registerUserSaga(actions) {
//     try {
//         const res = yield axios.post('/api/v1/user/register', actions.payload);
//         if (res?.data.success) {
//             message.success(res?.data.message);
//             yield put({type : SET_REGISTER_USER, payload : res.data})
//         } else {
//             message.error(res?.data.message)
//         }
//     } catch (error) {
//         message.error('Something went wrong in registerUserSaga')
//     }
// }

function* loginUserSaga(actions) {
    try {
        const res = yield axios.post('/api/v1/user/login', actions.payload);
        if (res?.data.success) {
            // console.log(res.data)
            message.success(res.data.message);
            localStorage.setItem("userToken", res.data.token);
            yield getSingleUserSaga(res.data._id);
            yield put({type : SET_LOGIN_USER, payload : res.data});
        } else {
            message.error(res?.data.message)
        }
    } catch (error) {
        message.error('Something went wrong in registerUserSaga')
    }
}

function* updateUserSaga(actions) {
    try {
        const res = yield axios.post(`/api/v1/user/update-user/${actions.payload}`);
        if (res?.data.success) {
            message.success(res.data.message);
        } else {
            message.error(res?.data.message)
        }
    } catch (error) {
        message.error('Something went wrong in registerUserSaga')
    }
}

function* deleteUserSaga(actions) {
    try {
        const res = yield axios.post(`/api/v1/user/delete-user/${actions.payload}`);
        if (res?.data.success) {
            message.success(res.data.message);
        } else {
            message.error(res?.data.message)
        }
    } catch (error) {
        message.error('Something went wrong in registerUserSaga')
    }
}

function* getAllUsersSaga() {
    try {
        const res = yield axios.get('/api/v1/user/get-all-users');
        if (res?.data.success) {
            message.success(res.data.message);
            yield put({ type: SET_GET_ALL_USERS, payload: res.data })
        } else {
            message.error(res?.data.message)
        }
    } catch (error) {
        message.error('Something went wrong in registerUserSaga')
    }
}

function* getSingleUserSaga(actions) {
    try {
        const res = yield axios.get(`/api/v1/user/get-single-user/${actions.payload}`);
        if (res?.data.success) {
            message.success(res.data.message);
            yield put({ type: SET_GET_SINGLE_USER, payload: res.data })
        } else {
            message.error(res?.data.message)
        }
    } catch (error) {
        message.error('Something went wrong in registerUserSaga')
    }
}

function* userSaga() {
    // yield takeEvery(REGISTER_USER, registerUserSaga);
    yield takeEvery(LOGIN_USER, loginUserSaga);
    yield takeEvery(UPDATE_USER, updateUserSaga);
    yield takeEvery(DELETE_USER, deleteUserSaga);
    yield takeEvery(GET_ALL_USERS, getAllUsersSaga);
    yield takeEvery(GET_SINGLE_USER, getSingleUserSaga);
}

export default userSaga;