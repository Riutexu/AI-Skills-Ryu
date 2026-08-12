---
name: innertube-yt-canal-continuaciones-profesional
description: Canales y continuaciones · nivel Profesional · Cliente YouTube innertube: contenido de video. Perfiles de canal y carga incremental con los tokens de continuación. Objetivo del nivel: Abstracción de paginado del producto para todo el contenido.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "canal-continuaciones"
  nivel: profesional
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Canales y continuaciones — Profesional

## Qué hace este skill

Perfiles de canal y carga incremental con los tokens de continuación. En este nivel se entrega: **Abstracción de paginado del producto para todo el contenido.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Canales y continuaciones** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un paginador genérico con continuaciones
2. Reutilizar el paginado en búsqueda, canal y playlists
3. Cachear las páginas ya cargadas
4. Medir el rendimiento del paginado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Abstracción de paginado del producto para todo el contenido. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Crear un paginador genérico con continuaciones · Reutilizar el paginado en búsqueda, canal y playlists · Cachear las páginas ya cargadas · Medir el rendimiento del paginado | lista | sí | 3-4 pasos |
| $criterios_clave | El paginado genérico se usa en los tres flujos sin duplicación · Las páginas cacheadas no repiten requests | lista | sí | calidad verificable |
| $prompt_guia | Quiero un paginador genérico de continuaciones para toda Ryutify: búsqueda, canal y playlists, con cache de páginas y medición. | texto | no | "Canales y continuaciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El paginado genérico se usa en los tres flujos sin duplicación
- [ ] Las páginas cacheadas no repiten requests

## Ejemplos de prompts

- "Quiero un paginador genérico de continuaciones para toda Ryutify: búsqueda, canal y playlists, con cache de páginas y medición."
- "Aplica Canales y continuaciones (nivel profesional) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza El paginado genérico se usa en los tres flujos sin duplicación"
- "Revisa mi innertube-yt y dime qué pasos de Canales y continuaciones me faltan en este nivel"