---
name: innertube-yt-caching-respuestas-avanzado
description: Caching de respuestas · nivel Avanzado · Cliente YouTube innertube: contenido de video. Cache con TTL para búsquedas, detalles y playlists. Objetivo del nivel: Cache persistente con Room y políticas por tipo de contenido.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "caching-respuestas"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Caching de respuestas — Avanzado

## Qué hace este skill

Cache con TTL para búsquedas, detalles y playlists. En este nivel se entrega: **Cache persistente con Room y políticas por tipo de contenido.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Caching de respuestas** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Persistir la cache en Room
2. Definir TTL distintos por tipo de contenido
3. Manejar la cache en el arranque frío
4. Limpiar la cache vencida automáticamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Cache persistente con Room y políticas por tipo de contenido. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Persistir la cache en Room · Definir TTL distintos por tipo de contenido · Manejar la cache en el arranque frío · Limpiar la cache vencida automáticamente | lista | sí | 3-4 pasos |
| $criterios_clave | La cache sobrevive al reinicio de la app · Los TTL por contenido se respetan | lista | sí | calidad verificable |
| $prompt_guia | La cache de Ryutify se pierde al cerrar la app. Persistila en Room con TTL por tipo: búsquedas 10 minutos, detalles 1 hora, playlists 1 día. | texto | no | "Caching de respuestas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La cache sobrevive al reinicio de la app
- [ ] Los TTL por contenido se respetan

## Ejemplos de prompts

- "La cache de Ryutify se pierde al cerrar la app. Persistila en Room con TTL por tipo: búsquedas 10 minutos, detalles 1 hora, playlists 1 día."
- "Aplica Caching de respuestas (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza La cache sobrevive al reinicio de la app"
- "Revisa mi innertube-yt y dime qué pasos de Caching de respuestas me faltan en este nivel"