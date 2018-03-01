import {
    FETCH_COMPANIES,
    FETCH_COMPANY_INFORMATION,
    FETCH_COMPANIES_PENDING,
    FETCH_COMPANIES_FULFILLED,
    FETCH_COMPANIES_ERROR
} from '../actions/companies';

const getInitialState = {
    companies: [],
    autocomplete: {
        value: ''
    },
    fetching: false,
    fetched: false,
    error: null
};

const companyReducer = (state = getInitialState, action) => {
    switch (action.type) {
        case FETCH_COMPANIES_PENDING: {
            state = {
                ...state,
                fetching: true
            };
            break;
        }
        case FETCH_COMPANIES_FULFILLED: {
            state = {
                ...state,
                fetching: false,
                fetched: true
            };
            break;
        }
        case FETCH_COMPANIES_ERROR: {
            state = {
                ...state,
                fetching: false,
                fetched: false,
                error: true
            };
            break;
        }
        case FETCH_COMPANIES: {
            state = {
                ...state,
                fetching: true
            };
            break;
        }
        case FETCH_COMPANY_INFORMATION: {
            state = {
                ...state,
                fetching: true
            };
            break;
        }
        default:
            break;
    }
    return state;
};

export default companyReducer;