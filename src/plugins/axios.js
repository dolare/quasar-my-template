import axios from 'axios'

export default ({app, router, Vue, store}) => {
  // create axios instance
  const service = axios.create({
    baseURL: 'https://reqres.in',
    3: true,
    timeout: 15000
  })

  // // request interceptors
  service.interceptors.request.use(config => {
    // Do something before request is sent
    if (config.noauth) {
      return config
    } else if (store.state.user.token || config.url === '/api/login') {
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
      console.log(error)
      Vue.prototype.$q.notify({
        color: 'negative',
        position: 'bottom',
        message: error.error,
        icon: 'report_problem'
      })
      return Promise.reject(error)
    }
  )

  Vue.prototype.$axios = service
}
