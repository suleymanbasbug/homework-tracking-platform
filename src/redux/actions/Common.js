import { FETCH_SUCCESS, FETCH_ERROR, FETCH_START } from "../actionTypes";
export const fetchSuccess = (message) => (dispatch) => {
  dispatch({
    type: FETCH_SUCCESS,
    payload: message || "",
  });
};

export const fetchError = (error) => (dispatch) => {
  dispatch({
    type: FETCH_ERROR,
    payload: error,
  });
};

export const fetchStart = (error) => (dispatch) => {
  dispatch({
    type: FETCH_START,
  });
};
