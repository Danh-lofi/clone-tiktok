import * as request from "~/utils/request";
const search = async (q, type = "less") => {
  try {
    const req = await request.get("users/search", {
      params: {
        q,
        type: type,
      },
    });
    return req.data;
  } catch (error) {
    console.log(error);
  }
};

export default search;
