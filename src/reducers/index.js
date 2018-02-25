import { combineReducers } from "redux"

import companyReducer from "./companies"

export default combineReducers({
    companies: companyReducer
})