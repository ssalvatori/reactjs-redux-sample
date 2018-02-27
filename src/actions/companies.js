
import axios from 'axios';
//import { showLoading, hideLoading } from 'react-redux-loading-bar'

const API_URL = "http://api.pharmviz.datagen.cl/company/"

export const FETCH_COMPANIES = 'FETCH_COMPANIES'
export const FETCH_COMPANY_INFORMATION = 'FETCH_COMPANY_INFORMATION'
export const FETCH_COMPANIES_PENDING = 'FETCH_COMPANIES_PENDING'
export const FETCH_COMPANIES_FULFILLED = 'FETCH_COMPANIES_FULFILLED'
export const FETCH_COMPANIES_ERROR = 'FETCH_COMPANIES_ERROR'

/* action creators */

export const fetchCompanyList = () => ({
    type: 'FETCH_COMPANIES',
    payload: axios.get(API_URL)
})

export function getCompanyInformation(id) {
    return { 
        type: FETCH_COMPANY_INFORMATION,
        id 
    }
}