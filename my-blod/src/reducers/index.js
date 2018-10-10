//合并所有reducer 并且返回
import { combineReducers } from 'redux';
import { user } from './modules/user';

export default combineReducers({user})