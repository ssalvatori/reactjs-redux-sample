import { FETCH_COMPANIES, FETCH_COMPANY_INFORMATION } from '../actions/companies'

const companyReducer = (state = {
    list: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) => {
    switch (action.type) {
        case FETCH_COMPANIES: {
            state = {
                ...state,
                fetching: true,
            }
            break
        }
        case FETCH_COMPANY_INFORMATION: {
            state = {
                ...state,
                fetching: true,
            }
            break
        }
        default:
            break
    }

    return state
};

export default companyReducer