import { ADD_NEW_JOB, SET_LIST_SUB_JOB } from "./types";

const { SubType } = require("_core/models/Job");

const innitialState = {
  listSubJob: [new SubType()],
};

 const JobManagementReducer = (
  state = innitialState,
  { type, payload }
) => {
  switch (type) {
    case SET_LIST_SUB_JOB: {
      state.listSubJob = payload;
      return { ...state };
    }

    case ADD_NEW_JOB: {
      return { ...state };
    }

    default:
      return state;
  }
};
 export default JobManagementReducer