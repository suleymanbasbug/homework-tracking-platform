import { FETCH_SUCCESS, FETCH_ERROR, FETCH_START } from "../actionTypes";

const INITIAL_STATE = {
  error: "",
  message: "",
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, error: "", message: "", loading: true };
    case FETCH_SUCCESS:
      return { ...state, error: "", loading: false, message: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, message: "", error: action.payload };
    default:
      return state;
  }
};
