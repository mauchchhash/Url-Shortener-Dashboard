<script setup lang="ts">
import { ref } from 'vue'
import CreateShortUrlModal from '@/components/shortUrl/CreateShortUrlModal.vue'

const newShortUrlModalOpen = ref(false)
</script>

<template>
  <div>
    <button @click.prevent="() => (newShortUrlModalOpen = !newShortUrlModalOpen)" class="m-1 border-white border-1 px-2 text-whiteack">
      New Short Url
    </button>
  </div>
  <CreateShortUrlModal v-if="newShortUrlModalOpen"></CreateShortUrlModal>
</template>
