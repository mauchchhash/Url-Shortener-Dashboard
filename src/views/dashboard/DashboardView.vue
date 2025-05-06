<script setup lang="ts">
import { onMounted, ref } from 'vue'
import apiClient from '@/setups/apiClient'
import CreateShortUrlModal from '@/components/shortUrl/CreateShortUrlModal.vue'
import type { ShortUrl } from '@/types/models/ShortUrl'

const newShortUrlModalOpen = ref(false)
const shortUrls = ref<Array<ShortUrl>>([])

onMounted(() => {
  apiClient.get('/api/shortUrls').then((r) => {
    shortUrls.value = r.data.shortUrls
  })
})
</script>

<template>
  <div>
    <button @click.prevent="() => (newShortUrlModalOpen = !newShortUrlModalOpen)" class="m-1 border-white border-1 px-2 text-whiteack">
      New Short Url
    </button>
  </div>
  <CreateShortUrlModal v-if="newShortUrlModalOpen"></CreateShortUrlModal>
</template>
