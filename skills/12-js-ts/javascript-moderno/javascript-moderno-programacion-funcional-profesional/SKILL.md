---
name: javascript-moderno-programacion-funcional-profesional
description: Programación funcional · nivel Profesional · JavaScript moderno: ES2024. Aplicás pureza, inmutabilidad y composición de funciones en el código de producción. Objetivo del nivel: Introducir estilo funcional al equipo con criterios de diseño
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "programacion-funcional"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# Programación funcional — Profesional

## Qué hace este skill

Aplicás pureza, inmutabilidad y composición de funciones en el código de producción. En este nivel se entrega: **Introducir estilo funcional al equipo con criterios de diseño**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Programación funcional** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir reglas de pureza e inmutabilidad para el codebase
2. Implementar Result/Either simple para manejo de errores
3. Crear librería interna de helpers funcionales documentada
4. Migrar un módulo crítico a estilo funcional con tests

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Introducir estilo funcional al equipo con criterios de diseño | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Definir reglas de pureza e inmutabilidad para el codebase · Implementar Result/Either simple para manejo de errores · Crear librería interna de helpers funcionales documentada · Migrar un módulo crítico a estilo funcional con tests | lista | sí | 3-4 pasos |
| $criterios_clave | Las reglas están documentadas y aplicadas en el lint · El módulo migrado mantiene 100% de cobertura de comportamiento | lista | sí | calidad verificable |
| $prompt_guia | Escribime una guía corta de estilo funcional para el equipo y migrá el módulo de carrito a funciones puras con un Result simple. El reviewer es clásico de PHP, seducilo con ejemplos. | texto | no | "Programación funcional" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las reglas están documentadas y aplicadas en el lint
- [ ] El módulo migrado mantiene 100% de cobertura de comportamiento

## Ejemplos de prompts

- "Escribime una guía corta de estilo funcional para el equipo y migrá el módulo de carrito a funciones puras con un Result simple. El reviewer es clásico de PHP, seducilo con ejemplos."
- "Aplica Programación funcional (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Las reglas están documentadas y aplicadas en el lint"
- "Revisa mi javascript-moderno y dime qué pasos de Programación funcional me faltan en este nivel"