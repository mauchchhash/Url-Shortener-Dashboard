<script setup lang="ts">
import apiClient from '@/setups/apiClient'
import useAuthStore from '@/store/authStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const logout = () => {
  apiClient.post('api/logout').then(() => {
    authStore.deleteAccessToken()
    router.push({ name: 'login' })
  })
}
</script>
<template>
  <div class="about">
    <h1>Dashboard</h1>
    <div>
      <button @click.prevent="logout" class="m-1 border-white border-1 px-2 text-white">
        Logout
      </button>
    </div>
    <div>
      <button
        @click.prevent="authStore.refreshToken"
        class="m-1 border-white border-1 px-2 text-white"
      >
        Refresh token
      </button>
      <p class="text-white">{{ authStore.authUser.fullname }}</p>
    </div>
  </div>
</template>
