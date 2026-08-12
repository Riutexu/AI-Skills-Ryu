---
name: web-apis-fetch-geolocalizacion-sensores-basico
description: Geolocalización y sensores · nivel Básico · APIs del navegador. Usás geolocalización, orientación y otras APIs de sensores con permisos y fallbacks. Objetivo del nivel: Obtener la posición del usuario con geolocation
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "geolocalizacion-sensores"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Geolocalización y sensores — Básico

## Qué hace este skill

Usás geolocalización, orientación y otras APIs de sensores con permisos y fallbacks. En este nivel se entrega: **Obtener la posición del usuario con geolocation**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Geolocalización y sensores** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Pedir la posición con getCurrentPosition
2. Manejar errores de permisos y timeout
3. Mostrar la posición en un mapa simple
4. Explicar al usuario por qué se pide el permiso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Obtener la posición del usuario con geolocation | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Pedir la posición con getCurrentPosition · Manejar errores de permisos y timeout · Mostrar la posición en un mapa simple · Explicar al usuario por qué se pide el permiso | lista | sí | 3-4 pasos |
| $criterios_clave | Los errores de geolocalización se manejan · La UI explica el uso del permiso | lista | sí | calidad verificable |
| $prompt_guia | Implementá la geolocalización en el alta de cliente: posición con getCurrentPosition, manejo de permisos denegados y ubicación mostrada en el formulario. | texto | no | "Geolocalización y sensores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los errores de geolocalización se manejan
- [ ] La UI explica el uso del permiso

## Ejemplos de prompts

- "Implementá la geolocalización en el alta de cliente: posición con getCurrentPosition, manejo de permisos denegados y ubicación mostrada en el formulario."
- "Aplica Geolocalización y sensores (nivel basico) a mi trabajo actual con APIs del navegador: prioriza Los errores de geolocalización se manejan"
- "Revisa mi web-apis-fetch y dime qué pasos de Geolocalización y sensores me faltan en este nivel"