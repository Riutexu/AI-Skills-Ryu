---
name: javascript-moderno-convenciones-estilo-basico
description: Convenciones y estilo · nivel Básico · JavaScript moderno: ES2024. Aplicás convenciones de nombrado, formato y organización que hacen el código legible en equipo. Objetivo del nivel: Seguir convenciones de nombrado y formato básicas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "convenciones-estilo"
  nivel: basico
  stack: "Node 22, ESM, Vite, Vitest"
---

# Convenciones y estilo — Básico

## Qué hace este skill

Aplicás convenciones de nombrado, formato y organización que hacen el código legible en equipo. En este nivel se entrega: **Seguir convenciones de nombrado y formato básicas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Convenciones y estilo** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Nombrar variables, funciones y clases con camelCase/PascalCase
2. Formatear el código con Prettier automáticamente
3. Nombrar booleans con prefijos is/has/can
4. Escribir nombres descriptivos en funciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Seguir convenciones de nombrado y formato básicas | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Nombrar variables, funciones y clases con camelCase/PascalCase · Formatear el código con Prettier automáticamente · Nombrar booleans con prefijos is/has/can · Escribir nombres descriptivos en funciones | lista | sí | 3-4 pasos |
| $criterios_clave | El formato es consistente en todo el proyecto · Los nombres comunican intención sin comentarios | lista | sí | calidad verificable |
| $prompt_guia | Pasame este archivo por Prettier y renombrá las variables crípticas (a, x, d2) a nombres que un colega entienda sin leer el resto. | texto | no | "Convenciones y estilo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El formato es consistente en todo el proyecto
- [ ] Los nombres comunican intención sin comentarios

## Ejemplos de prompts

- "Pasame este archivo por Prettier y renombrá las variables crípticas (a, x, d2) a nombres que un colega entienda sin leer el resto."
- "Aplica Convenciones y estilo (nivel basico) a mi trabajo actual con JavaScript moderno: ES2024: prioriza El formato es consistente en todo el proyecto"
- "Revisa mi javascript-moderno y dime qué pasos de Convenciones y estilo me faltan en este nivel"