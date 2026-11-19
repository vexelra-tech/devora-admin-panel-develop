import { interceptor } from "../../interceptor";

export const AllCourses = async ({ data }) => {
  try {
    const response = await interceptor.get("/Home/GetCoursesWithPagination?", {
      params: { ...data },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const AllComments = async ({ data }) => {
  try {
    const response = await interceptor.get(`/Course/CommentManagment?`, {
      params: { ...data },
    });
    return response;
  } catch (error) {
    console.log(error, "error / catch");
  }
};
export const CoursesStatus = async () => {
  try {
    const response = await interceptor.get("/Status");
    return response;
  } catch (error) {
    console.log(error, "error / catch");
  }
};
export const CoursesTechnology = async () => {
  try {
    const response = await interceptor.get("/Home/GetTechnologies");
    return response;
  } catch (error) {
    console.log(error, "error / catch");
  }
};
export const DashboardTechology = async()=>{
  try {
    const response = await interceptor.get("/Report/DashboardTechnologyReport")
    return response
  } catch (error) {
    console.log(error,"error / catch")
  }
}
