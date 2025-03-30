<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const fullname = ref('')
const email = ref('')
const password = ref('')
const signup = () => {
  // axios.post()
}
</script>

<template>
  <div class="flex h-screen">
    <div class="m-auto border-2 rounded-lg">
      <div class="flex gap-2 justify-between bg-blue-100 p-5">
        <span class="text-black">Full Name</span>
        <input v-model="fullname" class="border-black border-1" type="text" />
      </div>
      <div class="flex gap-2 justify-between bg-blue-100 p-5">
        <span class="text-black">Email</span>
        <input v-model="email" class="border-black border-1" type="text" />
      </div>
      <div class="flex gap-2 justify-between bg-blue-100 p-5">
        <span class="text-black">Password</span>
        <input v-model="password" class="border-black border-1" type="password" />
      </div>
      <div class="flex gap-2 justify-between bg-blue-100 p-5">
        <span class="text-black">
          <RouterLink class="text-blue-700" :to="{ name: 'login' }">Goto Login</RouterLink>
        </span>
        <button @click.prevent="signup" class="m-1 border-black border-1 px-2 text-black">
          Signup
        </button>
      </div>
    </div>
  </div>
</template>
