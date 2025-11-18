<script setup lang="ts">
import { computed } from "vue"
import { loadLogos } from "../utils/logos"

const props = defineProps<{ isDark: boolean }>()

const images = computed(() => loadLogos(props.isDark ? "dark" : "light"))
</script>

<template>
  <div
    class="border-t border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/80"
  >
    <div class="mx-auto max-w-5xl overflow-hidden py-4">
      <div class="logos-track flex gap-8">
        <template v-for="n in 2" :key="n">
          <img
            v-for="src in images"
            :key="`${n}-${src}`"
            :src="src"
            alt=""
            class="h-8 w-auto opacity-70 hover:opacity-100 transition"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes logoslide {
  0% { transform: translateX(0) }
  100% { transform: translateX(-50%) }
}

.logos-track {
  animation: logoslide 24s linear infinite;
}
</style>
