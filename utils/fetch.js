/* 
  封装的fetch.js文件专门用于发送ajax请求，支持promise
*/
const BASE_URL = 'https://iwork.sse.com.cn:8885/walkStep/wxapp/'
export default function fetch(url ,options = {}) {
  if (typeof url === 'string') {
    options.url = url
  }
  if (typeof url === 'object' && arguments.length === 1) {
    options = url
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      dataType: options.dataType || 'json',
      header: options.header || {},
      success: function(res) {
        resolve(res)
      },
      fail: function(err) {
        reject(err)
      }
    })
  })
}