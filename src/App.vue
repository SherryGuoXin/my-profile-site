<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import projects from './components/Projects.vue'
import Skills from "./components/Skills.vue"
import Footer from "./components/Footer.vue"
import Contact from "./components/Contact.vue"
import Experience from "./components/Experience.vue"
import LogosBar from "./components/LogosBar.vue"

type SectionId = 'home' | 'projects' | 'skills' | 'contact'

const activeSection = ref<SectionId>('home')
const isDark = ref(false)


const sectionIds: SectionId[] = ['home', 'projects', 'skills', 'contact']

function updateHtmlThemeClass() {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

function toggleTheme() {
  isDark.value = !isDark.value
}

// scroll-based active section tracking
function handleScroll() {
  let current: SectionId = 'home'

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue

    const rect = el.getBoundingClientRect()
    // 80px from top, roughly below navbar
    if (rect.top <= 80 && rect.bottom >= 80) {
      current = id
      break
    }
  }

  activeSection.value = current
}

onMounted(() => {
  // initial theme: saved or system preference
  const stored = localStorage.getItem('theme')
  if (stored === 'dark') {
    isDark.value = true
  } else if (stored === 'light') {
    isDark.value = false
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
  }

  updateHtmlThemeClass()

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(isDark, (val) => {
  updateHtmlThemeClass()
  localStorage.setItem('theme', val ? 'dark' : 'light')
})
</script>

<template>
  <div class="min-h-screen">
    <NavBar
      :is-dark="isDark"
      :active-section="activeSection"
      @toggle-theme="toggleTheme"
    />

    <main class="mx-auto max-w-5xl px-4 pb-16 pt-10 space-y-24">
      <!-- Home / Hero -->
         
      <section id="home" class="pt-10">
        <Home />
      </section>

  <Experience />

      <!-- Projects -->
      <section id="projects" class="space-y-4">
       <projects />
      </section>

      <!-- Skills -->
      <section id="skills" class="space-y-4">
        
          <Skills />
      </section>
         <!-- LogosBar  <LogosBar :is-dark="isDark" />  --> 

      <!-- Contact -->
      <section id="contact" class="space-y-4">
       <Contact />
      </section>

      
    </main>
    <Footer />
  </div>
</template>
