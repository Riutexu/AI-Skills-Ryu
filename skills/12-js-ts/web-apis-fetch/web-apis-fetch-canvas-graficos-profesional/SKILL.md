---
name: web-apis-fetch-canvas-graficos-profesional
description: Canvas y gráficos · nivel Profesional · APIs del navegador. Dibujás gráficos y visualizaciones con Canvas 2D y render eficiente por frames. Objetivo del nivel: Diseñar el sistema de visualización de datos del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "canvas-graficos"
  nivel: profesional
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Canvas y gráficos — Profesional

## Qué hace este skill

Dibujás gráficos y visualizaciones con Canvas 2D y render eficiente por frames. En este nivel se entrega: **Diseñar el sistema de visualización de datos del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Canvas y gráficos** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Decidir entre canvas, SVG o librería según el caso
2. Crear un mini motor de gráficos para la app
3. Optimizar el render de datasets grandes
4. Documentar los patrones de visualización

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el sistema de visualización de datos del proyecto | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Decidir entre canvas, SVG o librería según el caso · Crear un mini motor de gráficos para la app · Optimizar el render de datasets grandes · Documentar los patrones de visualización | lista | sí | 3-4 pasos |
| $criterios_clave | La decisión canvas vs SVG está justificada · Los gráficos con 100k puntos renderizan fluidos | lista | sí | calidad verificable |
| $prompt_guia | La SPA necesita gráficos de 100k puntos sin librería externa: diseñá el mini motor de visualización con canvas, estrategia por tipo de gráfico y documentación para el equipo. | texto | no | "Canvas y gráficos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La decisión canvas vs SVG está justificada
- [ ] Los gráficos con 100k puntos renderizan fluidos

## Ejemplos de prompts

- "La SPA necesita gráficos de 100k puntos sin librería externa: diseñá el mini motor de visualización con canvas, estrategia por tipo de gráfico y documentación para el equipo."
- "Aplica Canvas y gráficos (nivel profesional) a mi trabajo actual con APIs del navegador: prioriza La decisión canvas vs SVG está justificada"
- "Revisa mi web-apis-fetch y dime qué pasos de Canvas y gráficos me faltan en este nivel"