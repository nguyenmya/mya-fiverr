import axios from "axios";
import { TOKEN, TOKENBYCLASS } from "settings/apiConfig";

const callApiPatch = (endpoint = null, data = null, token = TOKEN) => {
  return axios({
    url: `/${endpoint}`,
    method: "PATCH",
    data,
    headers: {
      token,
      tokenByClass: TOKENBYCLASS,
    },
  });
};

export default callApiPatch;
