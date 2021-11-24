import { FETCH__EDIT__USER__FAIL, FETCH__EDIT__USER__SUCCESS, FETCH__LIST__USER__FAIL, FETCH__LIST__USER__SUCCESS, } from "./type";


const innitialState = {
  userList: [],
  error: null,
  detailUser: [],
  searchUser: [],
};

 const listUserReducer = (state = innitialState, { type, payload }) => {
  switch (type) {
    case FETCH__LIST__USER__SUCCESS: {
      state.userList = payload;
      return { ...state };
    }
    case FETCH__LIST__USER__FAIL: {
      state.error = payload;
      return { ...state };
    }
    case FETCH__EDIT__USER__SUCCESS: {
      state.detailUser = payload;
      return { ...state };
    }
    case FETCH__EDIT__USER__FAIL: {
      state.error = payload;
      return { ...state };
    }
    
    default:
      return state;
  }
};
export default listUserReducer;