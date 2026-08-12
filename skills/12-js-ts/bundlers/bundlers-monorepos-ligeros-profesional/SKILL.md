---
name: bundlers-monorepos-ligeros-profesional
description: Monorepos ligeros · nivel Profesional · Bundlers y tooling. Organizás múltiples paquetes en un monorepo con workspaces sin herramientas pesadas. Objetivo del nivel: Diseñar la estructura del monorepo del equipo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "monorepos-ligeros"
  nivel: profesional
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Monorepos ligeros — Profesional

## Qué hace este skill

Organizás múltiples paquetes en un monorepo con workspaces sin herramientas pesadas. En este nivel se entrega: **Diseñar la estructura del monorepo del equipo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Monorepos ligeros** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la convención de paquetes y límites del monorepo
2. Orquestar builds y tests de todo el repo en CI
3. Implementar versionado y releases por paquete
4. Documentar la estrategia del monorepo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estructura del monorepo del equipo | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Definir la convención de paquetes y límites del monorepo · Orquestar builds y tests de todo el repo en CI · Implementar versionado y releases por paquete · Documentar la estrategia del monorepo | lista | sí | 3-4 pasos |
| $criterios_clave | El CI orquesta los paquetes según su dependencia · Los releases por paquete están documentados | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estructura del monorepo: convenciones de paquetes, orquestación del CI por dependencias, releases individuales y documentación para el equipo. | texto | no | "Monorepos ligeros" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El CI orquesta los paquetes según su dependencia
- [ ] Los releases por paquete están documentados

## Ejemplos de prompts

- "Diseñá la estructura del monorepo: convenciones de paquetes, orquestación del CI por dependencias, releases individuales y documentación para el equipo."
- "Aplica Monorepos ligeros (nivel profesional) a mi trabajo actual con Bundlers y tooling: prioriza El CI orquesta los paquetes según su dependencia"
- "Revisa mi bundlers y dime qué pasos de Monorepos ligeros me faltan en este nivel"