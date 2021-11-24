import { Job } from "_core/models/Job";
import {
  FETCH_COMMENT_FAIL,
  FETCH_COMMENT_SUCCESS,
  FETCH_TITTLE_FAIL,
  FETCH_TITTLE_SUCCESS,
} from "./type";

const initialState = {
  tittleJob: new Job(),
  commentJob: [],
  error: "",
};

const tittleJobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TITTLE_SUCCESS:
      state.tittleJob = payload;
      return { ...state };
    case FETCH_TITTLE_FAIL:
      state.error = payload;
      return { ...state };
    case FETCH_COMMENT_SUCCESS:
      state.commentJob = payload;
      return { ...state };
    case FETCH_COMMENT_FAIL:
      state.error = payload;
      return { ...state };
    default:
      return state;
  }
};

export default tittleJobReducer;
