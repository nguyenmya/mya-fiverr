import fiverrApi from "apis/fiverrApi";
import { SET_LIST_TYPE_JOBS } from "./types";

export const actFetchListTypeJobs = () => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchListTypeJobsApi();
      dispatch({
        type: SET_LIST_TYPE_JOBS,
        payload: result.data,
      });
    } catch (errors) {
      console.log("Erorrs: ", errors);
    }
  };
};
