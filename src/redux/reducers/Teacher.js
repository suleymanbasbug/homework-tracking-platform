import { GET_TEACHERS_BY_CLASS_ID, GET_ALL_TEACHERS } from "../actionTypes";

const INITIAL_STATE = {
  teachersByClassId: [],
  allTeachers: [],
};

const teacherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TEACHERS_BY_CLASS_ID:
      return { ...state, teachersByClassId: action.payload };
    case GET_ALL_TEACHERS:
      return { ...state, allTeachers: action.payload };
    default:
      return state;
  }
};

export default teacherReducer;
