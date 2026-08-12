---
name: web-apis-fetch-service-workers-avanzado
description: Service workers · nivel Avanzado · APIs del navegador. Interceptás requests y habilitás offline con service workers y estrategias de cache. Objetivo del nivel: Implementar estrategias de cache y offline funcional
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "service-workers"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Service workers — Avanzado

## Qué hace este skill

Interceptás requests y habilitás offline con service workers y estrategias de cache. En este nivel se entrega: **Implementar estrategias de cache y offline funcional**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Service workers** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar cache-first y network-first según recurso
2. Servir la app offline con fallback
3. Actualizar el cache al publicar nuevas versiones
4. Interceptar requests de API con estrategia adecuada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Implementar estrategias de cache y offline funcional | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Implementar cache-first y network-first según recurso · Servir la app offline con fallback · Actualizar el cache al publicar nuevas versiones · Interceptar requests de API con estrategia adecuada | lista | sí | 3-4 pasos |
| $criterios_clave | La app funciona offline con la data cacheada · Las versiones nuevas invalidan el cache viejo | lista | sí | calidad verificable |
| $prompt_guia | La SPA tiene que funcionar offline: cache-first para assets, network-first para la API con fallback a la última data y actualización de cache por versión. | texto | no | "Service workers" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La app funciona offline con la data cacheada
- [ ] Las versiones nuevas invalidan el cache viejo

## Ejemplos de prompts

- "La SPA tiene que funcionar offline: cache-first para assets, network-first para la API con fallback a la última data y actualización de cache por versión."
- "Aplica Service workers (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza La app funciona offline con la data cacheada"
- "Revisa mi web-apis-fetch y dime qué pasos de Service workers me faltan en este nivel"