---
name: javascript-moderno-esm-modulos-profesional
description: ESM y módulos · nivel Profesional · JavaScript moderno: ES2024. Organizás el código en módulos ES con imports/exports explícitos y resolución de dependencias clara. Objetivo del nivel: Diseñar arquitectura de módulos con boundaries y zero side effects
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "esm-modulos"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# ESM y módulos — Profesional

## Qué hace este skill

Organizás el código en módulos ES con imports/exports explícitos y resolución de dependencias clara. En este nivel se entrega: **Diseñar arquitectura de módulos con boundaries y zero side effects**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **ESM y módulos** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir boundaries entre módulos y documentarlos en JSDoc
2. Eliminar side effects al importar cada módulo
3. Implementar inyección de dependencias simple entre módulos
4. Validar el grafo de módulos con una herramienta de análisis

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar arquitectura de módulos con boundaries y zero side effects | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Definir boundaries entre módulos y documentarlos en JSDoc · Eliminar side effects al importar cada módulo · Implementar inyección de dependencias simple entre módulos · Validar el grafo de módulos con una herramienta de análisis | lista | sí | 3-4 pasos |
| $criterios_clave | Importar cualquier módulo no produce efectos colaterales · El grafo de dependencias se mantiene acíclico y testeable | lista | sí | calidad verificable |
| $prompt_guia | Revisá la arquitectura de módulos de esta SPA vanilla: proponé boundaries, eliminá los side effects al import y documentá el grafo en JSDoc. El equipo tira commits a las 3 am, tené piedad. | texto | no | "ESM y módulos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Importar cualquier módulo no produce efectos colaterales
- [ ] El grafo de dependencias se mantiene acíclico y testeable

## Ejemplos de prompts

- "Revisá la arquitectura de módulos de esta SPA vanilla: proponé boundaries, eliminá los side effects al import y documentá el grafo en JSDoc. El equipo tira commits a las 3 am, tené piedad."
- "Aplica ESM y módulos (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Importar cualquier módulo no produce efectos colaterales"
- "Revisa mi javascript-moderno y dime qué pasos de ESM y módulos me faltan en este nivel"