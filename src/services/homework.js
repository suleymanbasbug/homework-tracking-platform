import axios from "./axios-order";
import { fetchError, fetchStart, fetchSuccess } from "../redux/actions/Common";
import {
  getHomeworkByTeacherId,
  uploadHomework,
  getAllHomework,
} from "../redux/actions/Homework";
let homeworks = null;

export const getHomeworkByTeacherIdService =
  (teacherId, studentId) => (dispatch) => {
    dispatch(fetchStart());
    axios.get("/homeworks.json").then(({ data }) => {
      homeworks = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        homeworks[i].name = Object.keys(data)[i];
      }
      homeworks = homeworks.filter(
        (homework) =>
          homework.teacherId == teacherId &&
          homework.studentIds.includes(studentId)
      );
      if (homeworks) {
        dispatch(getHomeworkByTeacherId({ homeworks }));
        dispatch(fetchSuccess());
      } else {
        dispatch(fetchError());
      }
    });
  };
export const uploadHomeworkService = (studentId, homework) => (dispatch) => {
  dispatch(fetchStart());
  if (homework.completedId) {
    homework.completedId.push(studentId);
  } else {
    homework.completedId = [studentId];
  }
  axios
    .put(`/homeworks/${homework.name}.json`, homework)
    .then(({ data }) => console.log(data))
    .catch((e) => fetchError());
  dispatch(fetchSuccess());
  dispatch(uploadHomework({ homework }));
};

export const addHomeworkForClassService =
  (teacherId, studentList, title, description) => (dispatch) => {
    let studenIds = [];
    studentList.forEach((student) => {
      studenIds.push(student.id);
    });
    let homework = {
      teacherId: teacherId,
      studentIds: studenIds,
      title: title,
      description: description,
      id: Date.now(),
    };
    console.log(homework);
    dispatch(fetchStart());
    axios
      .post(`/homeworks.json`, homework)
      .then(({ data }) => console.log(data))
      .catch((e) => fetchError());
    dispatch(fetchSuccess());
  };

export const addHomeworkforStudentService =
  (teacherId, studentId, title, description) => (dispatch) => {
    let homework = {
      teacherId: teacherId,
      studentIds: [studentId],
      title: title,
      description: description,
      id: Date.now(),
    };
    dispatch(fetchStart());
    axios
      .post(`/homeworks.json`, homework)
      .then(({ data }) => console.log(data))
      .catch((e) => fetchError());
    dispatch(fetchSuccess());
  };

export const getAllHomeworksService = () => (dispatch) => {
  dispatch(fetchStart());
  axios.get("/homeworks.json").then(({ data }) => {
    homeworks = Object.values(data);
    if (homeworks) {
      dispatch(getAllHomework(homeworks));
      dispatch(fetchSuccess());
    } else {
      dispatch(fetchError());
    }
  });
};
