import {
    FETCH_ALBUMS,
    FETCH_ALBUM_INFORMATION,
    FETCH_ALBUMS_PENDING,
    FETCH_ALBUMS_FULFILLED,
    FETCH_ALBUMS_ERROR
} from '../actions/albums';

const getInitialState = {
    list: [],
    fetching: false,
    fetched: false,
    error: null
};

const albumReducer = (state = getInitialState, action) => {
    switch (action.type) {
        case FETCH_ALBUMS_PENDING: {
            state = {
                ...state,
                fetching: true
            };
            break;
        }
        case FETCH_ALBUMS_FULFILLED: {
            state = {
                ...state,
                list: action.payload.data,
                fetching: false,
                fetched: true
            };
            break;
        }
        case FETCH_ALBUMS_ERROR: {
            state = {
                ...state,
                fetching: false,
                fetched: false,
                error: true
            };
            break;
        }
        case FETCH_ALBUMS: {
            state = {
                ...state,
                fetching: true
            };
            break;
        }
        case FETCH_ALBUM_INFORMATION: {
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

export default albumReducer;