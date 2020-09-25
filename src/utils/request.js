import axios from 'axios'
const request = axios.create({
  baseURL: 'https://supervision.zldhz.com',
  timeout: 60000
})

request.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('sid')) {
      config.headers['authorization'] = `Token ${sessionStorage.getItem('sid')}`
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)
request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default request