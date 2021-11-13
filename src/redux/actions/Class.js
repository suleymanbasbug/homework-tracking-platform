import { GET_CLASS_BY_TEACHER_ID } from "../actionTypes";

export const getClassByTeacherId = (classList) => (dispatch) => {
  dispatch({ type: GET_CLASS_BY_TEACHER_ID, payload: classList });
};
