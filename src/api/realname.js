import request from '../utils/request'
export default {
    // 获取项目列表
    getProjectList(params) {
      return request({
        url: '/building/project_info/',
        method: 'get',
        params
      })
    }
}