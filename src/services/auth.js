import axios from "./axios-order";
import { fetchError, fetchStart, fetchSuccess } from "../redux/actions/Common";
import { signIn, teacherSignIn } from "../redux/actions/Auth";

export const studentLoginService =
  ({ email, password }) =>
  (dispatch) => {
    let user = null;
    dispatch(fetchStart());
    axios.get("/students.json").then(({ data }) => {
      user = Object.values(data).find(
        (user) => user.email == email && user.password == password
      );
      if (user) {
        dispatch(signIn({ user }));
        dispatch(fetchSuccess());
      } else {
        dispatch(fetchError("Invalid email or password"));
      }
    });
  };

export const teacherLoginService =
  ({ email, password }) =>
  (dispatch) => {
    let user = null;
    dispatch(fetchStart());
    axios.get("/teachers.json").then(({ data }) => {
      user = Object.values(data).find(
        (user) => user.email == email && user.password == password
      );
      if (user) {
        dispatch(teacherSignIn({ user }));
        dispatch(fetchSuccess());
      } else {
        dispatch(fetchError("Invalid email or password"));
      }
    });
  };

export const adminLoginService =
  ({ email, password }) =>
  (dispatch) => {
    let user = null;
    dispatch(fetchStart());
    axios.get("/admins.json").then(({ data }) => {
      user = Object.values(data).find(
        (user) => user.email == email && user.password == password
      );
      if (user) {
        dispatch(signIn({ user }));
        dispatch(fetchSuccess());
      } else {
        dispatch(fetchError("Invalid email or password"));
      }
    });
  };
