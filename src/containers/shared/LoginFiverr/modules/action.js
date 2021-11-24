import fiverrApi from 'apis/fiverrApi';
import { LOGIN_FAIL,  LOGIN_SUCCESS, LOGOUT } from '../modules/type';

const actLoginSuccess = currentUser => ({
  type: LOGIN_SUCCESS,
  payload: currentUser,
});

const actLoginFail = error => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const actLogin = (userLogin, history) => {
  console.log("user", userLogin);
  return dispatch => {
    fiverrApi
    .loginApi(userLogin)
      .then(response => {
        dispatch(actLoginSuccess(response.data));
        console.log(response.data)
        if (response.data.user.role === "ADMIN") {
          history.push("/admin");
        } else {
          history.push("/");
        }
        console.log("routehhhhhhhhh", response.data.user.role);

        console.log("OK 200 Login");
      })
      .catch(error => {
        dispatch(actLoginFail('Unable to login!'));
      });
  };
};
export const actLogout = () => ({
  type: LOGOUT,
  payload: null,
});
