import router from '@/router'
import apiClient from '@/setups/apiClient'
import { defineStore } from 'pinia'
import { ref, watch, type Ref } from 'vue'

type AccessTokenType = string | null
type authUserType = {
  _id: ''
  fullname: ''
  email: ''
  createdAt: Date
}

const useAuthStore = defineStore('auth', () => {
  const accessToken: Ref<AccessTokenType> = ref(null)
  const authUser: Ref<authUserType> = ref({
    _id: '',
    fullname: '',
    email: '',
    createdAt: new Date(),
  })

  watch(accessToken, (newAccessToken, prevAccessToken) => {
    if (newAccessToken == null) {
      router.push({ name: 'login' })
    }
    if (prevAccessToken == null && newAccessToken != null) {
      fetchAuthUser()
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

  const fetchAuthUser = async () => {
    return apiClient
      .get('api/users/me')
      .then((r) => {
        console.log(r.data.data)
        setAuthUser(r.data.data)
        return authUser
      })
      .catch(() => {
        return false
      })
  }

  const setAuthUser = (user: authUserType) => {
    authUser.value = user
  }

  return {
    accessToken,
    setAccessToken,
    deleteAccessToken,
    refreshToken,
    authUser,
    setAuthUser,
    fetchAuthUser,
  }
})

export default useAuthStore
