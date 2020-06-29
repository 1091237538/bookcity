import axios from 'axios'

export function logIn(config) {
    const logIn = axios.create({
        baseURL: "http://localhost:8080",
        method: "POST",
        headers: {
            'Content-Type': 'application/json', // 设置Content-Type值为application/json
        }
    })
    return logIn(config)
}