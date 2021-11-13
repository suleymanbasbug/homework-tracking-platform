import {
  STUDENT_SIGN_IN,
  TEACHER_SIGN_IN,
  SIGN_OUT,
  ADMIN_SIGN_IN,
} from "../actionTypes";
const INITIAL_STATE = {
  auth: false,
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STUDENT_SIGN_IN:
      return { ...state, auth: true, user: action.payload };
    case TEACHER_SIGN_IN:
      return { ...state, auth: true, user: action.payload };
    case ADMIN_SIGN_IN:
      return { ...state, auth: true, user: action.payload };
    case SIGN_OUT:
      return { ...state, auth: false, user: null };
    default:
      return state;
  }
};

export default authReducer;
