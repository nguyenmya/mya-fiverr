import fiverrApi from "apis/fiverrApi";
import { actFetchListSubJob } from "containers/admin/JobManagement/module/actions";
import { SET_SUB_JOB } from "./types";

export const actAddSubJob = (subJob) => {
  return async (dispatch) => {
    try {
      await fiverrApi.addSubJobApi(subJob);
      alert("thêm thành công");
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const actDeleteSubJob = (subJobId) => {
  return async (dispatch) => {
    try {
      await fiverrApi.deleteSubJobApi(subJobId);
      dispatch(actFetchListSubJob());
      alert("xóa thành công");
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const actFetchSubJob = (subjobId) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchSubTypeJobApi(subjobId);
      dispatch({
        type: SET_SUB_JOB,
        payload: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const actEditSubJob = (subjobId, subjob) => {
  return async (dispatch) => {
    try {
      await fiverrApi.editSubJobApi(subjobId, subjob);
      dispatch(actFetchListSubJob());
      alert("sửa thành công");
    } catch (errors) {
      console.log(errors);
    }
  };
};
