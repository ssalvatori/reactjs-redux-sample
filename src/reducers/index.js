import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import companiesReducer from './companies';

export default combineReducers({
    companiesReducer,
    loadingBar: loadingBarReducer
});