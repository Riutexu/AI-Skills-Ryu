---
name: web-apis-fetch-geolocalizacion-sensores-avanzado
description: Geolocalización y sensores · nivel Avanzado · APIs del navegador. Usás geolocalización, orientación y otras APIs de sensores con permisos y fallbacks. Objetivo del nivel: Vigilar posiciones y combinar sensores
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "geolocalizacion-sensores"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Geolocalización y sensores — Avanzado

## Qué hace este skill

Usás geolocalización, orientación y otras APIs de sensores con permisos y fallbacks. En este nivel se entrega: **Vigilar posiciones y combinar sensores**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Geolocalización y sensores** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Vigilar la posición con watchPosition
2. Calcular distancias entre coordenadas
3. Manejar permisos revocados en runtime
4. Usar deviceorientation con cuidado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Vigilar posiciones y combinar sensores | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Vigilar la posición con watchPosition · Calcular distancias entre coordenadas · Manejar permisos revocados en runtime · Usar deviceorientation con cuidado | lista | sí | 3-4 pasos |
| $criterios_clave | El watchPosition se limpia al destruir la vista · Las distancias se calculan con la fórmula correcta | lista | sí | calidad verificable |
| $prompt_guia | El módulo de delivery necesita seguimiento: watchPosition para la ubicación del repartidor, cálculo de distancia al cliente y manejo de permisos revocados. | texto | no | "Geolocalización y sensores" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El watchPosition se limpia al destruir la vista
- [ ] Las distancias se calculan con la fórmula correcta

## Ejemplos de prompts

- "El módulo de delivery necesita seguimiento: watchPosition para la ubicación del repartidor, cálculo de distancia al cliente y manejo de permisos revocados."
- "Aplica Geolocalización y sensores (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza El watchPosition se limpia al destruir la vista"
- "Revisa mi web-apis-fetch y dime qué pasos de Geolocalización y sensores me faltan en este nivel"