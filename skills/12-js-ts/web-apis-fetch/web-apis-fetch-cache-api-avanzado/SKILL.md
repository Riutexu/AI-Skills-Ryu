---
name: web-apis-fetch-cache-api-avanzado
description: Cache API · nivel Avanzado · APIs del navegador. Cacheás respuestas HTTP y assets con la Cache API combinada con service workers. Objetivo del nivel: Combinar Cache API con estrategias de revalidación
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "cache-api"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Cache API — Avanzado

## Qué hace este skill

Cacheás respuestas HTTP y assets con la Cache API combinada con service workers. En este nivel se entrega: **Combinar Cache API con estrategias de revalidación**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cache API** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar stale-while-revalidate
2. Cachear respuestas con versión en la clave
3. Manejar la cuota de cache y su limpieza
4. Cachear solo respuestas exitosas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Combinar Cache API con estrategias de revalidación | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Implementar stale-while-revalidate · Cachear respuestas con versión en la clave · Manejar la cuota de cache y su limpieza · Cachear solo respuestas exitosas | lista | sí | 3-4 pasos |
| $criterios_clave | La revalidación es asíncrona y no bloquea · Solo respuestas ok entran al cache | lista | sí | calidad verificable |
| $prompt_guia | Implementá stale-while-revalidate para los endpoints de listados: serví la cache al instante, revalidá en background y versioná las claves por release. | texto | no | "Cache API" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La revalidación es asíncrona y no bloquea
- [ ] Solo respuestas ok entran al cache

## Ejemplos de prompts

- "Implementá stale-while-revalidate para los endpoints de listados: serví la cache al instante, revalidá en background y versioná las claves por release."
- "Aplica Cache API (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza La revalidación es asíncrona y no bloquea"
- "Revisa mi web-apis-fetch y dime qué pasos de Cache API me faltan en este nivel"