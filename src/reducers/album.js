import {
    FETCH_ALBUM_INFORMATION,
    FETCH_ALBUM_INFORMATION_FULFILLED,
    FETCH_ALBUM_INFORMATION_PENDING
} from '../actions/albums';

const getInitialState = {
    information: {},
    fetching: false,
    fetched: false,
    error: null
};

const albumReducer = (state = getInitialState, action) => {
    switch (action.type) {
        case FETCH_ALBUM_INFORMATION: {
            state = {
                ...state,
                fetching: true
            };
            break;
        }
        case FETCH_ALBUM_INFORMATION_FULFILLED: {
            state = {
                ...state,
                information: action.payload.data,
                fetched: true
            };
            break;
        }
        case FETCH_ALBUM_INFORMATION_PENDING: {
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

export default albumReducer;