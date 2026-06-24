import axios from 'axios'
import store from "../store.js";

const api = axios.create({
    baseURL: 'https://exemplo-psai-202601.onrender.com',
    timeout: 10000,
})

api.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.auth.token;
    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default api;