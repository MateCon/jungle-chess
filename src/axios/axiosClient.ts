import axios from "axios";
import User from "../types/user";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080"
});

export const getAllUsers = async () => {
    return axiosClient.get('/user/all')
        .then(res => {
            if (res.status < 300) return res.data;
            else console.log(`Response with status code ${res.status}`);
        })
        .catch(err => {
            console.log(err);
        })
}

export const createUser = async (user: User) => {
    return axiosClient.post('/user/', user)
        .then(res => {
            if (res.status < 300) return res.data;
            else console.log(`Response with status code ${res.status}`);
        })
        .catch(err => {
            console.log(err);
        })
}
