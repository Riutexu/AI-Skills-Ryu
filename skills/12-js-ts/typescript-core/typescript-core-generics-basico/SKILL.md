---
name: typescript-core-generics-basico
description: Generics · nivel Básico · TypeScript: tipado profesional. Escribís funciones y tipos reutilizables que mantienen la relación entre entradas y salidas. Objetivo del nivel: Escribir funciones genéricas simples con un parámetro de tipo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "generics"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Generics — Básico

## Qué hace este skill

Escribís funciones y tipos reutilizables que mantienen la relación entre entradas y salidas. En este nivel se entrega: **Escribir funciones genéricas simples con un parámetro de tipo**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Generics** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una función identity genérica
2. Tipar un wrapper de respuesta con generics
3. Usar arrays genéricos en funciones
4. Inferir tipos desde el uso sin anotar explícito

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir funciones genéricas simples con un parámetro de tipo | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear una función identity genérica · Tipar un wrapper de respuesta con generics · Usar arrays genéricos en funciones · Inferir tipos desde el uso sin anotar explícito | lista | sí | 3-4 pasos |
| $criterios_clave | Las funciones genéricas preservan el tipo de entrada · No hay casts innecesarios al usar la función | lista | sí | calidad verificable |
| $prompt_guia | Creá un wrapper apiFetch<T> que devuelva Promise<T> tipando el JSON de la respuesta, y usalo para los endpoints de usuarios y pedidos. | texto | no | "Generics" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las funciones genéricas preservan el tipo de entrada
- [ ] No hay casts innecesarios al usar la función

## Ejemplos de prompts

- "Creá un wrapper apiFetch<T> que devuelva Promise<T> tipando el JSON de la respuesta, y usalo para los endpoints de usuarios y pedidos."
- "Aplica Generics (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza Las funciones genéricas preservan el tipo de entrada"
- "Revisa mi typescript-core y dime qué pasos de Generics me faltan en este nivel"