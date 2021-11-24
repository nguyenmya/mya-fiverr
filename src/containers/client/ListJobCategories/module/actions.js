import fiverrApi from "apis/fiverrApi";
import { SET_TYPE_JOB_DETAIL } from "./types";

export const actFetchTypeJobDetail = (typeId) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchTypeJobDetailApi(typeId);
      dispatch({
        type: SET_TYPE_JOB_DETAIL,
        payload: result.data,
      });
    } catch (errors) {
      console.log("Errors ", errors);
    }
  };
};

