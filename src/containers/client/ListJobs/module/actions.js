import fiverrApi from "apis/fiverrApi";
import { SET_LIST_JOBS, SET_LIST_JOBS_BY_SUB_TYPE } from "./types";

export const actFetchListJobs = (jobName = "") => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchListJobsApi(jobName);
      dispatch({
        type: SET_LIST_JOBS,
        payload: result.data,
      });
      
    } catch (errors) {
      console.log("Errors: ", errors);
    }
  };
};

export const actFetchListJobBySubType = (subTypeId) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchListJobBySubTypeApi(subTypeId);
      dispatch({
        type: SET_LIST_JOBS_BY_SUB_TYPE,
        payload: result.data,
      });
    } catch (errors) {
      console.log("Errors: ", errors);
    }
  };
}

