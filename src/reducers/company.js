import {
    FETCH_COMPANY_INFORMATION,
    FETCH_COMPANY_INFORMATION_FULFILLED,
    FETCH_COMPANY_INFORMATION_PENDING
} from '../actions/companies';

const getInitialState = {
    information: {},
    fetching: false,
    fetched: false,
    error: null
};

const companyReducer = (state = getInitialState, action) => {
    switch (action.type) {
        case FETCH_COMPANY_INFORMATION: {
            state = {
                ...state,
                fetching: true
            };
            break;
        }
        case FETCH_COMPANY_INFORMATION_FULFILLED: {
            state = {
                ...state,
                information: action.payload.data,
                fetched: true
            };
            break;
        }
        case FETCH_COMPANY_INFORMATION_PENDING: {
            state = {
                ...state,
                getInitialState
            };
            break;
        }
        default:
            break;
    }
    return state;
};

export default companyReducer;