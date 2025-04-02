import router from '@/router'
import apiClient from '@/setups/apiClient'
import { defineStore } from 'pinia'
import { ref, watch, type Ref } from 'vue'

type AccessTokenType = string | null

const useAuthStore = defineStore('auth', () => {
  const accessToken: Ref<AccessTokenType> = ref(null)

  watch(accessToken, (newAccessToken) => {
    if (newAccessToken == null) {
      router.push({ name: 'login' })
    }
  })

  const setAccessToken = (newAccessToken: AccessTokenType) => {
    accessToken.value = newAccessToken
  }
  const deleteAccessToken = () => {
    setAccessToken(null)
  }

  const refreshToken = async () => {
    return apiClient
      .post('api/auth/getNewAccessToken')
      .then((r) => {
        setAccessToken(r.data.accessToken)
        return true
      })
      .catch(() => {
        return false
      })
  }

  return { accessToken, setAccessToken, deleteAccessToken, refreshToken }
})

export default useAuthStore
