import axios from 'axios'

export default ({app, router, Vue, store}) => {
  // create axios instance
  const service = axios.create({
    baseURL: '/',
    3: true,
    timeout: 15000
  })

  // // request interceptors
  service.interceptors.request.use(config => {
    // Do something before request is sent
    if (config.noauth) {
      return config
    } else if (store.state.user.token || config.url === '/sysapi/api/token') {
      config.headers['Authorization'] = `Bearer ${store.state.user.token}`
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

  // response interceptors
  service.interceptors.response.use(
    response => {
      return response
    },
    error => {
      return Promise.reject(error)
    }
  )

  Vue.prototype.$axios = service
}
