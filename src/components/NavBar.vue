<script setup lang="ts">
import { ref } from 'vue'
import { navConfig, type SectionId } from '../data/profile'

const props = defineProps<{
  isDark: boolean
  activeSection: SectionId
}>()

const emit = defineEmits<{
  (e: 'toggle-theme'): void
}>()

const navItems = navConfig.items
const brandText = navConfig.brand

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>


<template>
  <header
    class="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80"
  >
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
      <!-- Logo / title -->
      <div class="text-lg font-semibold tracking-tight text-emerald-500 dark:text-emerald-400">
        {{ brandText }}
      </div>

      <!-- Desktop nav -->
      <div class="hidden items-center gap-4 md:flex">
        <ul class="flex gap-4 text-sm">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="pb-1 text-sm transition-colors border-b-2"
              :class="
                activeSection === item.id
                  ? 'border-emerald-400 text-emerald-500 dark:text-emerald-400'
                  : 'border-transparent text-slate-700 hover:text-emerald-500 hover:border-emerald-400 dark:text-slate-300'
              "
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Theme toggle -->
        <button
          type="button"
          @click="emit('toggle-theme')"
          class="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium shadow-sm transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-emerald-400"
        >
          <span v-if="isDark">☀ Light</span>
          <span v-else>🌙 Dark</span>
        </button>
      </div>

      <!-- Mobile buttons -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          type="button"
          @click="emit('toggle-theme')"
          class="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium shadow-sm transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900"
        >
          <span v-if="isDark">☀</span>
          <span v-else>🌙</span>
        </button>

        <button
          type="button"
          @click="toggleMenu"
          class="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white p-2 text-slate-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          <span v-if="!isMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </nav>

    <!-- Mobile dropdown menu -->
    <div
      v-if="isMenuOpen"
      class="border-t border-slate-200 bg-slate-50 px-4 pb-3 pt-2 text-sm dark:border-slate-800 dark:bg-slate-950 md:hidden"
    >
      <ul class="flex flex-col gap-2">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            @click="closeMenu"
            class="block rounded-md px-2 py-1"
            :class="
              activeSection === item.id
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'
                : 'text-slate-800 hover:bg-emerald-500/5 dark:text-slate-200'
            "
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

