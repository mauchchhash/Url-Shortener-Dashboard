<script setup lang="ts">
import apiClient from '@/setups/apiClient'
import type { ShortUrl } from '@/types/models/ShortUrl'
import { ref } from 'vue'

const longUrl = ref('')
const generatedShortUrlData = ref<ShortUrl | null>(null)

const getShortUrl = () => {
  apiClient
    .post('/api/shortUrls', {
      url: longUrl.value,
    })
    .then((r) => {
      generatedShortUrlData.value = r.data.shortUrl
    })
}
</script>

<template>
  <div class="m-auto border-2 rounded-lg">
    <div class="flex gap-2 justify-between bg-blue-100 p-5">
      <span class="text-black">Long Url</span>
      <input v-model="longUrl" class="text-black border-black border-1 pl-1" type="text" />
    </div>
    <div class="flex gap-2 justify-between bg-blue-100 p-5">
      <button @click.prevent="getShortUrl" class="m-1 border-black border-1 px-2 text-black">Get Short url</button>
    </div>
    <p class="">{{ generatedShortUrlData?.shortUrlSegment }}</p>
  </div>
</template>
