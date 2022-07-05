import {
    GET_HOLIDAY_REQUEST,
    GET_HOLIDAY_SUCCESS,
    GET_HOLIDAY_FAIL,
} from "../constants";

const initialState = []
export const dateReducer = (state = initialState, action) => { 
    switch (action.type) {
        case GET_HOLIDAY_REQUEST:
            return state;
        case GET_HOLIDAY_SUCCESS:
            return action.payload;
        case GET_HOLIDAY_FAIL:
            return action.payload;
        default:
            return state;
    }
}  