---
name: javascript-moderno-async-await-avanzado
description: async/await y promesas · nivel Avanzado · JavaScript moderno: ES2024. Encadenás y componés operaciones asíncronas con promesas y async/await sin infierno de callbacks. Objetivo del nivel: Componer flujos con límites de concurrencia y cancelación
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "async-await"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# async/await y promesas — Avanzado

## Qué hace este skill

Encadenás y componés operaciones asíncronas con promesas y async/await sin infierno de callbacks. En este nivel se entrega: **Componer flujos con límites de concurrencia y cancelación**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **async/await y promesas** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar un pool de concurrencia con límite de promesas activas
2. Implementar timeout con Promise.race
3. Encadenar flujos con dependencias y reintentos con backoff
4. Convertir callbacks de APIs legacy a promesas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Componer flujos con límites de concurrencia y cancelación | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Implementar un pool de concurrencia con límite de promesas activas · Implementar timeout con Promise.race · Encadenar flujos con dependencias y reintentos con backoff · Convertir callbacks de APIs legacy a promesas | lista | sí | 3-4 pasos |
| $criterios_clave | El pool no supera el límite de concurrencia · Los timeouts liberan los recursos en tiempo razonable | lista | sí | calidad verificable |
| $prompt_guia | Implementá un semáforo que limite a 3 descargas simultáneas de imágenes, con reintento con backoff exponencial para las que fallan. Las fotos son de perros, la paciencia es limitada. | texto | no | "async/await y promesas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pool no supera el límite de concurrencia
- [ ] Los timeouts liberan los recursos en tiempo razonable

## Ejemplos de prompts

- "Implementá un semáforo que limite a 3 descargas simultáneas de imágenes, con reintento con backoff exponencial para las que fallan. Las fotos son de perros, la paciencia es limitada."
- "Aplica async/await y promesas (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza El pool no supera el límite de concurrencia"
- "Revisa mi javascript-moderno y dime qué pasos de async/await y promesas me faltan en este nivel"