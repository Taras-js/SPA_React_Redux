import axios from "axios";

const templates = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "983ef69e-fb02-4dae-9cd8-71dddb6f6669"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    }
);
export const usersAPI = {
    follow(userId) {
        return templates.post( `follow/${userId}`)
    },
    unfollow(userId) {
        return templates.delete( `follow/${userId}`)
    },

    getUsers(currentPage, pageSize) {
        return templates.get( `users?page=${currentPage}&count=${pageSize}`)
    }
};
export const authAPI = {
    authMe() {
        return templates.get( `auth/me`)
    }
};

// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=
//         ${this.props.pageSize}`,{
//     withCredentials: true
// })
//
// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=
//         ${this.props.pageSize}`, {
//     withCredentials: true
// })
//
//
// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${ userId }`, {
//     withCredentials: true,
// })