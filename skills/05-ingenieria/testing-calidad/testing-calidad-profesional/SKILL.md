---
name: testing-calidad-profesional
description: TDD rojo-verde-refactor, piramide de testing con presupuestos de cobertura, E2E con Playwright multi-navegador en CI, visual regression, mutation testing con Stryker, supertest para APIs y estrategias de fixtures. Usar en equipos con testing maduro o software en produccion.
license: MIT
compatibility: opencode
metadata:
  familia: "05-ingenieria"
  tema: "testing-calidad"
  nivel: profesional
  stack: "vitest, playwright, stryker, supertest, github actions, fixtures"
---

# Testing Profesional: TDD, E2E, Mutation Testing y Calidad en CI

## Qué hace este skill

Convierte el testing en una ingeniería con presupuestos y evidencia: TDD rojo-verde-refactor, pirámide de testing con presupuestos de cobertura por capa, E2E multi-navegador con Playwright (incluida visual regression), mutation testing con Stryker para medir la calidad real de las assertions, testing de APIs con supertest y estrategias de datos de test con fixtures versionados. Todo integrado en CI.

## Cuándo usarlo

- Al adoptar TDD en un módulo crítico o en un bug de regresión recurrente.
- Al auditar la cobertura: qué capas están sobretestadas y cuáles desnudas (pirámide).
- Al añadir la primera suite E2E multi-navegador o visual regression.
- Al querer saber si los tests realmente detectan mutaciones (Stryker).
- Al testear APIs HTTP (rutas, estados, contratos) con supertest.
- Al estandarizar datos de prueba y fixtures para tests deterministas.

## Requisitos previos

- Niveles básico y avanzado superados (Vitest + Testing Library + cobertura).
- Aplicación desplegable localmente (`npm run dev` o similar) para E2E.
- Instalables: `npm i -D @playwright/test`, `npm i -D stryker @stryker-mutator/*`, `npm i -D supertest @types/supertest`.
- CI existente (GitHub Actions) para integrar los nuevos stages.

## Workflow paso a paso

1. Audita la pirámide actual: cuenta tests unitarios, de integración y E2E; si la base es tosca y el vértice gordo, plan inversión en unitarios primero. Documenta el diagnóstico.
2. Define presupuestos de cobertura: statements/lines >= 80%, branches >= 70% por módulo y un máximo de E2E (los E2E son caros; no se usan para cubrir lógica). Fija los umbrales en `templates/vitest.presupuestos.config.ts`.
3. Para un módulo crítico, aplica TDD en loop: falla (test rojo que describe el comportamiento), implementa lo mínimo, verifica verde y refactoriza manteniendo verde. Tabla diseñada con el usuario.
4. Monta Playwright: `npm init playwright@latest` con proyectos para chromium/firefox/webkit y servidor web local; copia `templates/login.spec.ts` como base y adapta los selectores a tu app (usa `getByRole`/`getByLabelText` también aquí).
5. Añade visual regression: para vistas clave, genera los screenshots de referencia con `--update-snapshots`, compromételos y deja que CI compare; revisa los diffs en el artefacto de CI.
6. Testea las APIs con supertest: inicia la app en el test (`supertest(app)`), cubre rutas felices, 404, validaciones y estados de error; usa `templates/api.health.test.ts` como plantilla.
7. Ejecuta mutation testing sobre un módulo core: `npx stryker run`, revisa el reporte HTML y clasifica los supervivientes: assertion débil (toca el test), comportamiento no definido (documenta o corrige), caso límite real (añade test). Objetivo: < 30% de mutaciones supervivientes en módulos críticos.
8. Define la estrategia de datos: fixtures JSON versionados en `src/test/fixtures/`, factories tipadas para datos que mutan, y herramientas tipo MSW para la red. Prohibición de datos "inventados dentro del test" repetidos.
9. Integra todo en CI: copia `templates/workflow-ci-tests.yml` (unitarios + cobertura + mutation + E2E multi-navegador con artefactos de screenshot en fallo). E2E corre contra un entorno de test efímero.
10. Configura test sharding en CI si la suite E2E supera ~10 minutos (`--shard` con matriz).
11. Revisa el plan de calidad completo y publica el resultado (cobertura, mutación, E2E) en el reporte final.
12. Marca el checklist profesional, documenta métricas y entrega el plan de calidad al usuario.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| `ruta_core` | Módulo crítico para TDD/mutation | string | Sí | `src/domain/precios.ts` |
| `umbral_cobertura` | Umbral por líneas/branch (%) | object | No | `{lines: 80, branches: 70}` |
| `navegadores` | Proyectos de Playwright a correr | array | No | `["chromium", "firefox", "webkit"]` |
| `ruta_spec_e2e` | Ruta del spec de Playwright | string | No | `e2e/login.spec.ts` |
| `visual_regression` | Activar snapshots de vistas | boolean | No | `true` |
| `mutation_objetivo` | % máximo de supervivientes | number | No | `30` |
| `base_url` | URL base para E2E/API | string | No | `http://localhost:3000` |
| `shards` | Nº de shards para E2E en CI | number | No | `4` |

## Reglas y checklist

- [ ] TDD aplicado con ciclos rojo-verde-refactor reales, sin saltarse el rojo.
- [ ] Pirámide auditada y presupuestos fijados por capa (unitario fuerte, E2E escaso).
- [ ] Umbrals de cobertura cumplidos en CI (no se rebajan para pasar).
- [ ] Playwright con multi-navegador, servidor web y artifacts al fallar.
- [ ] Visual regression: snapshots comprometidos y revisión de diffs en CI.
- [ ] APIs cubiertas con supertest: rutas felices, 404, validaciones y errores.
- [ ] Mutation testing ejecutado sobre módulos core con objetivo <= 30% supervivientes.
- [ ] Fixtures versionados y factories tipadas; sin datos improvisados por test.
- [ ] CI ejecuta: unit + coverage + mutation + E2E con sharding si procede.
- [ ] Reporte de calidad completo con métricas visibles.

## Ejemplos de prompts

- "Aplica TDD al módulo `src/domain/precios.ts`: escribe primero los tests rojos, implementa y refactoriza."
- "Audita mi pirámide de testing y propón dónde invertir según presupuestos de cobertura."
- "Configura Playwright con chromium/firefox/webkit, el spec de login y visual regression de la vista de dashboard."
- "Ejecuta Stryker sobre `precios.ts` y clasifica los mutantes supervivientes con acciones concretas."
- "Crea los tests de API con supertest para `/api/health`, `/api/usuarios` y sus errores, e intégralos al pipeline."

## Plantillas y recursos

- [Presupuestos de cobertura con Vitest](templates/vitest.presupuestos.config.ts)
- [Spec E2E de Playwright multi-navegador](templates/login.spec.ts)
- [Workflow CI de tests (unit + mutation + E2E)](templates/workflow-ci-tests.yml)
- [Test de API con supertest](templates/api.health.test.ts)
- [Checklist de verificación del nivel profesional](resources/checklist.md)