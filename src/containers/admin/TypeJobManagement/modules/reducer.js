import { TypeJob } from "_core/models/TypeJob";
import {
  FETCH__ADD__JOB__TYPE__FAIL,
  FETCH__ADD__JOB__TYPE__SUCCESS,
  FETCH__DETAIL__TYPE__JOB__FAIL,
  FETCH__DETAIL__TYPE__JOB__SUCCESS,
  FETCH__LIST__TYPE__JOBS__FAIL,
  FETCH__LIST__TYPE__JOBS__SUCCESS,
} from "./type";

const initialState = {
  listTypeJob: [],
  errors: "",
  addJobType: [],
  detailTypeJob: [new TypeJob()],
};

const typeJobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH__LIST__TYPE__JOBS__SUCCESS:
      state.listTypeJob = payload;
      return { ...state };
    case FETCH__LIST__TYPE__JOBS__FAIL:
      state.error = payload;
      return { ...state };
    case FETCH__ADD__JOB__TYPE__SUCCESS:
      state.addJobType = payload;
      return { ...state };
    case FETCH__ADD__JOB__TYPE__FAIL:
      state.error = payload;
      return { ...state };
    case FETCH__DETAIL__TYPE__JOB__SUCCESS:
      state.detailTypeJob = payload;
      return { ...state };
    case FETCH__DETAIL__TYPE__JOB__FAIL:
      state.errors = payload;
      return { ...state };
    default:
      return state;
  }
};
export default typeJobsReducer;
