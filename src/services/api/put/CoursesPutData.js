import toast from "react-hot-toast";
import { interceptor } from "../../interceptor";

export const UpdateTechnology = async ({
  techName,
  parentId,
  icon,
  id,
  describe,
}) => {
  try {
    const response = await interceptor.put("/Technology", {
      techName: techName,
      parentId: parentId,
      describe: describe,
      iconAddress: icon,
      id: id,
    });
    console.log(response, "response");
    if (response) {
      toast.success(response.message);
    }
    return response;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
