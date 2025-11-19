<script setup lang="ts">
import { ref, computed } from "vue"
import { skillGroups, type SkillGroupId } from "../data/profile"

// all data comes from profile.ts
const groups = skillGroups

// UI state: which group is active
const selectedId = ref<SkillGroupId>(groups[0]?.id ?? "frontend")

const selectedGroup = computed(() => {
  return groups.find(g => g.id === selectedId.value) ?? groups[0]
})

function selectGroup(id: SkillGroupId) {
  selectedId.value = id
}
</script>
<template>
  <section id="skills" class="pt-10 pb-20 space-y-6">
    <div class="space-y-2">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">
        Skills
      </h2>
      <p class="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
        Explore my skills grouped by area. Click a category to focus on that field.
      </p>
    </div>

    <!-- Group selector buttons -->
    <div class="flex flex-wrap gap-3">
      <button
        v-for="group in groups"
        :key="group.id"
        type="button"
        @click="selectGroup(group.id)"
        class="rounded-full border px-4 py-2 text-xs font-medium transition focus-visible:outline-none"
        :class="[
          selectedId === group.id
            ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 shadow-md dark:text-emerald-300'
            : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
        ]"
      >
        {{ group.label }}
      </button>
    </div>

    <!-- Selected group detail -->
    <div
      v-if="selectedGroup"
      class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900"
    >
      <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-50">
        {{ selectedGroup.label }}
      </h3>
      <p
        v-if="selectedGroup.subtitle"
        class="mt-1 text-sm text-slate-600 dark:text-slate-300"
      >
        {{ selectedGroup.subtitle }}
      </p>

      <ul class="mt-4 flex flex-wrap gap-2 text-xs">
        <li
          v-for="item in selectedGroup.items"
          :key="item"
          class="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-700 dark:text-emerald-300"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
