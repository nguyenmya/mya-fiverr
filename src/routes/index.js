import AddJob from "containers/admin/JobManagement/AddJob/AddJob";
import EditJob from "containers/admin/JobManagement/EditJob/EditJob";
import JobManagement from "containers/admin/JobManagement/JobManagement";
import AddUser from "containers/admin/UserManagement/AddUser/AddUser";
import EditUser from "containers/admin/UserManagement/EditUser/EditUser";
import UserManagerment from "containers/admin/UserManagement/UserManagerment";
import DetailJobs from "containers/client/DetailJobs/DetailJobs";
import Home from "containers/client/Home/Home";
import ListJobCategories from "containers/client/ListJobCategories/ListJobCategories";
import ListJobs from "containers/client/ListJobs/ListJobs";
import UserInformation from "containers/client/UserInformation/UserInformation";
import Login from "containers/shared/LoginFiverr/Login";
import Register from "containers/shared/Register/Register";
import TypeJobManagement from "containers/admin/TypeJobManagement/TypeJobManagement";
import AddTypeJob from "containers/admin/TypeJobManagement/Add/AddTypeJob";
import EditTypeJob from "containers/admin/TypeJobManagement/Edit/EditTypeJob";
import SubJobManagement from "containers/admin/SubJobManagement/SubJobManagement";
import AddSubJob from "containers/admin/SubJobManagement/AddSubJob/AddSubJob";
import EditSubJob from "containers/admin/SubJobManagement/EditSubJob/EditSubJob";
export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/home",
    component: Home,
    exact: true,
    isPrivate: false,
  },

  {
    path: "/list-jobs/:subTypeId",
    component: ListJobs,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/list-job-categories/:typeId",
    component: ListJobCategories,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/detail-jobs/:jobId",
    component: DetailJobs,
    exact: false,
    isPrivate: true,
  },
  {
    path: "/login/:id",
    component: UserInformation,
    exact: false,
  },
  {
    path: "/login",
    component: Login,
    exact: false,
  },
  {
    path: "/register",
    component: Register,
    exact: false,
  },
  {
    path: '/listjob/by-name',
    component: ListJobs,
    exact: true
},
];


export const adminRoutes = [
  {
    path: "/admin",
    component: UserManagerment,
    exact: true,
    isPrivate: false,

  },
  {
    path: "/admin/job-management",
    component: JobManagement,
    exact: true,
    isPrivate: true,

  },
  {
    path: "/admin/job-management/add-job",
    component: AddJob,
    exact: true,
    isPrivate: true,

  },
  {
    path: "/admin/job-management/edit-job/:jobId",
    component: EditJob,
    exact: true,
  },
  {
    path: "/admin/subjob-management",
    component: SubJobManagement,
    exact: true,
  },
  {
    path: "/admin/subjob-management/add-subjob",
    component: AddSubJob,
    exact: true,
  },
  {
    path: "/admin/subjob-management/edit-subjob/:subjobId",
    component: EditSubJob,
    exact: true,
  },
  {
    path: "/admin/user-managerment/add",
    component: AddUser,
    exact: false,
    isPrivate: true,

  },
  {
    path: "/admin/user-managerment/edit/:idUser",
    component: EditUser,
    exact: false,
    isPrivate: true,

  },
  {
    path: "/admin/type-job",
    component: TypeJobManagement,
    exact: true,
    isPrivate: true,

  },
  {
    path: "/admin/type-job/add",
    component: AddTypeJob,
    exact: false,
    isPrivate: true,

  },
  {
    path: "/admin/type-job/edit/:typeId",
    component: EditTypeJob,
    exact: false,
    isPrivate: true,
  },
  
  
];
