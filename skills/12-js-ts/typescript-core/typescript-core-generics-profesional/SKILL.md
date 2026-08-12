---
name: typescript-core-generics-profesional
description: Generics · nivel Profesional · TypeScript: tipado profesional. Escribís funciones y tipos reutilizables que mantienen la relación entre entradas y salidas. Objetivo del nivel: Diseñar APIs genéricas expresivas y seguras
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "generics"
  nivel: profesional
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Generics — Profesional

## Qué hace este skill

Escribís funciones y tipos reutilizables que mantienen la relación entre entradas y salidas. En este nivel se entrega: **Diseñar APIs genéricas expresivas y seguras**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Generics** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un sistema de validación genérica con inferencia
2. Tipar builders con composición genérica
3. Escribir types de alto orden para transformaciones
4. Documentar las invariantes que los generics garantizan

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar APIs genéricas expresivas y seguras | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear un sistema de validación genérica con inferencia · Tipar builders con composición genérica · Escribir types de alto orden para transformaciones · Documentar las invariantes que los generics garantizan | lista | sí | 3-4 pasos |
| $criterios_clave | Los tipos inferidos en el uso son exactos y sin any · Las APIs genéricas se documentan con ejemplos | lista | sí | calidad verificable |
| $prompt_guia | Diseñá un validador genérico donde schema() infiera el tipo de salida automáticamente: que el dev que lo use nunca tenga que castear el resultado. | texto | no | "Generics" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tipos inferidos en el uso son exactos y sin any
- [ ] Las APIs genéricas se documentan con ejemplos

## Ejemplos de prompts

- "Diseñá un validador genérico donde schema() infiera el tipo de salida automáticamente: que el dev que lo use nunca tenga que castear el resultado."
- "Aplica Generics (nivel profesional) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los tipos inferidos en el uso son exactos y sin any"
- "Revisa mi typescript-core y dime qué pasos de Generics me faltan en este nivel"