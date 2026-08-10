---
name: react-nextjs-avanzado
description: Usa Hooks avanzados, custom hooks y Context en React, y modos de renderizado de Next.js (SSR/SSG/ISR) con fetch de datos
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "react-nextjs"
  nivel: avanzado
  stack: "React 18, Next.js App Router, TypeScript"
---

# React y Next.js — Nivel avanzado

## Qué hace este skill

Guía para construir aplicaciones React/Next.js con Hooks avanzados (efectos, memoización), custom hooks reutilizables, Context para estado compartido y los modos de renderizado de Next.js (SSG, SSR, ISR) con obtención de datos.

## Cuándo usarlo

- La app tiene varias rutas, datos de API o estado compartido entre componentes.
- Necesitas SSR/SSG/ISR para SEO o velocidad de carga.
- El código tiene lógica reutilizable (fetch, autenticación, paginación) que quieres extraer a hooks.

## Requisitos previos

- Nivel básico de este tema (componentes, props, estado).
- Provecto Next.js (App Router): `npx create-next-app@latest`.
- JavaScript moderno (async/await, fetch, destructuring).

## Workflow paso a paso

1. Crea el proyecto con `create-next-app` (TypeScript, App Router).
2. Mapea páginas a rutas del App Router: `app/page.tsx`, `app/productos/[id]/page.tsx`.
3. Extrae lógica repetida a **custom hooks** (`usePaginacion`, `useFetch`) y úsalos en más de un componente.
4. Usa `useEffect` solo para efectos externos (subscriptions, timing); en App Router usa Server Components o fetch directo donde puedas.
5. Para datos de API: `fetch` en un Server Component (por defecto en Next.js) y pasa datos como props.
6. Elige modo de renderizado:
   - **SSG** (`generateStaticParams`): contenido que apenas cambia.
   - **ISR** (`revalidate`): regeneración periódica en segundo plano.
   - **SSR** (fetch dinámico): datos personales o en tiempo real.
7. Comparte estado entre componentes con **Context** (`createContext` + `useContext`) para carrito, tema o usuario; para lógica global considera Zustand (ligero).
8. Memoiza solo lo necesario: `useMemo` en cálculos caros, `useCallback` para callbacks pasados a hijos memoizados, `React.memo` en listas largas.
9. Usa `useRef` para valores que no deben re-renderizar o para referencias al DOM (focus, medidas).
10. Maneja estados de carga y error en fetch (promise con `loading/error/data`), nunca `console.log` como estado.
11. Prueba los tres modos de renderizado midiendo con `next build` (los prerendered aparecen como `○` o `●`).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `modo_renderizado` | SSG, SSR o ISR | texto | sí | "ISR con revalidate=3600" |
| `fuente_datos` | API, BD o CMS | texto | no | "api.example.com/v1" |
| `estado_global` | Context, Zustand o ninguno | texto | no | "Context (carrito)" |
| `hooks` | Custom hooks deseados | lista | no | usePaginacion, useAuth |
| `lenguaje` | TS o JS | texto | no | "TypeScript" |
| `criterios_seo` | Páginas que necesitan SEO | lista | no | "/", "/productos" |

## Reglas y checklist

- [ ] Custom hooks (empiezan con `use`) en carpeta `hooks/` o `lib/hooks/`
- [ ] API keys solo en variables de entorno (`NEXT_PUBLIC_` solo si es pública)
- [ ] Sin `useEffect` para derivar datos de otras variables (mejor memo o fetch directo)
- [ ] `generateStaticParams` + `revalidate` para ISR correctos
- [ ] Context sin componentes gigantes: separa provider y hooks consumidores
- [ ] Hooks con cleanup (subscriptions, timeouts, abort de fetch)

## Ejemplos de prompts

- "Crea una página de productos con SSG y detalles con ISR de 1 hora"
- "Extrae mi lógica de fetch a un custom hook useFetch con estados loading/error/data"
- "Implementa un carrito compartido con Context entre productos y checkout"
- "Arregla el bug del efecto infinito en useEffect que llama a setState"
- "Convierte esta página a Server Component y muéveme los datos al servidor"

## Plantillas y recursos

- [templates/usePaginacion.ts](templates/usePaginacion.ts) — custom hook de paginación
- [templates/pagina-productos.tsx](templates/pagina-productos.tsx) — página Next con SSG + ISR
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel