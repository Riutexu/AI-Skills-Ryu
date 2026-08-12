---
name: innertube-yt-protocolo-endpoints-profesional
description: Protocolo innertube y endpoints · nivel Profesional · Cliente YouTube innertube: contenido de video. Entiende el protocolo de la API innertube de YouTube y sus endpoints clave. Objetivo del nivel: Diseñar el cliente innertube de producción de Ryutify: versionado y abstracción.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "protocolo-endpoints"
  nivel: profesional
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Protocolo innertube y endpoints — Profesional

## Qué hace este skill

Entiende el protocolo de la API innertube de YouTube y sus endpoints clave. En este nivel se entrega: **Diseñar el cliente innertube de producción de Ryutify: versionado y abstracción.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Protocolo innertube y endpoints** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Abstraer el protocolo detrás de una interfaz de repositorio
2. Versionar el contrato de los DTOs
3. Mantener los cambios de YouTube aislados en una capa
4. Documentar los endpoints usados y su caducidad

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el cliente innertube de producción de Ryutify: versionado y abstracción. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Abstraer el protocolo detrás de una interfaz de repositorio · Versionar el contrato de los DTOs · Mantener los cambios de YouTube aislados en una capa · Documentar los endpoints usados y su caducidad | lista | sí | 3-4 pasos |
| $criterios_clave | Un cambio de YouTube se resuelve tocando una sola capa · La documentación de endpoints está actualizada | lista | sí | calidad verificable |
| $prompt_guia | YouTube cambia el formato de las respuestas seguido y rompe el parseo. Diseñá el cliente de Ryutify para aislar esos cambios en una capa versionada. | texto | no | "Protocolo innertube y endpoints" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un cambio de YouTube se resuelve tocando una sola capa
- [ ] La documentación de endpoints está actualizada

## Ejemplos de prompts

- "YouTube cambia el formato de las respuestas seguido y rompe el parseo. Diseñá el cliente de Ryutify para aislar esos cambios en una capa versionada."
- "Aplica Protocolo innertube y endpoints (nivel profesional) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Un cambio de YouTube se resuelve tocando una sola capa"
- "Revisa mi innertube-yt y dime qué pasos de Protocolo innertube y endpoints me faltan en este nivel"