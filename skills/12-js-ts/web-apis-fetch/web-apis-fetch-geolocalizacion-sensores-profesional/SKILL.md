---
name: web-apis-fetch-geolocalizacion-sensores-profesional
description: Geolocalización y sensores · nivel Profesional · APIs del navegador. Usás geolocalización, orientación y otras APIs de sensores con permisos y fallbacks. Objetivo del nivel: Diseñar el uso de sensores con privacidad y fallbacks
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "geolocalizacion-sensores"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Geolocalización y sensores — Profesional

## Qué hace este skill

Usás geolocalización, orientación y otras APIs de sensores con permisos y fallbacks. En este nivel se entrega: **Diseñar el uso de sensores con privacidad y fallbacks**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Geolocalización y sensores** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el flujo de permisos con fallbacks manuales
2. Agregar config manual de ubicación
3. Minimizar el muestreo para ahorrar batería
4. Documentar la política de datos de sensores

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el uso de sensores con privacidad y fallbacks | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Diseñar el flujo de permisos con fallbacks manuales · Agregar config manual de ubicación · Minimizar el muestreo para ahorrar batería · Documentar la política de datos de sensores | lista | sí | 3-4 pasos |
| $criterios_clave | El usuario puede ingresar la ubicación manualmente · El muestreo es mínimo y configurable | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el módulo de ubicación: permisos explicados, fallback a selección manual en el mapa, muestreo mínimo y política de datos documentada. | texto | no | "Geolocalización y sensores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El usuario puede ingresar la ubicación manualmente
- [ ] El muestreo es mínimo y configurable

## Ejemplos de prompts

- "Diseñá el módulo de ubicación: permisos explicados, fallback a selección manual en el mapa, muestreo mínimo y política de datos documentada."
- "Aplica Geolocalización y sensores (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza El usuario puede ingresar la ubicación manualmente"
- "Revisa mi web-apis-fetch y dime qué pasos de Geolocalización y sensores me faltan en este nivel"