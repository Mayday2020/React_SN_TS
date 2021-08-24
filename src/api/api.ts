import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "384f94cc-cf72-4620-8708-46f29f032232"
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUser(userId: string){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    unfollow(id: number){
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    follow(id: number){
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    authMe(){
        return instance.get(`auth/me`)
    }
}