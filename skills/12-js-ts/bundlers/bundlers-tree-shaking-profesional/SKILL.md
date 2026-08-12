---
name: bundlers-tree-shaking-profesional
description: Tree shaking · nivel Profesional · Bundlers y tooling. Eliminás código muerto del bundle con exports estáticos, sideEffects y análisis preciso. Objetivo del nivel: Optimizar el tamaño de los bundles de la organización
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tree-shaking"
  nivel: profesional
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Tree shaking — Profesional

## Qué hace este skill

Eliminás código muerto del bundle con exports estáticos, sideEffects y análisis preciso. En este nivel se entrega: **Optimizar el tamaño de los bundles de la organización**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tree shaking** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la política de exports de las librerías propias
2. Crear validaciones de tamaño en CI
3. Analizar qué dependencias aportan más peso muerto
4. Documentar las reglas de tree shaking

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Optimizar el tamaño de los bundles de la organización | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Definir la política de exports de las librerías propias · Crear validaciones de tamaño en CI · Analizar qué dependencias aportan más peso muerto · Documentar las reglas de tree shaking | lista | sí | 3-4 pasos |
| $criterios_clave | El peso muerto de las librerías propias se controla · Las regresiones de tamaño bloquean el merge | lista | sí | calidad verificable |
| $prompt_guia | Armá el sistema de control de tamaño: política de exports ESM de las librerías internas, gate de tamaño en CI y análisis de dependencias pesadas. | texto | no | "Tree shaking" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El peso muerto de las librerías propias se controla
- [ ] Las regresiones de tamaño bloquean el merge

## Ejemplos de prompts

- "Armá el sistema de control de tamaño: política de exports ESM de las librerías internas, gate de tamaño en CI y análisis de dependencias pesadas."
- "Aplica Tree shaking (nivel profesional) a mi trabajo actual con Bundlers y tooling: prioriza El peso muerto de las librerías propias se controla"
- "Revisa mi bundlers y dime qué pasos de Tree shaking me faltan en este nivel"