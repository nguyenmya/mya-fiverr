import fiverrApi from "apis/fiverrApi";
import { actFetchListJobs } from "containers/client/ListJobs/module/actions";
import { ADD_JOB_IMAGE, ADD_NEW_JOB, SET_LIST_SUB_JOB } from "./types";

export const actFetchListSubJob = () => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchListSubTypeJobApi();
      dispatch({
        type: SET_LIST_SUB_JOB,
        payload: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const actAddJobImage = (jobId, formData) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.addJobImageApi(jobId, formData);
      dispatch({
        type: ADD_JOB_IMAGE,
        payload: result.data,
      });
      console.log(result);
      dispatch(actFetchListJobs());
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const actAddNewJob = (job, formData) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.addNewJobApi(job);
      dispatch({
        type: ADD_NEW_JOB,
        payload: result.data,
      });
      dispatch(actAddJobImage(result.data._id, formData));
      alert("thêm thành công");
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const actDeleteJob = (jobId) => {
  return async (dispatch) => {
    try {
      await fiverrApi.deleteJobApi(jobId);
      dispatch(actFetchListJobs());
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const actEditJob = (jobId, jobInfo, formData) => {
  return async (dispatch) => {
    try {
      await fiverrApi.editJobApi(jobId, jobInfo);
      // dispatch(actFetchListJobs());
      dispatch(actAddJobImage(jobId, formData));
      alert('thay đổi thành công');
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const actSearchJob = (jobName) => {
  return async (dispatch) => {
    try {
      await fiverrApi.searchJobApi(jobName);

    } catch (errors) {
      console.log(errors);
    }
  };
}