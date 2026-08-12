---
name: bundlers-code-splitting-profesional
description: Code splitting · nivel Profesional · Bundlers y tooling. Dividís el bundle en partes que cargan bajo demanda para reducir el payload inicial. Objetivo del nivel: Diseñar la estrategia de división del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "code-splitting"
  nivel: profesional
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Code splitting — Profesional

## Qué hace este skill

Dividís el bundle en partes que cargan bajo demanda para reducir el payload inicial. En este nivel se entrega: **Diseñar la estrategia de división del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Code splitting** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la estrategia de chunks por capa y dependencia
2. Configurar prefetch/preload inteligente de chunks
3. Automatizar el análisis de los chunks en CI
4. Documentar la estrategia de code splitting

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de división del proyecto | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Definir la estrategia de chunks por capa y dependencia · Configurar prefetch/preload inteligente de chunks · Automatizar el análisis de los chunks en CI · Documentar la estrategia de code splitting | lista | sí | 3-4 pasos |
| $criterios_clave | El presupuesto por chunk se respeta · El análisis de chunks corre en cada release | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estrategia de code splitting del proyecto: división por capas, prefetch de los chunks probables, análisis automático en CI y presupuesto por chunk. | texto | no | "Code splitting" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El presupuesto por chunk se respeta
- [ ] El análisis de chunks corre en cada release

## Ejemplos de prompts

- "Diseñá la estrategia de code splitting del proyecto: división por capas, prefetch de los chunks probables, análisis automático en CI y presupuesto por chunk."
- "Aplica Code splitting (nivel profesional) a mi trabajo actual con Bundlers y tooling: prioriza El presupuesto por chunk se respeta"
- "Revisa mi bundlers y dime qué pasos de Code splitting me faltan en este nivel"