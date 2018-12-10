
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/albums';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const FETCH_ALBUMS_PENDING = 'FETCH_ALBUMS_PENDING';
export const FETCH_ALBUMS_FULFILLED = 'FETCH_ALBUMS_FULFILLED';

export const FETCH_ALBUM_INFORMATION = 'FETCH_ALBUM_INFORMATION';
export const FETCH_ALBUM_INFORMATION_FULFILLED = 'FETCH_ALBUM_INFORMATION_FULFILLED';
export const FETCH_ALBUM_INFORMATION_PENDING = 'FETCH_ALBUM_INFORMATION_PENDING';

export const FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR';
export const AUTOCOMPLETE_SELECT = 'AUTOCOMPLETE_SELECT';
export const AUTOCOMPLETE_CHANGE_VALUE = 'AUTOCOMPLETE_CHANGE_VALUE';
export const AUTOCOMPLETE_CHANGE_LIST = 'AUTOCOMPLETE_CHANGE_LIST';

export const fetchAlbumList = () => ({
    type: 'FETCH_ALBUMS',
    payload: axios.get(API_URL)
});

export const getAlbumInformation = (id) => ({
    type: FETCH_ALBUM_INFORMATION,
    payload: axios.get(API_URL +"/"+ id)
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
