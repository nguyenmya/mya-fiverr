import { TypeJob } from "_core/models/TypeJob";
import { SET_TYPE_JOB_DETAIL } from "./types";

const initialStateJobDetail = {
  jobDetail: new TypeJob(),
};

export const JobDetailReducer = (
  state = initialStateJobDetail,
  { type, payload }
) => {
  switch (type) {
    case SET_TYPE_JOB_DETAIL: {
      state.jobDetail = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

