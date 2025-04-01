import keys from '@/config/keys'
import axios from 'axios'

const axiosSetup = () => {
  axios.defaults.baseURL = keys.apiUrl
  axios.defaults.withCredentials = true
  axios.interceptors.request.use(function (config) {
    config.headers.Accept = 'application/json'

    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      config.headers.Authorization = 'Bearer ' + accessToken
    }

    return config
  })
}

export default axiosSetup
