import callApi from "utils/callApi";
import callApiDelete from "utils/callApiDelete";
import callApiPatch from "utils/callApiPatch";
import callApiPost from "utils/callApiPost";
import callApiPut from "utils/callApiPut";
import { User } from "_core/models/ThongTinDat";

const fiverrApi = {
  // api 20
  fetchListJobsApi(jobName = "") {
    if (jobName === "") {
      return callApi("jobs");
    }
    return callApi(`jobs/by-name?name=${jobName}`);
  },
  // api 14
  fetchListTypeJobsApi() {
    return callApi("type-jobs");
  },
  // api 17
  fetchTypeJobDetailApi(typeId) {
    return callApi(`type-jobs/${typeId}`);
  },
  // api 25
  fetchListJobByTypeApi(typeId) {
    return callApi(`jobs/by-type?type=${typeId}&skip=0&llimit=10`);
  },
  // api 23
  fetchDetailFiverrApi(jobId) {
    return callApi(`jobs/${jobId}`);
  },
  // api 19
  addNewJobApi(newJob) {
    return callApiPost("jobs", newJob);
  },
  // api 9
  fetchListSubTypeJobApi() {
    return callApi("sub-type-jobs");
  },
  // api 21
  deleteJobApi(jobId) {
    return callApiDelete(`jobs/${jobId}`);
  },
  // api 30
  addJobImageApi(jobId, formData) {
    return callApiPost(`jobs/upload-image/${jobId}`, formData);
  },
  // api 22
  editJobApi(jobId, jobInfo) {
    return callApiPut(`jobs/${jobId}`, jobInfo);
  },
  // api 8
  addSubJobApi(subJob) {
    return callApiPost(`sub-type-jobs`, subJob);
  },
  // api 11
  editSubJobApi(subJobId, subJob) {
    return callApiPut(`sub-type-jobs/${subJobId}`, subJob);
  },
  // api 12
  deleteSubJobApi(subJobId) {
    return callApiDelete(`sub-type-jobs/${subJobId}`);
  },
  // api 10
  fetchSubTypeJobApi(subjobId) {
    return callApi(`sub-type-jobs/${subjobId}`);
  },
  // api 15
  deleteTypeJobApi(typeJobId) {
    return callApiDelete(`type-jobs/${typeJobId}`);
  },
  // api 24
  fetchListJobBySubTypeApi(subTypeId) {
    return callApi(`jobs/by-sub-type?subType=${subTypeId}&skip=0&llimit=0`);
  },
  fetchBookingJob(jobId, token) {
    return callApiPatch(`jobs/booking/${jobId}`, null, token);
  },
  fetchCommentApi(jobId, user = new User()) {
    return callApi(`comments/by-job/${jobId}`);
  },
  // userInformation
  fetchUserListJobsApi(userId) {
    return callApi(`users/${userId}`);
  },
  // fetchAddUserInformation(userId, user) {
  //   return callApiPut(`users/${userId}`, user);
  // },

  fetchEditUserInformationApi(userId) {
    return callApiPut(`users/${userId}`);
  },
  fetchListJobsBooking(token) {
    return callApi(`jobs/by-user`, null, token);
  },
  //historyJobs
  fetchHistoryJobBookingApi(token) {
    return callApi(`jobs/by-user`, null, token);
  },
  fetchUploadImgApi(formData, token) {
    return callApiPost(`users/upload-avatar`, formData, token);
  },
  loginApi(userLogin) {
    return callApiPost(`auth/signin`, userLogin);
  },

  registerAPi(register) {
    return callApiPost(`auth/signup`, register);
  },

  //API ADMIN
  fetchListUser(nameUser = "") {
    if (nameUser !== "".trim()) {
      return callApi(`users/pagination-search?name=${nameUser}&skip=0&limit=2`);
    }
    return callApi("users");
  },
  deleteUser(idUser) {
    return callApiDelete(`users/${idUser}`);
  },
  createUserApi(clientData) {
    return callApiPost(`users`, clientData);
  },
  detailUserApi(idUser) {
    return callApi(`users/${idUser}`);
  },
  editUserApi(idUser, user, token) {
    return callApiPut(`users/${idUser}`, user, token);
  },
  searchUser(nameUser) {
    return callApi(`users/pagination-search?name=${nameUser}&skip=0&limit=2`);
  },
  //type-jobs
  fetchListTypeJobApi() {
    return callApi(`type-jobs`);
  },
  createListTypeJobApi(jobType) {
    return callApiPost(`type-jobs`, jobType);
  },
  detailTypeJobApi(typeJobId) {
    return callApi(`type-jobs/${typeJobId}`);
  },
  editTypeJobApi(typeJobId, typeJob) {
    return callApiPut(`type-jobs/${typeJobId}`, typeJob);
  },
};
export default fiverrApi;
