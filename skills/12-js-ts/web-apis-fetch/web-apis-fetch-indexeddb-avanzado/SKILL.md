---
name: web-apis-fetch-indexeddb-avanzado
description: IndexedDB · nivel Avanzado · APIs del navegador. Almacenás datos estructurados en el navegador con IndexedDB y wrappers ergonómicos. Objetivo del nivel: Usar transacciones, índices y consultas eficientes
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "indexeddb"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# IndexedDB — Avanzado

## Qué hace este skill

Almacenás datos estructurados en el navegador con IndexedDB y wrappers ergonómicos. En este nivel se entrega: **Usar transacciones, índices y consultas eficientes**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **IndexedDB** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Consultar con índices y rangos de claves
2. Usar transacciones de lectura/escritura correctas
3. Manejar errores de cuota y conflictos de versión
4. Migrar esquemas entre versiones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Usar transacciones, índices y consultas eficientes | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Consultar con índices y rangos de claves · Usar transacciones de lectura/escritura correctas · Manejar errores de cuota y conflictos de versión · Migrar esquemas entre versiones | lista | sí | 3-4 pasos |
| $criterios_clave | Las consultas usan índices en vez de escaneos · Las migraciones de versión son seguras | lista | sí | calidad verificable |
| $prompt_guia | Mejorá el acceso a IndexedDB: consultas por índice con rangos, transacciones con el modo correcto y migración de versión que no pierda datos. | texto | no | "IndexedDB" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las consultas usan índices en vez de escaneos
- [ ] Las migraciones de versión son seguras

## Ejemplos de prompts

- "Mejorá el acceso a IndexedDB: consultas por índice con rangos, transacciones con el modo correcto y migración de versión que no pierda datos."
- "Aplica IndexedDB (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza Las consultas usan índices en vez de escaneos"
- "Revisa mi web-apis-fetch y dime qué pasos de IndexedDB me faltan en este nivel"