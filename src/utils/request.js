import axios from 'axios'
const service = axios.create({
  baseURL: '/api1/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 5000
});
// 请求拦截
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
// config.headers.Authorization = token
  token && (() => (config.params = { token: token.substring(1, token.length - 1) }))()
  return config
}, err => {
  console.log(err);
})

// 响应拦截
service.interceptors.response.use(response => {
// 根据后端返回的数据，错误时的统一操作
  if (response.data.code === 50000) {
    window.location.href = '/'
  }
  return response
}, error => {
  return Promise.reject(error)
})
export default service
