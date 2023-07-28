import axios from "axios";

export const API_BASE_URL = 'http://192.168.8.105:4000';

const api = axios.create({
    baseURL:'http://localhost:4000',
    withCredentials:true,
    timeout:80000,
    headers:{
        Accept: 'application/json'
    }
});


api.interceptors.request.use(
    (config) =>{
        const token = null; //locatStorage.getItem('token');

        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },

    (error) => {
        if(error.response && error.response.status === 401){
            console.log("unauthorized");
        }
        return Promise.reject(error);
    }
);

export default api;