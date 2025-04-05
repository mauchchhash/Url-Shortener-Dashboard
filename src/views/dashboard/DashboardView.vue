<script setup lang="ts">
import useAuthStore from '@/store/authStore'

const authStore = useAuthStore()
</script>
<template>
  <div>{{ authStore.authUser.email }}</div>
</template>
