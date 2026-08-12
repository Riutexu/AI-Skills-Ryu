---
name: web-apis-fetch-canvas-graficos-avanzado
description: Canvas y gráficos · nivel Avanzado · APIs del navegador. Dibujás gráficos y visualizaciones con Canvas 2D y render eficiente por frames. Objetivo del nivel: Animar con requestAnimationFrame y dibujo por frames
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "canvas-graficos"
  nivel: avanzado
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Canvas y gráficos — Avanzado

## Qué hace este skill

Dibujás gráficos y visualizaciones con Canvas 2D y render eficiente por frames. En este nivel se entrega: **Animar con requestAnimationFrame y dibujo por frames**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Canvas y gráficos** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar un loop con requestAnimationFrame
2. Animar elementos con delta time
3. Manejar el redimensionado con devicePixelRatio
4. Optimizar el redibujado por regiones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Animar con requestAnimationFrame y dibujo por frames | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Implementar un loop con requestAnimationFrame · Animar elementos con delta time · Manejar el redimensionado con devicePixelRatio · Optimizar el redibujado por regiones | lista | sí | 3-4 pasos |
| $criterios_clave | Las animaciones corren a 60fps en hardware normal · El redibujado solo toca las regiones sucias | lista | sí | calidad verificable |
| $prompt_guia | Creá el gráfico de actividad en tiempo real: animación con requestAnimationFrame, delta time y redibujado por regiones para mantener los 60fps. | texto | no | "Canvas y gráficos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las animaciones corren a 60fps en hardware normal
- [ ] El redibujado solo toca las regiones sucias

## Ejemplos de prompts

- "Creá el gráfico de actividad en tiempo real: animación con requestAnimationFrame, delta time y redibujado por regiones para mantener los 60fps."
- "Aplica Canvas y gráficos (nivel avanzado) a mi trabajo actual con APIs del navegador: prioriza Las animaciones corren a 60fps en hardware normal"
- "Revisa mi web-apis-fetch y dime qué pasos de Canvas y gráficos me faltan en este nivel"