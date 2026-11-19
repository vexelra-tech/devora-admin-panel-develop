import { interceptor } from "../../interceptor";

export const GetUserInfo = async () => {
  try {
    const response = await interceptor.get("/SharePanel/GetProfileInfo");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const AllUsers = async ({ data }) => {
  try {
    const response = await interceptor.get(`/User/UserMannage?`, {
      params: { ...data },
    });
    console.log(response,"response")
    return response;
  } catch (error) {
    console.log(error, "error / catch");
  }
};
export const AllTeachers = async ({ data }) => {
  try {
    const response = await interceptor.get(`/Home/GetTeachers`);
    return response;
  } catch (error) {
    console.log(error, "error / catch");
  }
};
