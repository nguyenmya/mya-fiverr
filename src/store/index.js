import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import tittleJobReducer from "containers/client/DetailJobs/modules/reducer";
import userListJobsReducer from "containers/client/UserInformation/modules/reducer";
import authReducer from "containers/shared/LoginFiverr/modules/reducer";
import registerReducer from "containers/shared/Register/modules/reducer";
import { JobReducer } from "containers/client/ListJobs/module/reducer";
import { TypeJobsReducer } from "components/Header/module/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  JobDetailReducer,
} from "containers/client/ListJobCategories/module/module";
import listUserReducer from "containers/admin/UserManagement/module/reducer";
import typeJobsReducer from "containers/admin/TypeJobManagement/modules/reducer";
import JobManagementReducer  from "containers/admin/JobManagement/module/reducer";
import { SubJobManagementReducer } from "containers/admin/SubJobManagement/module/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  tittleJobReducer,
  userListJobsReducer,
  authReducer,
  registerReducer,
  JobReducer,
  TypeJobsReducer,
  JobDetailReducer,
  listUserReducer,
  //admin
  typeJobsReducer,
  JobManagementReducer,
  SubJobManagementReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authReducer"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
