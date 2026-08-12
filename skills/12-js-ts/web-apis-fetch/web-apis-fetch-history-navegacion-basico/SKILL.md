---
name: web-apis-fetch-history-navegacion-basico
description: History y navegación · nivel Básico · APIs del navegador. Controlás el historial y la URL con la History API, estados y scroll restoration. Objetivo del nivel: Usar la History API para navegación programática
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "history-navegacion"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# History y navegación — Básico

## Qué hace este skill

Controlás el historial y la URL con la History API, estados y scroll restoration. En este nivel se entrega: **Usar la History API para navegación programática**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **History y navegación** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Navegar con pushState y reemplazar con replaceState
2. Leer location y search params
3. Manejar popstate para ir atrás/adelante
4. Sincronizar la vista con la URL

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar la History API para navegación programática | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Navegar con pushState y reemplazar con replaceState · Leer location y search params · Manejar popstate para ir atrás/adelante · Sincronizar la vista con la URL | lista | sí | 3-4 pasos |
| $criterios_clave | La URL siempre refleja el estado de la vista · El botón atrás funciona en todos los flujos | lista | sí | calidad verificable |
| $prompt_guia | Implementá la navegación entre las vistas de la SPA con pushState y popstate, sincronizando el estado con la URL. | texto | no | "History y navegación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La URL siempre refleja el estado de la vista
- [ ] El botón atrás funciona en todos los flujos

## Ejemplos de prompts

- "Implementá la navegación entre las vistas de la SPA con pushState y popstate, sincronizando el estado con la URL."
- "Aplica History y navegación (nivel basico) a mi trabajo actual con APIs del navegador: prioriza La URL siempre refleja el estado de la vista"
- "Revisa mi web-apis-fetch y dime qué pasos de History y navegación me faltan en este nivel"