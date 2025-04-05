<script setup lang="ts">
import { ref } from 'vue'

const links = ref([
  {
    text: 'Your URLs',
    route: { name: 'dashboard' },
  },
])
</script>

<template>
  <div class="w-3xs h-screen border-1 border-white">
    <div class="pt-2 pl-2">
      <RouterLink v-for="ll in links" :key="ll.text" class="text-2xl" :to="ll.route">{{ ll.text }}</RouterLink>
    </div>
  </div>
</template>
