import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import albumsReducer from './albums';
import albumReducer from './album';
import autocompleteReducer from './autocomplete';

export default combineReducers({
    albums: albumsReducer,
    autocomplete: autocompleteReducer,
    loadingBar: loadingBarReducer,
    album: albumReducer
});