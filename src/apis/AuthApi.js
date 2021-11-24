import axios from "axios";

export const loginService = (user) => {
  const URL = `https://fiverr.cybersoft.edu.vn/api/auth/signin`;
  
  const promise = axios({
    url: URL,
    method: "POST",
    data: user,
    
    headers: {
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTZlOTU1ZTJiMTAzMjAwMWMzZjNkMDIiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJDTElFTlQiLCJpYXQiOjE2MzQ3MTY3NDV9.3qq6jblZCVYVW7qL6ThHAZi_81U8x3EEq8iHlqWIUT8",
        tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjgiLCJIZXRIYW5TdHJpbmciOiIwNS8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDY0Mzg0MDAwMDAiLCJuYmYiOjE2MTc5ODc2MDAsImV4cCI6MTY0NjU4NjAwMH0.rmNHCCoHWfPP3VnrGmrmn3_CDUS9NnNwcEeBD_71ylk"
      },
  });

  promise
    .then((rs) => {
      console.log("thong tin dang nhap", rs);
    })
    .catch((err) => {
      console.log("that bai:", err);
    });
  return promise;
};
