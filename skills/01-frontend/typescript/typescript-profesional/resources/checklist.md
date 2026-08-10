# Checklist profesional: TypeScript

## Tipado estricto
- [ ] `strict: true` (y `noUncheckedIndexedAccess`) habilitados en `tsconfig.json`
- [ ] `any` erradicado o documentado con `eslint` (no-explicit-any)
- [ ] Tipos condicionales y `infer` usados para derivar tipos desde datos, no duplicarlos

## Arquitectura tipada
- [ ] Tipos de dominio definidos una sola vez y compartidos (front/back o apps/paquetes)
- [ ] Tipos de entrada validados en runtime con Zod (o similar) y derivados con `z.infer`
- [ ] Discriminated unions para estados (loading/error/success) en UI y servicios
- [ ] `satisfies` usado para mantener inferencia sin perder checks

## Integración y herramientas
- [ ] API client con genéricos; respuestas tipadas sin cast manual
- [ ] Declaration merging documentado si se extienden librerías (Express Request, módulos CSS)
- [ ] Errores con `Unknown Error` y narrowing antes de usarlos
- [ ] Tipos en la librería pública definidos explícitamente (declaration files)
- [ ] Compilación rápida: `tsc --noEmit` en CI, path aliases configurados, sin `namespace` abusivos