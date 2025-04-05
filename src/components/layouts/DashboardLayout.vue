<script setup lang="ts">
import NavBar from '../NavBar.vue'
import SideBar from '../SideBar.vue'
</script>
<template>
  <div>
    <NavBar></NavBar>
    <div class="flex">
      <SideBar></SideBar>
      <RouterView></RouterView>
    </div>
  </div>
</template>
