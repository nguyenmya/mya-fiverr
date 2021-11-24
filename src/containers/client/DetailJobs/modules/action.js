import fiverrApi from "apis/fiverrApi";
import { FETCH_COMMENT_SUCCESS, FETCH_TITTLE_SUCCESS } from "../modules/type";

export const actLayCongViecChiTiet = (tittleJob) => ({
  type: FETCH_TITTLE_SUCCESS,
  payload: tittleJob,
});

export const actLayCommentSuccess = (commentJob) => ({
  type: FETCH_COMMENT_SUCCESS,
  payload: commentJob,
});

export const actGetJobTittle = (jobId) => {
  return (dispatch) => {
    fiverrApi
      .fetchDetailFiverrApi(jobId)
      .then((result) => {
        dispatch(actLayCongViecChiTiet(result.data));
      })
      .catch((error) => {
        console.log("errrhhh", error.response?.data);
      });
  };
};

export const actGetComment = (jobId) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchCommentApi(jobId);
      dispatch(actLayCommentSuccess(result.data));
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};
