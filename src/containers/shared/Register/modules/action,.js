import fiverrApi from 'apis/fiverrApi';
// import {  FETCH__REGISTER__SUCCESS } from './type';

// const actRegisterSuccess = (registerUser) => ({
//   type: FETCH__REGISTER__SUCCESS,
//   payload: registerUser,
// });


export const actRegister = (value, history) => {
  console.log("valuesAcionRegister", value);
  return async (dispatch) => {
    try {
      const result = await fiverrApi.registerAPi(value);

      console.log("result ", result.data);
    } catch (error) {
      console.log("sai", error.response?.data);
    }
  };
};
