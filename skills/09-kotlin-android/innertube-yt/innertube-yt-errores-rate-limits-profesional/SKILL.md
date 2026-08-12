---
name: innertube-yt-errores-rate-limits-profesional
description: Errores y rate limits · nivel Profesional · Cliente YouTube innertube: contenido de video. Clasifica los errores de innertube y sobrevive a los rate limits. Objetivo del nivel: Estrategia de rate limits del producto: presupuesto de requests y monitoreo.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "errores-rate-limits"
  nivel: profesional
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Errores y rate limits — Profesional

## Qué hace este skill

Clasifica los errores de innertube y sobrevive a los rate limits. En este nivel se entrega: **Estrategia de rate limits del producto: presupuesto de requests y monitoreo.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y rate limits** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el presupuesto de requests por sesión
2. Implementar el throttle por endpoint
3. Monitorear los rate limits en la telemetría
4. Ajustar la frecuencia de los refresh de sesión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de rate limits del producto: presupuesto de requests y monitoreo. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Definir el presupuesto de requests por sesión · Implementar el throttle por endpoint · Monitorear los rate limits en la telemetría · Ajustar la frecuencia de los refresh de sesión | lista | sí | 3-4 pasos |
| $criterios_clave | El presupuesto de requests se respeta en sesiones largas · Los rate limits en la telemetría bajan tras los ajustes | lista | sí | calidad verificable |
| $prompt_guia | Quiero un presupuesto de requests de la API de YouTube para Ryutify: throttle por endpoint y monitoreo de rate limits en la telemetría. | texto | no | "Errores y rate limits" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El presupuesto de requests se respeta en sesiones largas
- [ ] Los rate limits en la telemetría bajan tras los ajustes

## Ejemplos de prompts

- "Quiero un presupuesto de requests de la API de YouTube para Ryutify: throttle por endpoint y monitoreo de rate limits en la telemetría."
- "Aplica Errores y rate limits (nivel profesional) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza El presupuesto de requests se respeta en sesiones largas"
- "Revisa mi innertube-yt y dime qué pasos de Errores y rate limits me faltan en este nivel"