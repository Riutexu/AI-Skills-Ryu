---
name: bundlers-monorepos-ligeros-avanzado
description: Monorepos ligeros · nivel Avanzado · Bundlers y tooling. Organizás múltiples paquetes en un monorepo con workspaces sin herramientas pesadas. Objetivo del nivel: Compartir configuración y gestionar dependencias entre paquetes
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "monorepos-ligeros"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Monorepos ligeros — Avanzado

## Qué hace este skill

Organizás múltiples paquetes en un monorepo con workspaces sin herramientas pesadas. En este nivel se entrega: **Compartir configuración y gestionar dependencias entre paquetes**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Monorepos ligeros** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Publicar y consumir paquetes internos con file: o workspace:
2. Compartir configs de lint, TS y Vite entre paquetes
3. Usar scripts orquestados desde la raíz
4. Gestionar versiones coordinadas entre paquetes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Compartir configuración y gestionar dependencias entre paquetes | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Publicar y consumir paquetes internos con file: o workspace: · Compartir configs de lint, TS y Vite entre paquetes · Usar scripts orquestados desde la raíz · Gestionar versiones coordinadas entre paquetes | lista | sí | 3-4 pasos |
| $criterios_clave | Las configs compartidas no se duplican · Los paquetes internos se versionan coordinados | lista | sí | calidad verificable |
| $prompt_guia | El monorepo tiene configs duplicadas: centralizá ESLint, TS y Vite en paquetes compartidos y coordiná las versiones de los paquetes internos. | texto | no | "Monorepos ligeros" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las configs compartidas no se duplican
- [ ] Los paquetes internos se versionan coordinados

## Ejemplos de prompts

- "El monorepo tiene configs duplicadas: centralizá ESLint, TS y Vite en paquetes compartidos y coordiná las versiones de los paquetes internos."
- "Aplica Monorepos ligeros (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza Las configs compartidas no se duplican"
- "Revisa mi bundlers y dime qué pasos de Monorepos ligeros me faltan en este nivel"