import axios from "./axios-order";
import { fetchError, fetchStart, fetchSuccess } from "../redux/actions/Common";
import { getStudentByClassId, getAllStudents } from "../redux/actions/Student";

export const getStudentByClassIdService = (id) => (dispatch) => {
  let studentList = null;
  dispatch(fetchStart());
  axios
    .get("/students.json")
    .then(({ data }) => {
      studentList = Object.values(data).filter(
        (student) => student.classId === id
      );
      if (studentList) {
        dispatch(getStudentByClassId(studentList));
        dispatch(fetchSuccess());
      } else {
        dispatch(fetchError());
      }
    })
    .catch((e) => fetchError(e.message));
};

export const getAllStudentsService = () => (dispatch) => {
  let studentList = null;
  dispatch(fetchStart());
  axios
    .get("/students.json")
    .then(({ data }) => {
      studentList = Object.values(data);
      if (studentList) {
        dispatch(getAllStudents(studentList));
        dispatch(fetchSuccess());
      } else {
        dispatch(fetchError());
      }
    })
    .catch((e) => fetchError(e.message));
};
