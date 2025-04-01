<script setup lang="ts">
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const logout = () => {
  axios.post('api/logout').then(() => {
    localStorage.removeItem('accessToken')
    router.push({ name: 'login' })
  })
}
</script>
<template>
  <div class="about">
    <h1>Dashboard</h1>
    <button @click.prevent="logout">Logout</button>
  </div>
</template>
