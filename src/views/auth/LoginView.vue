<script setup lang="ts"></script>

<template>
  <div class="flex h-screen">
    <div class="m-auto border-2 rounded-lg">
      <div class="flex gap-2 justify-between bg-blue-100 p-5">
        <span class="text-black">Email</span>
        <input class="border-black border-1" type="text" />
      </div>
      <div class="flex gap-2 justify-between bg-blue-100 p-5">
        <span class="text-black">Password</span>
        <input class="border-black border-1" type="password" />
      </div>
      <div class="flex gap-2 justify-between bg-blue-100 p-5">
        <span class="text-black">
          <RouterLink class="text-blue-700" :to="{ name: 'signup' }">Goto Signup</RouterLink>
        </span>
        <button class="m-1 border-black border-1 px-2 text-black">Login</button>
      </div>
    </div>
  </div>
</template>
