import axios from 'axios'

const service = axios.create({
    baseURL: process.env.NODE_ENV == 'production' ? 'http://projectallocation-env.eba-mgyhdcw8.us-east-2.elasticbeanstalk.com/' : 'http://localhost:8001',
    timeout: 5000
})

service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    }
)

export default service

