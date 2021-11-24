import { BOOKIING_JOB_FAIL, BOOKIING_JOB_SUCCESS } from "./type";
const initialState = {
  bookingJob:null,
  error: '',
};

const bookingJobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOKIING_JOB_SUCCESS:
      state.bookingJob = [];
      return { ...state, };
    case BOOKIING_JOB_FAIL:
      state.error = payload;
      return { ...state };
    default:
      return state;
  }
};

export default bookingJobReducer;
