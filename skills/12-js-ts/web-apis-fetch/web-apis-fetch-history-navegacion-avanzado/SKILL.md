---
name: web-apis-fetch-history-navegacion-avanzado
description: History y navegación · nivel Avanzado · APIs del navegador. Controlás el historial y la URL con la History API, estados y scroll restoration. Objetivo del nivel: Manejar estado en el historial y scroll restoration
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "history-navegacion"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# History y navegación — Avanzado

## Qué hace este skill

Controlás el historial y la URL con la History API, estados y scroll restoration. En este nivel se entrega: **Manejar estado en el historial y scroll restoration**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **History y navegación** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Guardar estado en el history con state
2. Restaurar el scroll al navegar atrás
3. Serializar y parsear query params complejos
4. Evitar entradas duplicadas en el historial

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar estado en el historial y scroll restoration | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Guardar estado en el history con state · Restaurar el scroll al navegar atrás · Serializar y parsear query params complejos · Evitar entradas duplicadas en el historial | lista | sí | 3-4 pasos |
| $criterios_clave | El estado se restaura al volver atrás · El scroll vuelve a la posición esperada | lista | sí | calidad verificable |
| $prompt_guia | La SPA pierde el scroll y el filtro al volver atrás: guardá estado en el historial, restablecé el scroll y evitá entradas duplicadas al navegar. | texto | no | "History y navegación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El estado se restaura al volver atrás
- [ ] El scroll vuelve a la posición esperada

## Ejemplos de prompts

- "La SPA pierde el scroll y el filtro al volver atrás: guardá estado en el historial, restablecé el scroll y evitá entradas duplicadas al navegar."
- "Aplica History y navegación (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza El estado se restaura al volver atrás"
- "Revisa mi web-apis-fetch y dime qué pasos de History y navegación me faltan en este nivel"