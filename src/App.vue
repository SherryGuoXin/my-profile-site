<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
const name = "Sherry Guo"

</script>

<template>
  <div>


  </div>
    <div class="min-h-screen flex items-center justify-center">
    <h1 class="text-4xl font-bold text-emerald-400">
       {{ name }} 
    </h1>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
