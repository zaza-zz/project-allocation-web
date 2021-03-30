import axios from 'axios'

const service = axios.create({
    baseURL: process.env.NODE_ENV == 'production' ? 'https://api.usydprojectallocation.com' : 'http://localhost:8001',
    timeout: 5000
})

service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    }
)

export default service

