import axios from "axios";

const templates = axios.create({
        withCredentials: true,
        headers: { "API-KEY": "983ef69e-fb02-4dae-9cd8-71dddb6f6669" },
        baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    }
);
export const usersAPI = {
    follow(userId) { return templates.post(`follow/${userId}`) },
    unfollow(userId) { return templates.delete(`follow/${userId}`) },
    getUsers(currentPage, pageSize=100) { return templates.get(`users?page=${currentPage}&count=${pageSize}`) },
    setUserPage(pageNumber, pageSize) { return templates.get(`users?page=${pageNumber}&count=${pageSize}`) }
};
export const authAPI = {
    authMe() { return templates.get(`auth/me`) },
    authLoginPost() { return templates.post(`auth/login`) },
    authLoginDelete() { return templates.delete(`auth/login`) },
    authSecurityGetCaptcha () { return templates.get (`security/get-captcha-url`) }
};
export const profileAPI = {
    setPersonData(userId) { return templates.get(`profile/${userId}`) },
    setPersonStatus(userId) { return templates.get(`profile/status/${userId}`) },
    updatePersonStatus(status) { return templates.put(`profile/status`, {status: status}) },
    addProfilePersonData(userId) { return templates.put(`profile/${userId}`) },
    addPhotosPersonalData() { return templates.put (`profile/photo`) }
};

