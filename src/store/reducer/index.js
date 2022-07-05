import { combineReducers } from "redux";
import { dateReducer } from "./dateReducer";

const rootReducer = combineReducers({
    dateReducer: dateReducer,
})
export default rootReducer;