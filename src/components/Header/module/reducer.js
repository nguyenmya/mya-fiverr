import { SET_LIST_TYPE_JOBS } from "./types";

const { TypeJob } = require("_core/models/TypeJob");

const innitialState = {
  listTypeJobs: [new TypeJob()],
};

export const TypeJobsReducer = (state = innitialState, { type, payload }) => {
  switch (type) {
    case SET_LIST_TYPE_JOBS: {
      state.listTypeJobs = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
