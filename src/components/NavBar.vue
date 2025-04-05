<script setup lang="ts">
import { FaRightFromBracket } from '@kalimahapps/vue-icons'
import useAuthStore from '@/store/authStore'

const authStore = useAuthStore()
</script>
<template>
  <div class="flex justify-between pt-3 pr-5 mb-2">
    <span class="text-2xl">{{ authStore.authUser.fullname }}'s dashboard</span>
    <button @click.prevent="authStore.logout" class="text-3xl">
      <FaRightFromBracket />
    </button>
  </div>
  <div class="border-t-1 border-white"></div>
</template>
