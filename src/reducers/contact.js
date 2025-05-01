import { GET_CONTACTS } from "../actions/types";

const initialState = {
    contacts: [],
    loading: true,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: payload,
                loading: false
            };
        default:
            return state;
    }
}