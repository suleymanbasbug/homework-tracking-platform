import { GET_CLASS_BY_TEACHER_ID } from "../actionTypes";

const INITIAL_STATE = {
  classList: null,
};

const classReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CLASS_BY_TEACHER_ID:
      return { ...state, classList: action.payload };

    default:
      return state;
  }
};

export default classReducer;
