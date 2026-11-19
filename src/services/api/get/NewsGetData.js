import { interceptor } from "../../interceptor";

export const AllNews = async ({ data }) => {
  try {
    const response = await interceptor.get(`/News/AdminNewsFilterList?`, {
      params: { ...data },
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.log(error.response, "errorrrrrrrrrrrr");
  }
};
export const NewsWithId = async (id) => {
  try {
    const response = await interceptor.get(`/News/${id}`);
    return response;
  } catch (error) {
    console.log(error.response, "errorrrrrrrrrrrr");
  }
};
