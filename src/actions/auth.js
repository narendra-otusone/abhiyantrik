import axios from 'axios';
import { LOGIN_SUCCESS } from './types';
import { GET_CONTACTS } from './types';
import { LOGIN_FAIL } from './types';
import { setAlert } from './alert';
import { USER_LOADED } from './types';
import { AUTH_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

const baseUrl = 'https://yantrik-ai-backend.vercel.app';
// const baseUrl = 'http://localhost:8080';


export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get(`${baseUrl}/api/auth`);
        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};


export const login = ({ email, password }) => async (dispatch) => {

    dispatch({
        type: 'LOGIN_REQUEST'
    })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post(`${baseUrl}/api/auth/login`, body, config);
        console.log(res.data);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data

        })

        dispatch(loadUser());
        const contacts = await axios.get(`${baseUrl}/api/contact`);
        dispatch({
            type: 'GET_CONTACTS',
            payload: contacts.data
        });
        console.log(contacts.data);

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL,
        });
    }
}

