import { combineReducers } from "redux"

import companiesReducer from "./companies"

import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    companiesReducer,
    loadingBar: loadingBarReducer,
})