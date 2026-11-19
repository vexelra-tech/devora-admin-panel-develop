import toast from "react-hot-toast"
import { interceptor } from "../../interceptor"

export const AuthLogin = async({phoneOrGmail,password,remember})=>{
    try {
        const response = await interceptor.post("/Sign/Login", {
    phoneOrGmail: phoneOrGmail,
    password:password,
    rememberMe: remember,
  })
  if(response){
    toast.success(response.message)
  }
  return response
    } catch (error) {
        toast.error(error.response.data.message)
    }
}