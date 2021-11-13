import { GET_TEACHERS_BY_CLASS_ID, GET_ALL_TEACHERS } from "../actionTypes";

export const getTeacherByClassId =
  ({ teachers }) =>
  (dispatch) => {
    dispatch({ type: GET_TEACHERS_BY_CLASS_ID, payload: teachers });
  };

export const getAllTeachers =
  ({ teachers }) =>
  (dispatch) => {
    dispatch({ type: GET_ALL_TEACHERS, payload: teachers });
  };
