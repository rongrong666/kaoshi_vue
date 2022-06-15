import request from '../utils/request.js'

export const getSettings = () => {
  return request({
    method: 'get',
    url: 'user/setting'
  })
}

export const queryMessage = (data) => {
  return request({
    method: 'post',
    url: 'login/message',
    data: data
  })
}

export const loginLogin = (data) => {
  return request({
    method: 'post',
    url: 'login/login',
    data: data
  })
}

export const queryUserInfo = () => {
  return request({
    method: 'get',
    url: 'user/info'
  })
}

export const sub1 = (data) => {
  return request({
    method: 'post',
    url: 'user/sub',
    data: data
  })
}

export const sub2 = (data) => {
  return request({
    method: 'post',
    url: 'user/sub2',
    data: data
  })
}

export const sub3 = (data) => {
  return request({
    method: 'post',
    url: 'user/sub3',
    data: data
  })
}
