---
name: innertube-yt-integracion-media3-basico
description: Integración con Media3 · nivel Básico · Cliente YouTube innertube: contenido de video. Conecta el cliente innertube con el ExoPlayer de Ryutify. Objetivo del nivel: Pasar los streams obtenidos al player.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "integracion-media3"
  nivel: basico
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Integración con Media3 — Básico

## Qué hace este skill

Conecta el cliente innertube con el ExoPlayer de Ryutify. En este nivel se entrega: **Pasar los streams obtenidos al player.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con Media3** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Convertir el stream de innertube en MediaItem
2. Setear la cola con las MediaItems
3. Manejar la transición de canciones
4. Mostrar el progreso de carga del stream

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Pasar los streams obtenidos al player. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Convertir el stream de innertube en MediaItem · Setear la cola con las MediaItems · Manejar la transición de canciones · Mostrar el progreso de carga del stream | lista | sí | 3-4 pasos |
| $criterios_clave | Las canciones de la búsqueda se reproducen en cola · El progreso de carga se muestra en la UI | lista | sí | calidad verificable |
| $prompt_guia | Conectá el cliente de innertube de Ryutify con el ExoPlayer: convertí los streams en MediaItems y reproducí la cola completa. | texto | no | "Integración con Media3" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las canciones de la búsqueda se reproducen en cola
- [ ] El progreso de carga se muestra en la UI

## Ejemplos de prompts

- "Conectá el cliente de innertube de Ryutify con el ExoPlayer: convertí los streams en MediaItems y reproducí la cola completa."
- "Aplica Integración con Media3 (nivel basico) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Las canciones de la búsqueda se reproducen en cola"
- "Revisa mi innertube-yt y dime qué pasos de Integración con Media3 me faltan en este nivel"