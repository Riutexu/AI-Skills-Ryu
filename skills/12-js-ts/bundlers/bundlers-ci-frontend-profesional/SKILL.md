---
name: bundlers-ci-frontend-profesional
description: CI de frontend · nivel Profesional · Bundlers y tooling. Automatizás lint, build, tests y auditorías del frontend en el pipeline de CI. Objetivo del nivel: Diseñar el pipeline de calidad del frontend completo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "ci-frontend"
  nivel: profesional
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# CI de frontend — Profesional

## Qué hace este skill

Automatizás lint, build, tests y auditorías del frontend en el pipeline de CI. En este nivel se entrega: **Diseñar el pipeline de calidad del frontend completo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CI de frontend** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el gate de merge completo del frontend
2. Integrar E2E y auditorías de performance al flujo
3. Gestionar los ambientes de test y staging desde el CI
4. Documentar el pipeline y sus tiempos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el pipeline de calidad del frontend completo | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Definir el gate de merge completo del frontend · Integrar E2E y auditorías de performance al flujo · Gestionar los ambientes de test y staging desde el CI · Documentar el pipeline y sus tiempos | lista | sí | 3-4 pasos |
| $criterios_clave | El gate de merge cubre calidad, seguridad y performance · Los ambientes se despliegan desde el pipeline | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el pipeline de calidad completo del frontend: gate de merge (lint, type, tests, E2E, auditorías), despliegue automático a staging y documentación por etapa. | texto | no | "CI de frontend" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El gate de merge cubre calidad, seguridad y performance
- [ ] Los ambientes se despliegan desde el pipeline

## Ejemplos de prompts

- "Diseñá el pipeline de calidad completo del frontend: gate de merge (lint, type, tests, E2E, auditorías), despliegue automático a staging y documentación por etapa."
- "Aplica CI de frontend (nivel profesional) a mi trabajo actual con Bundlers y tooling: prioriza El gate de merge cubre calidad, seguridad y performance"
- "Revisa mi bundlers y dime qué pasos de CI de frontend me faltan en este nivel"