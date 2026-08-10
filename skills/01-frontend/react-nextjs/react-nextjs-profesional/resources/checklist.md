# Checklist profesional: React y Next.js

- [ ] Server Components por defecto; `"use client"` solo en hojas interactivas
- [ ] Secciones lentas con Suspense + skeletons/loading.tsx (streaming)
- [ ] `next/image` con sizes y `next/font` en producción
- [ ] Librerías pesadas con `dynamic` import; no cargan en el bundle crítico
- [ ] Memoización medida con Profiler, no aplicada por inercia
- [ ] Testing de comportamiento: estados loading/error/data con Vitest + RTL
- [ ] `error.tsx` y `not-found.tsx` en rutas clave
- [ ] CI: lint + typecheck + tests + build + deploy automático (Vercel)
- [ ] Bundle bajo el presupuesto definido (< 170 KB gzip aprox.)
- [ ] Decisiones de arquitectura documentadas (colocation, patrones de datos)