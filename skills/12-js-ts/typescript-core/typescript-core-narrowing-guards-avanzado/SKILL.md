---
name: typescript-core-narrowing-guards-avanzado
description: Narrowing y guards · nivel Avanzado · TypeScript: tipado profesional. Reducís uniones con checks, type predicates y guards para que el compilador entienda el flujo. Objetivo del nivel: Escribir type guards y type predicates reutilizables
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "narrowing-guards"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Narrowing y guards — Avanzado

## Qué hace este skill

Reducís uniones con checks, type predicates y guards para que el compilador entienda el flujo. En este nivel se entrega: **Escribir type guards y type predicates reutilizables**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Narrowing y guards** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear type predicates isUsuario para validar shapes
2. Escribir guards para uniones discriminadas
3. Validar payloads del backend con guards combinados
4. Usar as const para narrowing de literales

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Escribir type guards y type predicates reutilizables | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear type predicates isUsuario para validar shapes · Escribir guards para uniones discriminadas · Validar payloads del backend con guards combinados · Usar as const para narrowing de literales | lista | sí | 3-4 pasos |
| $criterios_clave | Los guards devuelven el predicado correcto en todos los casos · El runtime y el tipo no se contradicen | lista | sí | calidad verificable |
| $prompt_guia | Escribí type guards para las variantes de la respuesta de la API (isOkResponse, isErrorResponse) y usalas para validar la data que manda el backend PHP antes de usarla. | texto | no | "Narrowing y guards" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los guards devuelven el predicado correcto en todos los casos
- [ ] El runtime y el tipo no se contradicen

## Ejemplos de prompts

- "Escribí type guards para las variantes de la respuesta de la API (isOkResponse, isErrorResponse) y usalas para validar la data que manda el backend PHP antes de usarla."
- "Aplica Narrowing y guards (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los guards devuelven el predicado correcto en todos los casos"
- "Revisa mi typescript-core y dime qué pasos de Narrowing y guards me faltan en este nivel"