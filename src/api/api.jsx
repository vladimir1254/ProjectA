import * as axios from "axios";


const instance = axios.create(
{
    withCredentials:true,
    headers: {
        "API-KEY":"5cd82626-abef-4ec1-be5a-56a19cfeff67",
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
}
)
export const HeaderAPI ={
    getLogin ()
    {
        return instance.get(`auth/me`).then(response => response.data)
    }
}
export const SecurityAPI ={
    getCaptchaURL ()
    {
        return instance.get(`security/get-captcha-url`).then(response => response.data)
    }
}
export const LoginAPI ={
    Login (email,password,rememberMe,captcha)
    {
        return instance.post(`auth/login`,{email,password,rememberMe,captcha}).then(response => response.data)
    },
    Logout ()
    {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}
export const ProfileAPI = {
    getProfile(userId)
    {
        return instance.get(`profile/`+userId,{}).then(response => response.data)
    },
    getStatus(userId)
    {
        return instance.get(`profile/status/`+userId,{}).then(response =>response.data)
    },
    updateStatus(status)
    {
        return instance.put(`profile/status`,{status:status}).then(response =>response.data)
    },
    savePhoto(photo)
    {
        let formData = new FormData();
        formData.append("image",photo)
        return instance.put(`profile/photo`,formData,
            {
                headers: {'Content-Type':'multipart/form-data'}
            }
            ).then(response =>response.data)
    },
    saveProfile(profile)
    {
        return instance.put(`profile`,profile).then(response => response.data)
    }
}
export const UserAPI = {
  getUsers (currentPage = 1,pageSize = 10)
{
   return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {}).then(response => response.data);
},
 getUsersFol (id,num)
 {
     if(num===1) {
         return instance.post(`follow/${id}`).then(response => response.data)
     }
     else
     {
         return instance.delete(`follow/${id}`).then(response => response.data)
     }
 }
}
