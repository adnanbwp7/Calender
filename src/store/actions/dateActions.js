import {
    GET_HOLIDAY_REQUEST,
    GET_HOLIDAY_SUCCESS,
    GET_HOLIDAY_FAIL,
} from "../constants";
import axios from "axios";

export const dateActions = (country ) => async (dispatch) => {
    try {
        dispatch({ type: GET_HOLIDAY_REQUEST });
        const response = await axios.get(
            `https://calendarific.com/api/v2/holidays?api_key=c651398bfae03af96838494da324048e473ede99&country=${country}&year=2022`
        ); 
        dispatch({ type: GET_HOLIDAY_SUCCESS, payload: response.data.response.holidays });
    } catch (error) {
        dispatch({
            type: GET_HOLIDAY_FAIL,
            payload:
                error.data && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};