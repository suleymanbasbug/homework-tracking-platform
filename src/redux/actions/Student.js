import { GET_STUDENT_BY_CLASS_ID, GET_ALL_STUDENTS } from "../actionTypes";

export const getStudentByClassId = (studentList) => (dispatch) => {
  dispatch({ type: GET_STUDENT_BY_CLASS_ID, payload: studentList });
};

export const getAllStudents = (studentList) => (dispatch) => {
  dispatch({ type: GET_ALL_STUDENTS, payload: studentList });
};
