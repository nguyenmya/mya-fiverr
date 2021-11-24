import axios from "axios";
import { TOKEN, TOKENBYCLASS } from "settings/apiConfig";

const callApiPost = (endpoint = null, data = null, token = TOKEN) => {
  return axios({
    url: `/${endpoint}`,
    method: "POST",
    data,
    headers: {
      token,
      tokenByClass: TOKENBYCLASS,
    },
  });
};

export default callApiPost;
