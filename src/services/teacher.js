import axios from "./axios-order";
import { fetchError, fetchStart, fetchSuccess } from "../redux/actions/Common";
import { getTeacherByClassId, getAllTeachers } from "../redux/actions/Teacher";

export const getTeachersByClassIdService = (id) => (dispatch) => {
  let teachers = null;
  dispatch(fetchStart());
  axios.get("/teachers.json").then(({ data }) => {
    teachers = Object.values(data).filter((teacher) =>
      teacher.classes.some((x) => x == id)
    );
    if (teachers) {
      dispatch(getTeacherByClassId({ teachers }));
      dispatch(fetchSuccess());
    } else {
      dispatch(fetchError("Unsuccessful"));
    }
  });
};

export const getAllTeachersService = () => (dispatch) => {
  let teachers = null;
  dispatch(fetchStart());
  axios.get("/teachers.json").then(({ data }) => {
    teachers = Object.values(data);
    if (teachers) {
      dispatch(getAllTeachers({ teachers }));
      dispatch(fetchSuccess());
    } else {
      dispatch(fetchError("Unsuccessful"));
    }
  });
};
