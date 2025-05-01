import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import contact from './contact';

export default combineReducers({ auth, alert, contact });