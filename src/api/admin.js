import request from '../utils/request'

export default {
    getAllAdmins() {
        return request({
            url: '/admin/getAllAdmins',
            method: 'get'
        })
    },
}