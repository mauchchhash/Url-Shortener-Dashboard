import keys from '@/config/keys'
import router from '@/router'
import useAuthStore from '@/store/authStore'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: keys.apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const apiClientSetup = () => {
  const authStore = useAuthStore()
  apiClient.interceptors.request.use((config) => {
    if (authStore.accessToken) {
      config.headers.Authorization = 'Bearer ' + authStore.accessToken
    }
    return config
  })
  apiClient.interceptors.response.use(
    (res) => {
      return res
    },
    async (err) => {
      const originalConfig = err.config

      if (originalConfig.url == 'api/auth/getNewAccessToken') {
        authStore.deleteAccessToken()
      }
      if (originalConfig.url !== '/api/login' && err.response) {
        // Access Token was expired
        if (
          err.response.status === 403 &&
          err.response.data.message == 'Token expired' &&
          !originalConfig._retry
        ) {
          originalConfig._retry = true

          try {
            const rs = await apiClient.post('/api/auth/getNewAccessToken')

            const newAccessToken = rs.data.accessToken

            authStore.setAccessToken(newAccessToken)

            return apiClient(originalConfig)
          } catch (_error) {
            authStore.deleteAccessToken()
            router.push({ name: 'login' })
            return Promise.reject(_error)
          }
        }
      }

      return Promise.reject(err)
    },
  )
}

export default apiClient
