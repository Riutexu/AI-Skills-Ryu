---
name: web-apis-fetch-indexeddb-basico
description: IndexedDB · nivel Básico · APIs del navegador. Almacenás datos estructurados en el navegador con IndexedDB y wrappers ergonómicos. Objetivo del nivel: Crear bases y operar con datos en IndexedDB
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "indexeddb"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# IndexedDB — Básico

## Qué hace este skill

Almacenás datos estructurados en el navegador con IndexedDB y wrappers ergonómicos. En este nivel se entrega: **Crear bases y operar con datos en IndexedDB**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **IndexedDB** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Abrir una base con versionado
2. Crear object stores e índices
3. Agregar, leer y eliminar registros
4. Manejar transacciones básicas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear bases y operar con datos en IndexedDB | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Abrir una base con versionado · Crear object stores e índices · Agregar, leer y eliminar registros · Manejar transacciones básicas | lista | sí | 3-4 pasos |
| $criterios_clave | Las operaciones devuelven los datos correctos · El versionado de la base está controlado | lista | sí | calidad verificable |
| $prompt_guia | Implementá el almacenamiento offline de la lista de productos con IndexedDB: base versionada, object store e índices, y las operaciones CRUD básicas. | texto | no | "IndexedDB" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las operaciones devuelven los datos correctos
- [ ] El versionado de la base está controlado

## Ejemplos de prompts

- "Implementá el almacenamiento offline de la lista de productos con IndexedDB: base versionada, object store e índices, y las operaciones CRUD básicas."
- "Aplica IndexedDB (nivel basico) a mi trabajo actual con APIs del navegador: prioriza Las operaciones devuelven los datos correctos"
- "Revisa mi web-apis-fetch y dime qué pasos de IndexedDB me faltan en este nivel"