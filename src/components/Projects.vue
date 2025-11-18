<script setup lang="ts">
import { ref, computed } from "vue"
import { profile, type Project } from "../data/profile"

const projects: Project[] = profile.projects

const currentIndex = ref(0)
const currentProject = computed(() => projects[currentIndex.value])

function goNext() {
  currentIndex.value = (currentIndex.value + 1) % projects.length
}

function goPrev() {
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length
}
</script>

<template>
   <section
    id="projects"
    class="pt-10 pb-16 min-h-[calc(100vh-150px)] flex flex-col justify-start md:justify-center space-y-6"
  >
    <div class="flex items-baseline justify-between gap-4">
      <div>
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">
          Projects
        </h2>
      
      </div>

      <!-- Nav buttons -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="goPrev"
          class="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium shadow-sm transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          ◀
        </button>
        <button
          type="button"
          @click="goNext"
          class="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium shadow-sm transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          ▶
        </button>
      </div>
    </div>

    <!-- Project card -->
    <div class="relative">
      <article
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="flex items-start gap-4">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img
              :src="currentProject.logo"
              :alt="currentProject.title"
              class="h-12 w-12 rounded-lg object-contain bg-slate-100 dark:bg-slate-800 p-1"
            />
          </div>

          <!-- Main content -->
          <div class="flex-1 space-y-1">
            <div class="flex flex-wrap items-baseline gap-2 justify-between">
              <h3 class="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50">
               <a :href = "currentProject.link"  
               target="_blank"
               rel="noopener noreferrer"
               class="font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400 transition"
 >
               
                {{ currentProject.title }}

              </a>
              </h3>
              <span class="text-xs text-slate-500 dark:text-slate-400">
                {{ currentProject.time }}
              </span>
            </div>

            <p class="text-xs font-medium text-emerald-700 dark:text-emerald-300">
              {{ currentProject.company }}
            </p>

            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {{ currentProject.description }}
            </p>

            <div class="mt-3 flex flex-wrap gap-2 text-xs">
              <span
                v-for="stack in currentProject.techStacks"
                :key="stack"
                class="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-700 dark:text-emerald-300"
              >
                {{ stack }}
              </span>
            </div>
          </div>
        </div>
      </article>

      <!-- Indicator dots -->
      <div class="mt-4 flex justify-center gap-2">
        <button
          v-for="(proj, idx) in projects"
          :key="proj.title"
          type="button"
          @click="currentIndex = idx"
          class="h-2 w-2 rounded-full transition"
          :class="idx === currentIndex ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'"
        />
      </div>
    </div>
  </section>
</template>
