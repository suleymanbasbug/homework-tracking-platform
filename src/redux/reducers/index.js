import { combineReducers } from "redux";
import authReducer from "./Auth";
import Common from "./Common";
import teacherReducer from "./Teacher";
import homeworkReducer from "./Homework";
import classReducer from "./Class";
import studentReducer from "./Student";
const rootReducer = combineReducers({
  auth: authReducer,
  common: Common,
  teachers: teacherReducer,
  homeworks: homeworkReducer,
  classes: classReducer,
  students: studentReducer,
});

export default rootReducer;
