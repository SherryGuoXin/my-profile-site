// src/utils/logos.ts

const lightModules = import.meta.glob("/public/logos/light/*.{png,jpg,jpeg,svg}", {
  eager: true,
})

const darkModules = import.meta.glob("/public/logos/dark/*.{png,jpg,jpeg,svg}", {
  eager: true,
})

function format(mods: Record<string, unknown>): string[] {
  return Object.keys(mods).map((path) => path.replace("/public", ""))
}

export function loadLogos(theme: "light" | "dark"): string[] {
  return theme === "light" ? format(lightModules) : format(darkModules)
}
