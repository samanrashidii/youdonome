// import Vue from 'vue'
import axios from 'axios'
import api from './api'

// axios.interceptors.request.use(
//   function (config) {
//     return config
//   },
//   function (error) {
//     return Promise.reject(error)
//   }
// )

// axios.interceptors.response.use(
//   function (response) {
//     return response
//   },
//   function (error) {
//     return Promise.reject(error)
//   }
// )

Object.entries(api).map(([key, value]) => {
  const obj = { ...value }
  api[key] = function () {
    // if (payload) {
    //   obj.data = payload
    // }
    // if (url) {
    //   obj.url = url
    // }
    const promise = axios(obj)
    return promise
  }
})

export default {
  ...api
}
