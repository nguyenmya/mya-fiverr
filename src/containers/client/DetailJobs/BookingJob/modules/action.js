import fiverrApi from "apis/fiverrApi";
import { BOOKIING_JOB_SUCCESS } from "../../BookingJob/modules/type";

export const acBookingJob = (bookingJob) => ({
  type: BOOKIING_JOB_SUCCESS,
  payload: bookingJob,
});

export const actDatCongViec = (jobId, token) => {
  return (dispatch) => {
    fiverrApi
      .fetchBookingJob(jobId, token)
      .then((result) => {
        console.log("Đặt công việc nè!", result);
        // alert("Booking Success!");
        // dispatch(acBookingJob(result.data))
      })
      .catch((error) => {
        console.log("errrhhh", error.response?.data);
      });
  };
};
