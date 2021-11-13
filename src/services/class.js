import axios from "./axios-order";
import { fetchError, fetchStart, fetchSuccess } from "../redux/actions/Common";
import { getClassByTeacherId } from "../redux/actions/Class";

export const getClassByTeacherIdService = (teacherId) => (dispatch) => {
  let classList = null;
  dispatch(fetchStart());
  axios.get("/teachers.json").then(({ data }) => {
    let { classes } = Object.values(data).find(
      (teacher) => teacher.id == teacherId
    );
    axios
      .get("/classes.json")
      .then(({ data }) => {
        let allClass = Object.values(data);
        classList = allClass.filter((x) => classes.includes(x.id));
        if (classList) {
          dispatch(getClassByTeacherId(classList));
          dispatch(fetchSuccess());
        } else {
          dispatch(fetchError("no have class"));
        }
      })
      .catch((e) => fetchError(e.message));
  });
};
