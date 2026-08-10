# Checklist avanzado: React y Next.js

- [ ] Proyecto Next.js (App Router) corriendo con TypeScript
- [ ] Rutas mapeadas a carpetas del App Router (`/productos/[id]`...)
- [ ] Lógica repetida extraída a custom hooks (empiezan con `use`)
- [ ] `useEffect` solo para efectos externos, con cleanup
- [ ] Fetch de datos en Server Components por defecto
- [ ] SSG con `generateStaticParams` para contenido estable
- [ ] ISR con `revalidate` para contenido semi-dinámico
- [ ] Context separado (provider en layout, hooks en carpeta propia)
- [ ] `useMemo`/`useCallback`/`React.memo` aplicados solo donde aportan
- [ ] Estados loading/error gestionados (no `console.log` como estado)
- [ ] `next build` sin errores y modos de renderizado correctos