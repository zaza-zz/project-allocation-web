import request from '../utils/request'

export default {
    login() {
        return request({
            url: '/auth/login',
            method: 'get'
        })
    }
}