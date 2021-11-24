import fiverrApi from 'apis/fiverrApi';
import { FETCH__EDIT__USER__FAIL, FETCH__EDIT__USER__SUCCESS, FETCH__LIST__USER__SUCCESS } from './type';

const actListUserSuccess = (userList) => ({
  type: FETCH__LIST__USER__SUCCESS,
  payload: userList,
});

export const actListUserAdmin = (nameUser = "") => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.fetchListUser(nameUser);

      console.log("result ", result);
      dispatch(actListUserSuccess(result.data));
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};

export const actDeleteUser = (idUser) => {
  return async (dispatch) => {
    try {
      const result = await fiverrApi.deleteUser(idUser);
      console.log("result ", result);
      dispatch(actListUserAdmin(result.data));
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};


export const actAddUser = (values) => {
  console.log("object, ", values)
  return async (dispatch) => {
    try {
      const response = await fiverrApi.createUserApi(values);
      console.log("valuesAction ", response.data);
      alert("Thêm Thành Công")
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
}

export const actDetailUser = (idUser) => {
  return dispatch => {
    fiverrApi.detailUserApi(idUser)
      .then(res => {
        console.log(res, 'res editmovie')
        dispatch({
          type: FETCH__EDIT__USER__SUCCESS,
          payload: res.data,
        })
      }).catch(error => {
        console.log("sai ne", error.response.data)
        dispatch({
          type: FETCH__EDIT__USER__FAIL,
          payload: error.response.data
        })
      })
  }
}


export const actEditUser = (values, idUser) => {
  console.log("idUseriii", idUser)
  console.log("values action", values)
  return async (dispatch) => {
    try {
      let res = await fiverrApi.editUserApi(idUser, values);
      console.log("values action", values)
      dispatch(actListUserAdmin())
      console.log('res', res.data)
      alert("Cập nhât thành công");

    } catch (error) {
      console.log(error.response?.date)

    }
  }
}
