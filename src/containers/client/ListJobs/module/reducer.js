import { Job } from "_core/models/Job";
import { SET_LIST_JOBS, SET_LIST_JOBS_BY_SUB_TYPE } from "./types";

const initialState = {
  listJobs: [new Job()],
};

export const JobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIST_JOBS: {
      state.listJobs = payload;
      return { ...state };
    }
    case SET_LIST_JOBS_BY_SUB_TYPE: {
      state.listJobs = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
