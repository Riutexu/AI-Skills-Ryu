---
name: web-apis-fetch-fetch-avanzada-profesional
description: Fetch avanzada · nivel Profesional · APIs del navegador. Dominás fetch más allá del GET: streams de respuesta, progreso, abortos y cabeceras. Objetivo del nivel: Diseñar la capa de fetch avanzada del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "fetch-avanzada"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Fetch avanzada — Profesional

## Qué hace este skill

Dominás fetch más allá del GET: streams de respuesta, progreso, abortos y cabeceras. En este nivel se entrega: **Diseñar la capa de fetch avanzada del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Fetch avanzada** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una capa de fetch con streams y timeouts
2. Implementar manejo de cache y revalidación HTTP
3. Soportar subida multipart y progreso de upload
4. Documentar los patrones de fetch del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la capa de fetch avanzada del proyecto | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Crear una capa de fetch con streams y timeouts · Implementar manejo de cache y revalidación HTTP · Soportar subida multipart y progreso de upload · Documentar los patrones de fetch del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | La capa maneja uploads y downloads grandes sin colgar la UI · Los timeouts y caches se configuran por endpoint | lista | sí | calidad verificable |
| $prompt_guia | El cliente sube archivos de 500MB: diseñá la capa de fetch con upload multipart con progreso, download con stream y timeouts por endpoint, documentada para el equipo. | texto | no | "Fetch avanzada" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La capa maneja uploads y downloads grandes sin colgar la UI
- [ ] Los timeouts y caches se configuran por endpoint

## Ejemplos de prompts

- "El cliente sube archivos de 500MB: diseñá la capa de fetch con upload multipart con progreso, download con stream y timeouts por endpoint, documentada para el equipo."
- "Aplica Fetch avanzada (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza La capa maneja uploads y downloads grandes sin colgar la UI"
- "Revisa mi web-apis-fetch y dime qué pasos de Fetch avanzada me faltan en este nivel"