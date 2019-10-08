import request from './network.js'


export function getData() {

  return request({
    url: '/home/index'
  })
}