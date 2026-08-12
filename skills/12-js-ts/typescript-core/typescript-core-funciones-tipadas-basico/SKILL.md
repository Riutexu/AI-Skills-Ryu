---
name: typescript-core-funciones-tipadas-basico
description: Funciones tipadas · nivel Básico · TypeScript: tipado profesional. Tipás firmas, sobrecargas, rest params y funciones como valores con exactitud. Objetivo del nivel: Anotar parámetros y retornos con tipos explícitos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "funciones-tipadas"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Funciones tipadas — Básico

## Qué hace este skill

Tipás firmas, sobrecargas, rest params y funciones como valores con exactitud. En este nivel se entrega: **Anotar parámetros y retornos con tipos explícitos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones tipadas** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Tipar parámetros y retorno de funciones
2. Usar parámetros opcionales y defaults tipados
3. Tipar funciones como valores en callbacks
4. Usar el retorno void para funciones sin valor

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Anotar parámetros y retornos con tipos explícitos | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Tipar parámetros y retorno de funciones · Usar parámetros opcionales y defaults tipados · Tipar funciones como valores en callbacks · Usar el retorno void para funciones sin valor | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún parámetro queda sin tipo · Los retornos coinciden con el contrato declarado | lista | sí | calidad verificable |
| $prompt_guia | Tipá las funciones de este módulo de validación: parámetros, retornos y los callbacks que recibe como argumentos. | texto | no | "Funciones tipadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún parámetro queda sin tipo
- [ ] Los retornos coinciden con el contrato declarado

## Ejemplos de prompts

- "Tipá las funciones de este módulo de validación: parámetros, retornos y los callbacks que recibe como argumentos."
- "Aplica Funciones tipadas (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza Ningún parámetro queda sin tipo"
- "Revisa mi typescript-core y dime qué pasos de Funciones tipadas me faltan en este nivel"