<script setup lang="ts">
import { ref, computed } from "vue"
import { profile, type SkillGroup, type SkillGroupId } from "../data/profile"

const groups: SkillGroup[] = profile.skills
const selectedId = ref<SkillGroupId>(groups[0].id)

const selectedGroup = computed(() =>
  groups.find((g) => g.id === selectedId.value) ?? groups[0]
)

function selectGroup(id: SkillGroupId) {
  selectedId.value = id
}
</script>

<template>
  <section id="skills" class="space-y-6 pt-10">
    <div class="space-y-1">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50">
        Technical Skills
      </h2>
      <p class="text-sm text-slate-600 dark:text-slate-300">
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
            : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200',
          'focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950',
        ]"
      >
        {{ group.label }}
      </button>
    </div>

    <!-- Selected group card -->
    <div
      class="rounded-2xl border bg-white p-5 shadow-sm transition-all duration-200 dark:bg-slate-900"
      :class="
        selectedGroup
          ? 'border-emerald-500 shadow-emerald-500/20'
          : 'border-slate-200 dark:border-slate-800'
      "
      tabindex="0"
    >
      <div class="flex items-baseline justify-between gap-2 mb-3">
        <div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-50">
            {{ selectedGroup.label }}
          </h3>
          <p
            v-if="selectedGroup.subtitle"
            class="text-xs text-slate-500 dark:text-slate-400"
          >
            {{ selectedGroup.subtitle }}
          </p>
        </div>

        <span class="text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
          {{ selectedGroup.items.length }} skills
        </span>
      </div>

      <!-- Skills tags -->
      <div class="flex flex-wrap gap-2 mt-2">
        <span
          v-for="item in selectedGroup.items"
          :key="item"
          class="inline-flex items-center rounded-full border px-3 py-1 text-xs transition"
          :class="[
            'border-slate-200 bg-slate-50 text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100',
            'hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950',
          ]"
          tabindex="0"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>
