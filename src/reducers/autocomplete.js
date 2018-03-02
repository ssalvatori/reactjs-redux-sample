import {
    FETCH_COMPANIES_FULFILLED,
    AUTOCOMPLETE_SELECT,
    AUTOCOMPLETE_CHANGE_VALUE,
    AUTOCOMPLETE_CHANGE_LIST
} from '../actions/companies';

const getInitialState = {
    items: [],
    value: ''
};

const autocompleteReducer = (state = getInitialState, action) => {
    switch (action.type) {
        case FETCH_COMPANIES_FULFILLED: {
            state = {
                ...state,
                items: action.payload.data
            };
            break;
        }
        case AUTOCOMPLETE_SELECT: {
            state = {
                ...state,
                value: action.item
            };
            break;
        }
        case AUTOCOMPLETE_CHANGE_VALUE: {
            state = {
                ...state,
                value: action.value
            };
            break;
        }
        case AUTOCOMPLETE_CHANGE_LIST: {
            state = {
                ...state,
                items: action.items
            };
            break;
        }
        default:
            break;
    }
    return state;
};

export default autocompleteReducer;