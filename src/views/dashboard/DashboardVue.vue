<script setup lang="ts">
import useAuthStore from '@/store/authStore'

const authStore = useAuthStore()
</script>
<template>
  <div class="about">
    <h1>Dashboard</h1>
    <div>
      <button @click.prevent="authStore.logout" class="m-1 border-white border-1 px-2 text-white">Logout</button>
    </div>
  </div>
</template>
