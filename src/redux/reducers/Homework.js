import {
  GET_STUDENT_HOMEWORK_BY_TEACHERID,
  UPLOAD_HOMEWORK,
  GET_ALL_HOMEWORK,
} from "../actionTypes";

const INITIAL_STATE = {
  getHomeworkTeacherId: null,
  homeworkList: null,
};

const homeworkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_STUDENT_HOMEWORK_BY_TEACHERID:
      return { ...state, getHomeworkTeacherId: action.payload };
    case UPLOAD_HOMEWORK: {
      let homeworks = state.getHomeworkTeacherId.filter(
        (x) => x.id !== action.payload.id
      );
      homeworks.push(action.payload);
      return { ...state, getHomeworkTeacherId: homeworks };
    }
    case GET_ALL_HOMEWORK:
      return { ...state, homeworkList: action.payload };
    default:
      return state;
  }
};

export default homeworkReducer;
