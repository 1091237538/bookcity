import axios from 'axios';

export function request(config){
    const instance = axios.create({
        baseURL:"http://localhost:8080",

    })
    instance.interceptors.response.use(data=>{
        return data.data.data
    })
    return instance(config)
}