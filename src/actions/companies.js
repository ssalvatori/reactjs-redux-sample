
import axios from 'axios';

const API_URL = '';

export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const FETCH_COMPANY_INFORMATION = 'FETCH_COMPANY_INFORMATION';
export const FETCH_COMPANIES_PENDING = 'FETCH_COMPANIES_PENDING';
export const FETCH_COMPANIES_FULFILLED = 'FETCH_COMPANIES_FULFILLED';
export const FETCH_COMPANIES_ERROR = 'FETCH_COMPANIES_ERROR';

export const fetchCompanyList = () => ({
    type: 'FETCH_COMPANIES',
    payload: axios.get(API_URL)
});

export const getCompanyInformation = (id) => ({
    type: FETCH_COMPANY_INFORMATION,
    id
});