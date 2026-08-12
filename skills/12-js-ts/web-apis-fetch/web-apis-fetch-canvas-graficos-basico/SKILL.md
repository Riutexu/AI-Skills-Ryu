---
name: web-apis-fetch-canvas-graficos-basico
description: Canvas y gráficos · nivel Básico · APIs del navegador. Dibujás gráficos y visualizaciones con Canvas 2D y render eficiente por frames. Objetivo del nivel: Dibujar formas y texto básicos en canvas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "canvas-graficos"
  nivel: basico
  stack: "Fetch, SSE, WebSockets, IndexedDB, Service Workers"
---

# Canvas y gráficos — Básico

## Qué hace este skill

Dibujás gráficos y visualizaciones con Canvas 2D y render eficiente por frames. En este nivel se entrega: **Dibujar formas y texto básicos en canvas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **APIs del navegador** (Fetch, SSE, WebSockets, IndexedDB, Service Workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Canvas y gráficos** dentro de APIs del navegador.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Fetch, SSE, WebSockets, IndexedDB, Service Workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Obtener el contexto 2d de un canvas
2. Dibujar rectángulos, círculos y líneas
3. Dibujar texto y aplicar estilos
4. Manejar el tamaño del canvas y la resolución

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Dibujar formas y texto básicos en canvas | texto | sí | resultado medible |
| $stack | APIs del navegador | texto | sí | 12-js-ts/web-apis-fetch |
| $tecnologias | Fetch, SSE, WebSockets, IndexedDB, Service Workers | texto | sí | Fetch, SSE, WebSockets, IndexedDB, Service Workers |
| $tareas_clave | Obtener el contexto 2d de un canvas · Dibujar rectángulos, círculos y líneas · Dibujar texto y aplicar estilos · Manejar el tamaño del canvas y la resolución | lista | sí | 3-4 pasos |
| $criterios_clave | El canvas se redimensiona sin distorsionarse · Las figuras básicas se renderizan correctamente | lista | sí | calidad verificable |
| $prompt_guia | Dibujá un gráfico de barras simple con canvas 2D a partir de los datos de ventas del backend PHP, con ejes y etiquetas. | texto | no | "Canvas y gráficos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El canvas se redimensiona sin distorsionarse
- [ ] Las figuras básicas se renderizan correctamente

## Ejemplos de prompts

- "Dibujá un gráfico de barras simple con canvas 2D a partir de los datos de ventas del backend PHP, con ejes y etiquetas."
- "Aplica Canvas y gráficos (nivel basico) a mi trabajo actual con APIs del navegador: prioriza El canvas se redimensiona sin distorsionarse"
- "Revisa mi web-apis-fetch y dime qué pasos de Canvas y gráficos me faltan en este nivel"