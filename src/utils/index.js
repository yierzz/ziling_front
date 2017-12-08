import axios from 'axios'
import Vue from 'vue'

export const client = function (options) {
  let instance = axios.create({
    baseURL: '/apiv1',
    timeout: 10000,  // 超时
    responseType: 'json' // default
  })
  return new Promise((resolve, reject) => {
    instance(options)
      .then(response => {
        const res = response.data
        resolve(res)
      })
      .catch(error => {
        console.log(error) // for debug
        reject(error)
      })
  })
}

// sessionStorage
export const session = function (key, value) {
  if (value === void (0)) {
    let lsVal = sessionStorage.getItem(key)
    if (lsVal && lsVal.indexOf('autostringify-') === 0) {
      return JSON.parse(lsVal.split('autostringify-')[1])
    } else {
      return lsVal
    }
  } else {
    if (typeof (value) === 'object' || Array.isArray(value)) {
      value = 'autostringify-' + JSON.stringify(value)
    }

    return sessionStorage.setItem(key, value)
  }
}

// 生成随机数
export const getUUID = function (len) {
  len = len || 6
  len = parseInt(len, 10)
  len = isNaN(len) ? 6 : len
  let seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ'
  let seedLen = seed.length - 1
  let uuid = ''
  while (len--) {
    uuid += seed[Math.round(Math.random() * seedLen)]
  }
  return uuid
}
// 深拷贝
export const deepcopy = function (source) {
  if (!source) {
    return source
  }
  let sourceCopy = source instanceof Array ? [] : {}
  for (let item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? deepcopy(source[item]) : source[item]
  }
  return sourceCopy
}

export const dateFormat = function (source, ignreMinute) {
  let myDate
  let separate = '-'
  let minute = ''
  if (source === void (0)) {
    source = new Date()
  }
  if (source) {
    if (source.split) {
      source = source.replace(/-/g, '/')
    } else if (isNaN(parseInt(source))) {
      source = source.toString().replace(/-/g, '/')
    } else {
      source = new Date(source)
    }

    if (new Date(source) && (new Date(source)).getDate) {
      myDate = new Date(source)
      if (!ignoreMinute) {
        minute = (myDate.getHours() < 10 ? ' 0' : ' ') + myDate.getHours() + ':' + (myDate.getMinutes() < 10 ? '0' : '') + myDate.getMinutes()
      }
      return myDate.getFullYear() + separate + (myDate.getMonth() + 1) + separate + (myDate.getDate() < 10 ? '0' : '') + myDate.getDate() + minute
    } else {
      return source.slice(0, 16)
    }
  } else {
    return source
  }
}

// 错误码处理
export const catchError = function (error) {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        Vue.prototype.$message({
          message: error.response.data.message || '请求参数异常',
          type: 'error'
        })
        break
      case 401:
        sessionStorage.removeItem('user')
        Vue.prototype.$message({
          message: error.response.data.message || '密码错误或账号不存在！',
          type: 'warning',
          onClose: function () {
            location.reload()
          }
        })
        break
      case 403:
        Vue.prototype.$message({
          message: error.response.data.message || '无访问权限，请联系企业管理员',
          type: 'warning'
        })
        break
      default:
        Vue.prototype.$message({
          message: error.response.data.message || '服务端异常，请联系技术支持',
          type: 'error'
        })
    }
  }
  return Promise.reject(error)
}
