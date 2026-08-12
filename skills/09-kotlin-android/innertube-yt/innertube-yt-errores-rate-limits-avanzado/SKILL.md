---
name: innertube-yt-errores-rate-limits-avanzado
description: Errores y rate limits · nivel Avanzado · Cliente YouTube innertube: contenido de video. Clasifica los errores de innertube y sobrevive a los rate limits. Objetivo del nivel: Sobrevivir a los rate limits con backoff y colas de reintento.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "errores-rate-limits"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Errores y rate limits — Avanzado

## Qué hace este skill

Clasifica los errores de innertube y sobrevive a los rate limits. En este nivel se entrega: **Sobrevivir a los rate limits con backoff y colas de reintento.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y rate limits** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Detectar la señal de rate limit
2. Implementar el backoff exponencial
3. Colar los requests en espera de reintento
4. Degradar a cache ante rate limit persistente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Sobrevivir a los rate limits con backoff y colas de reintento. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Detectar la señal de rate limit · Implementar el backoff exponencial · Colar los requests en espera de reintento · Degradar a cache ante rate limit persistente | lista | sí | 3-4 pasos |
| $criterios_clave | Un rate limit no rompe la sesión de escucha · Los reintentos respetan el backoff configurado | lista | sí | calidad verificable |
| $prompt_guia | YouTube nos está aplicando rate limits y Ryutify se queda sin búsquedas. Implementá el backoff exponencial y la degradación a cache. | texto | no | "Errores y rate limits" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un rate limit no rompe la sesión de escucha
- [ ] Los reintentos respetan el backoff configurado

## Ejemplos de prompts

- "YouTube nos está aplicando rate limits y Ryutify se queda sin búsquedas. Implementá el backoff exponencial y la degradación a cache."
- "Aplica Errores y rate limits (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Un rate limit no rompe la sesión de escucha"
- "Revisa mi innertube-yt y dime qué pasos de Errores y rate limits me faltan en este nivel"