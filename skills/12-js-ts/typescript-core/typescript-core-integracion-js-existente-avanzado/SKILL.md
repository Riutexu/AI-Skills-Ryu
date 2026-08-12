---
name: typescript-core-integracion-js-existente-avanzado
description: Integración con JS existente · nivel Avanzado · TypeScript: tipado profesional. Convivís con código JS legacy y librerías sin tipos sin perder la seguridad del tipado. Objetivo del nivel: Tipar gradualmente módulos legacy con JSDoc y declaraciones
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "integracion-js-existente"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Integración con JS existente — Avanzado

## Qué hace este skill

Convivís con código JS legacy y librerías sin tipos sin perder la seguridad del tipado. En este nivel se entrega: **Tipar gradualmente módulos legacy con JSDoc y declaraciones**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con JS existente** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Tipar funciones JS con JSDoc @param y @returns
2. Escribir declaraciones .d.ts para librerías sin tipos
3. Usar @ts-check en archivos JS clave
4. Convertir selectivamente archivos JS a TS

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Tipar gradualmente módulos legacy con JSDoc y declaraciones | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Tipar funciones JS con JSDoc @param y @returns · Escribir declaraciones .d.ts para librerías sin tipos · Usar @ts-check en archivos JS clave · Convertir selectivamente archivos JS a TS | lista | sí | 3-4 pasos |
| $criterios_clave | Los archivos JSDoc-typed reportan errores útiles · Las declaraciones cubren la API que se usa | lista | sí | calidad verificable |
| $prompt_guia | Tipá con JSDoc los dos módulos JS más usados (validaciones y carrito) para que checkJs los valide, y escribí un .d.ts para la librería de charts. | texto | no | "Integración con JS existente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los archivos JSDoc-typed reportan errores útiles
- [ ] Las declaraciones cubren la API que se usa

## Ejemplos de prompts

- "Tipá con JSDoc los dos módulos JS más usados (validaciones y carrito) para que checkJs los valide, y escribí un .d.ts para la librería de charts."
- "Aplica Integración con JS existente (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los archivos JSDoc-typed reportan errores útiles"
- "Revisa mi typescript-core y dime qué pasos de Integración con JS existente me faltan en este nivel"