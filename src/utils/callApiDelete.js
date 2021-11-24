import axios from "axios";
import { TOKEN, TOKENBYCLASS } from "settings/apiConfig";

const callApiDelete = (endpoint = null, data = null, token = TOKEN) => {
  return axios({
    url: `/${endpoint}`,
    method: "DELETE",
    data,
    headers: {
      token,
      tokenByClass: TOKENBYCLASS,
    },
  });
};

export default callApiDelete;
