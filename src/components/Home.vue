<script setup lang="ts">

import { profile } from "../data/profile"
</script>
<template>
  <section
    id="home"
    class="grid gap-10 md:grid-cols-2 items-center"  >
    <!-- Portrait -->
    <div class="flex justify-center md:justify-left">
      <img
        :src="profile.portrait"
        :alt="profile.name"
        class="h-52 w-52 rounded-2xl object-cover border-4 border-emerald-400 shadow-xl md:h-52 md:w-52"
      />
    </div>

    <!-- Right: name, title, description, links -->
    <div class="text-center md:text-left flex flex-col gap-4">
      <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        {{ profile.name }}
      </h1>

      <h2 class="text-lg font-medium text-emerald-600 dark:text-emerald-400">
        {{ profile.title }}
      </h2>

      <p
        class="max-w-xl text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
      >
        {{ profile.description }}
      </p>

      <!-- Links buttons -->
      <div class="flex gap-3 justify-center md:justify-start mt-3 flex-wrap">
        <a
          v-for="link in profile.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          class="rounded-full border border-emerald-400 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-400 hover:text-slate-900 transition dark:text-emerald-300 dark:hover:bg-emerald-400 dark:hover:text-slate-950"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>
