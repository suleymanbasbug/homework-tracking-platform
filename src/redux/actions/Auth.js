import {
  STUDENT_SIGN_IN,
  SIGN_OUT,
  TEACHER_SIGN_IN,
  ADMIN_SIGN_IN,
} from "../actionTypes";
export const signIn =
  ({ user }) =>
  (dispatch) => {
    dispatch({
      type: STUDENT_SIGN_IN,
      payload: user,
    });
  };

export const teacherSignIn =
  ({ user }) =>
  (dispatch) => {
    dispatch({ type: TEACHER_SIGN_IN, payload: user });
  };

export const adminSignIn =
  ({ user }) =>
  (dispatch) => {
    dispatch({ type: ADMIN_SIGN_IN, payload: user });
  };

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
