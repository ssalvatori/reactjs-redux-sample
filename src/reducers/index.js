import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import companiesReducer from './companies';
import companyReducer from './company';
import autocompleteReducer from './autocomplete';

export default combineReducers({
    companies: companiesReducer,
    autocomplete: autocompleteReducer,
    loadingBar: loadingBarReducer,
    company: companyReducer
});