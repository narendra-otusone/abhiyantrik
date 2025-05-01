import axios from 'axios';
import { GET_CONTACTS } from './types';

const baseUrl = 'https://yantrik-ai-backend.vercel.app';

export const addContact = (contact) => async (dispatch) => {
    const { name, email, contact_number, company_name, service_type, comment } =
        contact;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({
        name,
        email,
        contact_number,
        company_name,
        service_type,
        comment,
    });
    try {
        const res = await axios.post(
            `${baseUrl}/api/contact`,
            body,
            config
        );
    } catch (err) {
        console.error(err.message);
    }
};



export const getContacts = () => async (dispatch) => {
    try {
        const res = await axios.get('api/contact');
        dispatch({
            type: GET_CONTACTS,
            payload: res.data,
        });
    } catch (err) {
        console.error(err.message);
    }
};



