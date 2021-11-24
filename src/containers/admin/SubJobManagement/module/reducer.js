import { SubTypeJobs } from "_core/models/TypeJob";
import { SET_SUB_JOB } from "./types";

const initialState = {
  subjob: new SubTypeJobs(),
};

export const SubJobManagementReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_SUB_JOB: {
      state.subjob = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
