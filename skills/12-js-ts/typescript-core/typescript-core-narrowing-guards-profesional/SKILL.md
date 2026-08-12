---
name: typescript-core-narrowing-guards-profesional
description: Narrowing y guards · nivel Profesional · TypeScript: tipado profesional. Reducís uniones con checks, type predicates y guards para que el compilador entienda el flujo. Objetivo del nivel: Construir capa de validación en runtime que asegure los tipos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "narrowing-guards"
  nivel: profesional
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Narrowing y guards — Profesional

## Qué hace este skill

Reducís uniones con checks, type predicates y guards para que el compilador entienda el flujo. En este nivel se entrega: **Construir capa de validación en runtime que asegure los tipos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Narrowing y guards** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar validadores de runtime que deriven el tipo
2. Componer guards para validar objetos anidados
3. Fallar de forma controlada cuando el shape no coincide
4. Testear guards con payloads malformados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Construir capa de validación en runtime que asegure los tipos | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Implementar validadores de runtime que deriven el tipo · Componer guards para validar objetos anidados · Fallar de forma controlada cuando el shape no coincide · Testear guards con payloads malformados | lista | sí | 3-4 pasos |
| $criterios_clave | Todo dato externo pasa por validación antes de tiparse · Los errores de shape indican exactamente qué campo falló | lista | sí | calidad verificable |
| $prompt_guia | El backend PHP nos manda a veces campos de más o de menos: creá una capa de validación runtime-to-type para toda la API y que el error diga el campo exacto que faltó. | texto | no | "Narrowing y guards" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todo dato externo pasa por validación antes de tiparse
- [ ] Los errores de shape indican exactamente qué campo falló

## Ejemplos de prompts

- "El backend PHP nos manda a veces campos de más o de menos: creá una capa de validación runtime-to-type para toda la API y que el error diga el campo exacto que faltó."
- "Aplica Narrowing y guards (nivel profesional) a mi trabajo actual con TypeScript: tipado profesional: prioriza Todo dato externo pasa por validación antes de tiparse"
- "Revisa mi typescript-core y dime qué pasos de Narrowing y guards me faltan en este nivel"