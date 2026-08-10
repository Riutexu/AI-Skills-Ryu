# React y Next.js

Skills para construir interfaces y aplicaciones con React y Next.js: desde componentes y estado con Hooks hasta Server Components, optimización y despliegue en producción.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [react-nextjs-basico](react-nextjs-basico/SKILL.md) | Básico | Componentes, JSX, props, estado, eventos, listas y condiciones |
| [react-nextjs-avanzado](react-nextjs-avanzado/SKILL.md) | Avanzado | Hooks, custom hooks, Context, routing y SSR/SSG/ISR con Next.js |
| [react-nextjs-profesional](react-nextjs-profesional/SKILL.md) | Profesional | Server Components, Suspense, rendimiento, testing y arquitectura de componentes |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
|---|---|---|---|
| `tipo_aplicacion` | Página o SPA simple | App con varias rutas y datos | App de producción con SSR/SSG |
| `framework` | React (Vite) o Next.js | Next.js con App Router | Next.js 15+, edge runtime |
| `datos` | Estado local | fetch a API propia | RSC, cache y streaming |
| `rendimiento` | No crítico | useMemo/lazy puntual | Presupuestos, Suspense, Core Web Vitals |
| `testing` | — | Render manual | Vitest + Testing Library (RTL) |
| `despliegue` | Local/Página estática | Vercel | Vercel + entornos + CI |

## Instalación

Copia la carpeta de este tema a tu proyecto o de forma global:

```
xcopy react-nextjs C:\Users\%USERNAME%\.config\opencode\skills\react-nextjs /E /I
```

Compatible también con `.claude/skills/` y `.agents/skills/`.

## Ruta de aprendizaje

1. **Básico**: domina componentes, props y estado antes de pasar de nivel.
2. **Avanzado**: aprende Hooks avanzados y los modos de renderizado de Next.js (SSG → SSR → ISR).
3. **Profesional**: adopta Server Components por defecto, añade testing y presupuestos de rendimiento, y despliega con CI.

## Referencias clave

- [Documentación oficial de React](https://react.dev/)
- [Documentación de Next.js](https://nextjs.org/docs)
- [React Server Components (blog)](https://nextjs.org/blog/visualizing-server-components)
- [Testing Library - React](https://testing-library.com/docs/react-testing-library/intro/)
- [Patrones de rendimiento (web.dev)](https://web.dev/patterns/)