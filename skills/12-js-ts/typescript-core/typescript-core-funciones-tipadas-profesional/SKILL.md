---
name: typescript-core-funciones-tipadas-profesional
description: Funciones tipadas · nivel Profesional · TypeScript: tipado profesional. Tipás firmas, sobrecargas, rest params y funciones como valores con exactitud. Objetivo del nivel: Diseñar firmas que el compilador verifique en todo el codebase
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "funciones-tipadas"
  nivel: profesional
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Funciones tipadas — Profesional

## Qué hace este skill

Tipás firmas, sobrecargas, rest params y funciones como valores con exactitud. En este nivel se entrega: **Diseñar firmas que el compilador verifique en todo el codebase**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones tipadas** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear tipos de función para la capa de servicios
2. Tipar middleware y decorators de funciones
3. Diseñar APIs de eventos con firmas genéricas
4. Auditar el uso de Function y any en firmas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar firmas que el compilador verifique en todo el codebase | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear tipos de función para la capa de servicios · Tipar middleware y decorators de funciones · Diseñar APIs de eventos con firmas genéricas · Auditar el uso de Function y any en firmas | lista | sí | 3-4 pasos |
| $criterios_clave | No hay uso de Function o any en firmas · Los callers fallan al compilar si usan mal la firma | lista | sí | calidad verificable |
| $prompt_guia | Diseñá los tipos de función de la capa de servicios (fetch, mapper, presenter) con composición tipada, y eliminá los Function y any de las firmas del proyecto. | texto | no | "Funciones tipadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No hay uso de Function o any en firmas
- [ ] Los callers fallan al compilar si usan mal la firma

## Ejemplos de prompts

- "Diseñá los tipos de función de la capa de servicios (fetch, mapper, presenter) con composición tipada, y eliminá los Function y any de las firmas del proyecto."
- "Aplica Funciones tipadas (nivel profesional) a mi trabajo actual con TypeScript: tipado profesional: prioriza No hay uso de Function o any en firmas"
- "Revisa mi typescript-core y dime qué pasos de Funciones tipadas me faltan en este nivel"