<script setup lang="ts">
import { profile } from "../data/profile"
</script>

<template>
  <section
  id="contact"
  class="min-h-[calc(100vh-150px)] flex flex-col justify-center space-y-10"
>
    <!-- Heading + intro, aligned with other sections -->
      <div class="space-y-2">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">
        Contact
      </h2>
      <p class="max-w-l text-sm text-slate-600 dark:text-slate-300">
        Feel free to reach out about opportunities, collaborations, or just to say hello. 
        I’m open to new and exciting projects and roles.
      </p>
    </div>

    <!-- Card + social buttons -->
   <div
  class="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900"
>


  
      <div class="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
        <!-- Left: details -->

        
        <div class="space-y-2 text-sm text-slate-700 dark:text-slate-200">
          <div>

            <p class="text-[14px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
              Email
            </p>
            <a
              :href="`mailto:${profile.contact.email}`"
              class="mt-1 inline-block text-emerald-600 hover:underline dark:text-emerald-400"
            >
              {{ profile.contact.email }}
            </a>
          </div>

          <div>
            <p class="text-[14px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
            Location
            </p>
            <p class="mt-1">
              {{ profile.contact.location }}
            </p>
          </div>

          <div>
             <p class="text-[14px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
              Availability
            </p>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              {{ profile.contact.availability }}
            </p>
          </div>
        </div>

        <!-- Right: social buttons -->
        <div class="flex flex-col items-start md:items-end gap-3 justify-end">
          <p class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Find me online
          </p>

          <div class="flex flex-wrap gap-3">
            <a
              :href="profile.contact.github"
              target="_blank"
              class="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-800 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:text-emerald-300"
            >
              GitHub →
            </a>
            <a
              :href="profile.contact.linkedin"
              target="_blank"
              class="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-800 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:text-emerald-300"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
