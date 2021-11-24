
import axios from "axios";
import { TOKEN, TOKENBYCLASS } from "settings/apiConfig";

const callApi = (endpoint = null, data = null, token = TOKEN) => {
  return axios({
    url: `/${endpoint}`,
    method: "GET",
    data,
    headers: {
      token,
      tokenByClass: TOKENBYCLASS,
    },
  });
};

export default callApi;
