import { GET_STUDENT_BY_CLASS_ID, GET_ALL_STUDENTS } from "../actionTypes";
const INITIAL_STATE = {
  studentList: null,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_STUDENT_BY_CLASS_ID:
      return { ...state, studentList: action.payload };
    case GET_ALL_STUDENTS:
      return { ...state, studentList: action.payload };
    default:
      return state;
  }
};

export default studentReducer;
