
import axios from 'axios';

const API_URL = '';

export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const FETCH_COMPANY_INFORMATION = 'FETCH_COMPANY_INFORMATION';
export const FETCH_COMPANY_INFORMATION_FULFILLED = 'FETCH_COMPANY_INFORMATION_FULFILLED';
export const FETCH_COMPANIES_PENDING = 'FETCH_COMPANIES_PENDING';
export const FETCH_COMPANIES_FULFILLED = 'FETCH_COMPANIES_FULFILLED';
export const FETCH_COMPANIES_ERROR = 'FETCH_COMPANIES_ERROR';
export const AUTOCOMPLETE_SELECT = 'AUTOCOMPLETE_SELECT';
export const AUTOCOMPLETE_CHANGE_VALUE = 'AUTOCOMPLETE_CHANGE_VALUE';
export const AUTOCOMPLETE_CHANGE_LIST = 'AUTOCOMPLETE_CHANGE_LIST';
export const FETCH_COMPANY_INFORMATION_PENDING = 'FETCH_COMPANY_INFORMATION_PENDING';

export const fetchCompanyList = () => ({
    type: 'FETCH_COMPANIES',
    payload: axios.get(API_URL)
});

export const getCompanyInformation = (id) => ({
    type: FETCH_COMPANY_INFORMATION,
    payload: axios.get(API_URL + id)
});

export const autocompleteSelect = (item) => ({
    type: AUTOCOMPLETE_SELECT,
    item
});

export const autocompleteChangeValue = (value) => ({
    type: AUTOCOMPLETE_CHANGE_VALUE,
    value
});

export const autocompleteChangeList = (items) => ({
    type: AUTOCOMPLETE_CHANGE_LIST,
    items
});
