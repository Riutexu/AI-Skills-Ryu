---
name: web-apis-fetch-cache-api-profesional
description: Cache API · nivel Profesional · APIs del navegador. Cacheás respuestas HTTP y assets con la Cache API combinada con service workers. Objetivo del nivel: Diseñar la jerarquía de cache del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "cache-api"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Cache API — Profesional

## Qué hace este skill

Cacheás respuestas HTTP y assets con la Cache API combinada con service workers. En este nivel se entrega: **Diseñar la jerarquía de cache del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cache API** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la jerarquía de caches (shell, data, media)
2. Crear la política de expiración por tipo de recurso
3. Instrumentar hits y misses con métricas
4. Documentar la estrategia de cache completo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la jerarquía de cache del proyecto | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Definir la jerarquía de caches (shell, data, media) · Crear la política de expiración por tipo de recurso · Instrumentar hits y misses con métricas · Documentar la estrategia de cache completo | lista | sí | 3-4 pasos |
| $criterios_clave | La jerarquía de caches está documentada · Las métricas muestran la efectividad real | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la jerarquía de caches del proyecto: shell, data con expiración por tipo y media; instrumentá hits/misses y documentá la estrategia completa. | texto | no | "Cache API" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La jerarquía de caches está documentada
- [ ] Las métricas muestran la efectividad real

## Ejemplos de prompts

- "Diseñá la jerarquía de caches del proyecto: shell, data con expiración por tipo y media; instrumentá hits/misses y documentá la estrategia completa."
- "Aplica Cache API (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza La jerarquía de caches está documentada"
- "Revisa mi web-apis-fetch y dime qué pasos de Cache API me faltan en este nivel"