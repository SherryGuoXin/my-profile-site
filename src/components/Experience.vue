# experience.vue 

<script setup lang="ts">
import { profile, type Experience } from "../data/profile"

const experiences: Experience[] = profile.experiences
</script>

<template>
  <section id="experience" 
  class="pt-10 pb-16 min-h-[calc(100vh-150px)] flex flex-col 
  justify-start md:justify-center space-y-6" >
    <div class="space-y-2">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">
        Work Experience
      </h2>
      <p class="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
        Recent professional experience where I’ve built, maintained, and improved real-world systems.
      </p>
    </div>

    <div class="space-y-4">
      <article
        v-for="exp in experiences"
        :key="exp.company + exp.time"
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="flex items-start gap-4">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img
              :src="exp.logo"
              :alt="exp.company"
              class="h-12 w-12 rounded-lg object-contain bg-slate-100 p-1 dark:bg-slate-800"
            />
          </div>

          <!-- Main content -->
          <div class="flex-1 space-y-2">
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                 
                <h3 class="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50">
                  <a
    :href="exp.link"
    target="_blank"
    rel="noopener noreferrer"
    class="font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400 transition"
  > {{ exp.title }}</a>
                </h3>
                  
               <p class="text-sm text-slate-600 dark:text-slate-300">
  <a
   :href="exp.link" 
    target="_blank"
    rel="noopener noreferrer"
    class="font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400 transition"
  >
    {{ exp.company }}
  </a>
  <span class="text-slate-500 dark:text-slate-400"> • {{ exp.location }}</span>
</p>


              </div>
              <span class="text-xs text-slate-500 dark:text-slate-400">
                {{ exp.time }}
              </span>
            </div>

            <p class="text-sm text-slate-600 dark:text-slate-300">
              {{ exp.summary }}
            </p>

            <ul class="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li v-for="line in exp.bullets" :key="line">
                {{ line }}
              </li>
            </ul>

            <div class="mt-3 flex flex-wrap gap-2 text-xs">
              <span
                v-for="tech in exp.techStacks"
                :key="tech"
                class="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-700 dark:text-emerald-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
