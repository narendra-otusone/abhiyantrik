import { LOGIN_FAIL, LOGIN_SUCCESS, USER_LOADED, AUTH_ERROR, LOGIN_REQUEST } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
            };

        case LOGIN_SUCCESS:
            localStorage.setItem('token', String(payload.token));
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            };

        case LOGIN_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                token: null,
            }

        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}