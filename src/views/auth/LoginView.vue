<script setup lang="ts">
import apiClient from '@/setups/apiClient'
import useAuthStore from '@/store/authStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { z } from 'zod'

const router = useRouter()
const email = ref()
const password = ref()
const authStore = useAuthStore()
const login = () => {
  const formData = {
    email: email.value,
    password: password.value,
  }
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(30),
  })
  const result = schema.safeParse(formData)
  if (!result.success) {
    return
  }
  apiClient.post('api/login', formData).then((r) => {
    authStore.setAccessToken(r.data.accessToken)
    router.push({ name: 'dashboard' })
  })
}
</script>

<template>
  <div class="flex h-screen">
    <div class="m-auto border-2 rounded-lg">
      <div class="flex gap-2 justify-between bg-blue-100 p-5">
        <span class="text-black">Email</span>
        <input v-model="email" class="text-black border-black border-1" type="text" />
      </div>
      <div class="flex gap-2 justify-between bg-blue-100 p-5">
        <span class="text-black">Password</span>
        <input v-model="password" class="text-black border-black border-1" type="password" />
      </div>
      <div class="flex gap-2 justify-between bg-blue-100 p-5">
        <span class="text-black">
          <RouterLink class="text-blue-700" :to="{ name: 'register' }">Goto Register</RouterLink>
        </span>
        <button @click.prevent="login" class="m-1 border-black border-1 px-2 text-black">
          Login
        </button>
      </div>
    </div>
  </div>
</template>
