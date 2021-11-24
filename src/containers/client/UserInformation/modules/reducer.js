import { FETCH_USER_LIST_JOBS_FAIL, FETCH_USER_LIST_JOBS_SUCCESS, FETCH__HISTORY__JOBS__FAIL, FETCH__HISTORY__JOBS__SUCCESS, FETCH__UPLOAD__FAIL, FETCH__UPLOAD__SUCCESS } from "./type";


const initialState = {
  detailUser:[],
  historyJobs:[],
  uploadImg: [],
  error: '',
};

const userListJobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_LIST_JOBS_SUCCESS:
      state.detailUser = payload;
      return { ...state, };
    case FETCH_USER_LIST_JOBS_FAIL:
      state.error = payload;
      return { ...state };
      case FETCH__HISTORY__JOBS__SUCCESS:
      state.historyJobs = payload;
      return { ...state, };
    case FETCH__HISTORY__JOBS__FAIL:
      state.error = payload;
      return { ...state };
      case FETCH__UPLOAD__SUCCESS:
        state.uploadImg = payload;
        return { ...state };
        case FETCH__UPLOAD__FAIL:
        state.error = payload;
        return { ...state };
        
    default:
      return state;
  }
};

export default userListJobsReducer;
