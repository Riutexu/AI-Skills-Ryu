---
name: typescript-core-narrowing-guards-basico
description: Narrowing y guards · nivel Básico · TypeScript: tipado profesional. Reducís uniones con checks, type predicates y guards para que el compilador entienda el flujo. Objetivo del nivel: Reducir tipos con checks directos en el flujo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "narrowing-guards"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Narrowing y guards — Básico

## Qué hace este skill

Reducís uniones con checks, type predicates y guards para que el compilador entienda el flujo. En este nivel se entrega: **Reducir tipos con checks directos en el flujo**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Narrowing y guards** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar typeof para reducir primitivos
2. Comprobar null/undefined con checks explícitos
3. Narrowing de uniones por propiedad discriminante
4. Usar truthy checks con cuidado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Reducir tipos con checks directos en el flujo | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Usar typeof para reducir primitivos · Comprobar null/undefined con checks explícitos · Narrowing de uniones por propiedad discriminante · Usar truthy checks con cuidado | lista | sí | 3-4 pasos |
| $criterios_clave | Los branches quedan tipados correctamente por el compilador · No hay casts al código verificado | lista | sí | calidad verificable |
| $prompt_guia | En este flujo que procesa respuestas de la API, aplicá narrowing con typeof y checks de null para que cada branch quede tipado sin castear. | texto | no | "Narrowing y guards" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los branches quedan tipados correctamente por el compilador
- [ ] No hay casts al código verificado

## Ejemplos de prompts

- "En este flujo que procesa respuestas de la API, aplicá narrowing con typeof y checks de null para que cada branch quede tipado sin castear."
- "Aplica Narrowing y guards (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los branches quedan tipados correctamente por el compilador"
- "Revisa mi typescript-core y dime qué pasos de Narrowing y guards me faltan en este nivel"