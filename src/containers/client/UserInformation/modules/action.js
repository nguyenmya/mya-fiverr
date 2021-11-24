import fiverrApi from "apis/fiverrApi";
import { actListUserAdmin } from "containers/admin/UserManagement/module/action";
import { FETCH_USER_LIST_JOBS_SUCCESS, FETCH__HISTORY__JOBS__SUCCESS, FETCH__UPLOAD__SUCCESS } from "./type";


export const actLayChiTietNguoiDungSucess = (detailUser) => ({
  type: FETCH_USER_LIST_JOBS_SUCCESS,
  payload: detailUser,
});

export const actLayChiTietNguoiDungFail = (error) => ({
  type: FETCH_USER_LIST_JOBS_SUCCESS,
  payload: error,
});

export const actFetchHistorySuccess = (historyJobs) => {
  return {
    type: FETCH__HISTORY__JOBS__SUCCESS,
    payload: historyJobs,
  }
}

export const actUploadImgSuccess = (uploadImg) => {
  return {
    type: FETCH__UPLOAD__SUCCESS,
    payload: uploadImg,
  }
}
export const actDetailUserInformation = (userId) => {
  console.log("object",);
  return (dispatch) => {
    fiverrApi
      .fetchUserListJobsApi(userId)
      .then(result => {
        dispatch(actLayChiTietNguoiDungSucess(result.data))
        // console.log("result", result.data)
      })
      .catch(error => { console.log("errrhhh", error.response?.data); });
  }
}




export const actEditUserInformation = (values, id, token) => {
  console.log("values action", values)
  console.log("values id", id)

  return async (dispatch) => {
    try {
      let res = await fiverrApi.fetchEditUserInformationApi(values, id, token);
      console.log("values action", values)
      dispatch(actListUserAdmin())

      console.log('res', res.data)
      alert("Cập nhât thành công");

    } catch (error) {
      console.log(error.response?.date)

    }
  }
}



export const actHistoryJobsUser = (token) => {
  return (dispatch) => {
    fiverrApi
      .fetchHistoryJobBookingApi(token)
      .then(response => {
        dispatch(actFetchHistorySuccess(response.data))
        // console.log("his,", response.data);
      })
      .catch(error => { console.log("err", error.response?.data); })
  }
}


export const actUploadImg = (formData, token) => {
  return (dispatch) => {
    fiverrApi.fetchUploadImgApi(formData, token)
      .then(response => {
        // dispatch(actUploadImgSuccess(response.data))
        console.log("result", response);
        // alert("Thêm Thành Công")
      })

      .catch(error => { console.log("errrhhh", error.response?.data); })
  }
}