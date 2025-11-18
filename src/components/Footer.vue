<script setup lang="ts">
import { profile } from "../data/profile"
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<template>
  <footer
    class="fixed bottom-0 left-0 right-0 w-full border-t border-slate-200 bg-slate-50/90 px-4 py-3 text-xs text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-400"
  >
    <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2">
      <div class="flex items-center gap-2">
        <span class="font-medium text-slate-700 dark:text-slate-200">{{ profile.name }}</span>
        <span>•</span>
        <span>{{ profile.contact.location }}</span>
      </div>

        <p class="text-xs text-slate-500 dark:text-slate-400">
      © {{ new Date().getFullYear() }} {{ profile.name }} — Built with Vue & Tailwind
    </p>
      <div class="flex items-center gap-3">
        <a
          :href="profile.contact.github"
          target="_blank"
          class="hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          GitHub
        </a>
        <a
          :href="profile.contact.linkedin"
          target="_blank"
          class="hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          LinkedIn
        </a>  <!-- Up Arrow Button -->
        <button
    @click="scrollToTop"
    class="fixed bottom-12 right-4 md:bottom-18 md:right-8 flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400 bg-emerald-500/90 text-white text-lg shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950"
    title="Back to top"
  >
    ↑
  </button>
      </div>
    </div>
  </footer>
</template>
