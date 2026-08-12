---
name: javascript-moderno-objetos-destructuring-profesional
description: Objetos y destructuring · nivel Profesional · JavaScript moderno: ES2024. Creás, clonás y desestructurás objetos con shorthand, spread y defaults robustos. Objetivo del nivel: Diseñar contratos de datos con shape validado y actualización inmutable
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "objetos-destructuring"
  nivel: profesional
  stack: "Node 22, ESM, Vite, Vitest"
---

# Objetos y destructuring — Profesional

## Qué hace este skill

Creás, clonás y desestructurás objetos con shorthand, spread y defaults robustos. En este nivel se entrega: **Diseñar contratos de datos con shape validado y actualización inmutable**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Objetos y destructuring** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear utilidades de deep clone seguras para datos anidados
2. Definir un sistema de defaults con merge profundo
3. Implementar actualizaciones inmutables en estructuras complejas
4. Validar el shape de objetos recibidos del backend con guards

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar contratos de datos con shape validado y actualización inmutable | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Crear utilidades de deep clone seguras para datos anidados · Definir un sistema de defaults con merge profundo · Implementar actualizaciones inmutables en estructuras complejas · Validar el shape de objetos recibidos del backend con guards | lista | sí | 3-4 pasos |
| $criterios_clave | Las utilidades manejan circular references sin colgarse · Los shapes validados rechazan payloads malformados | lista | sí | calidad verificable |
| $prompt_guia | El backend PHP nos manda a veces campos con null, a veces sin ellos: creá un merge profundo con defaults y validá el shape antes de renderizar. Que no reviente la pantalla. | texto | no | "Objetos y destructuring" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las utilidades manejan circular references sin colgarse
- [ ] Los shapes validados rechazan payloads malformados

## Ejemplos de prompts

- "El backend PHP nos manda a veces campos con null, a veces sin ellos: creá un merge profundo con defaults y validá el shape antes de renderizar. Que no reviente la pantalla."
- "Aplica Objetos y destructuring (nivel profesional) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Las utilidades manejan circular references sin colgarse"
- "Revisa mi javascript-moderno y dime qué pasos de Objetos y destructuring me faltan en este nivel"