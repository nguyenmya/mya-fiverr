import { FETCH__REGISTER__FAIL, FETCH__REGISTER__SUCCESS } from "./type";

const initialState = {
  registerUser: {},
  loading: false,
  error: null,
};

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH__REGISTER__SUCCESS:
      return { ...state, loading: false, registerUser: payload };
    case FETCH__REGISTER__FAIL:
      return { ...state, loading: false, error: payload };
   
    default:
      return state;
  }
};

export default registerReducer;
