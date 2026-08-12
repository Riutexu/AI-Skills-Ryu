---
name: typescript-core-tipos-avanzados-profesional
description: Tipos avanzados (conditional, mapped) · nivel Profesional · TypeScript: tipado profesional. Construís tipos condicionales y mapeados para librerías y utilidades expresivas. Objetivo del nivel: Diseñar librerías de tipos con invariantes verificadas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tipos-avanzados"
  nivel: profesional
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Tipos avanzados (conditional, mapped) — Profesional

## Qué hace este skill

Construís tipos condicionales y mapeados para librerías y utilidades expresivas. En este nivel se entrega: **Diseñar librerías de tipos con invariantes verificadas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipos avanzados (conditional, mapped)** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear tipos de nivel librería con documentación
2. Escribir tests de tipo con expect-type
3. Implementar tipos derivados de schemas de runtime
4. Mantener la compatibilidad de tipos entre versiones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar librerías de tipos con invariantes verificadas | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear tipos de nivel librería con documentación · Escribir tests de tipo con expect-type · Implementar tipos derivados de schemas de runtime · Mantener la compatibilidad de tipos entre versiones | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests de tipo fallan si la invariante se rompe · Los tipos están documentados con ejemplos de uso | lista | sí | calidad verificable |
| $prompt_guia | Diseñá los tipos avanzados de la librería interna de formularios: un schema tipado con inferred type automático y los tests de tipo con expect-type que lo garanticen. | texto | no | "Tipos avanzados (conditional, mapped)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests de tipo fallan si la invariante se rompe
- [ ] Los tipos están documentados con ejemplos de uso

## Ejemplos de prompts

- "Diseñá los tipos avanzados de la librería interna de formularios: un schema tipado con inferred type automático y los tests de tipo con expect-type que lo garanticen."
- "Aplica Tipos avanzados (conditional, mapped) (nivel profesional) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los tests de tipo fallan si la invariante se rompe"
- "Revisa mi typescript-core y dime qué pasos de Tipos avanzados (conditional, mapped) me faltan en este nivel"