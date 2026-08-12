---
name: bundlers-ci-frontend-avanzado
description: CI de frontend · nivel Avanzado · Bundlers y tooling. Automatizás lint, build, tests y auditorías del frontend en el pipeline de CI. Objetivo del nivel: Paralelizar y añadir auditorías al pipeline
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "ci-frontend"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# CI de frontend — Avanzado

## Qué hace este skill

Automatizás lint, build, tests y auditorías del frontend en el pipeline de CI. En este nivel se entrega: **Paralelizar y añadir auditorías al pipeline**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CI de frontend** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Dividir el pipeline en jobs paralelos por etapa
2. Agregar auditorías de dependencias y accesibilidad
3. Subir reportes de tests y coverage
4. Deployar previews de PR a un ambiente de test

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Paralelizar y añadir auditorías al pipeline | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Dividir el pipeline en jobs paralelos por etapa · Agregar auditorías de dependencias y accesibilidad · Subir reportes de tests y coverage · Deployar previews de PR a un ambiente de test | lista | sí | 3-4 pasos |
| $criterios_clave | Los jobs paralelos acortan el tiempo total · Las auditorías bloquean cuando corresponde | lista | sí | calidad verificable |
| $prompt_guia | Optimizá el CI del frontend: jobs paralelos por etapa, auditorías de dependencias y accesibilidad, reportes como artefactos y previews de PR. | texto | no | "CI de frontend" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los jobs paralelos acortan el tiempo total
- [ ] Las auditorías bloquean cuando corresponde

## Ejemplos de prompts

- "Optimizá el CI del frontend: jobs paralelos por etapa, auditorías de dependencias y accesibilidad, reportes como artefactos y previews de PR."
- "Aplica CI de frontend (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza Los jobs paralelos acortan el tiempo total"
- "Revisa mi bundlers y dime qué pasos de CI de frontend me faltan en este nivel"