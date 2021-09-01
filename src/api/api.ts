import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b2f483fb-12d0-416c-b898-fb3d62ff63f8"
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getProfile(userId: string){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    unfollow(id: number){
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    follow(id: number){
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}
export const profileAPI = {
    getProfile(userId: string){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status: status})
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}