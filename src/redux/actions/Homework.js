import {
  GET_STUDENT_HOMEWORK_BY_TEACHERID,
  UPLOAD_HOMEWORK,
  GET_ALL_HOMEWORK,
} from "../actionTypes";

export const getHomeworkByTeacherId =
  ({ homeworks }) =>
  (dispatch) => {
    dispatch({ type: GET_STUDENT_HOMEWORK_BY_TEACHERID, payload: homeworks });
  };

export const uploadHomework =
  ({ homework }) =>
  (dispatch) => {
    dispatch({ type: UPLOAD_HOMEWORK, payload: homework });
  };

export const getAllHomework = (homeworkList) => (dispatch) => {
  dispatch({ type: GET_ALL_HOMEWORK, payload: homeworkList });
};
