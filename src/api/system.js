import request from '../utils/request'

export default {
  login(data) {
    return request({
      url: '/auth/v1/token/',
      method: 'post',
      data
    })
  },
}