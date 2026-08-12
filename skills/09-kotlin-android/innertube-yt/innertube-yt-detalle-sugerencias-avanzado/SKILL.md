---
name: innertube-yt-detalle-sugerencias-avanzado
description: Detalle y sugerencias · nivel Avanzado · Cliente YouTube innertube: contenido de video. Información detallada de un video y sugerencias relacionadas. Objetivo del nivel: Sugerencias relacionadas y metadatos extendidos.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "detalle-sugerencias"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Detalle y sugerencias — Avanzado

## Qué hace este skill

Información detallada de un video y sugerencias relacionadas. En este nivel se entrega: **Sugerencias relacionadas y metadatos extendidos.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Detalle y sugerencias** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Obtener las sugerencias de un video
2. Extraer los metadatos: likes, vista previa y contenido
3. Armar la sección de radio con sugerencias
4. Cachear el detalle con TTL

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Sugerencias relacionadas y metadatos extendidos. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Obtener las sugerencias de un video · Extraer los metadatos: likes, vista previa y contenido · Armar la sección de radio con sugerencias · Cachear el detalle con TTL | lista | sí | 3-4 pasos |
| $criterios_clave | Las sugerencias se muestran en la sección de radio · El detalle cacheado expira según el TTL | lista | sí | calidad verificable |
| $prompt_guia | Agregá a Ryutify la sección de radio con las sugerencias del video actual y el detalle extendido con cache TTL. | texto | no | "Detalle y sugerencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las sugerencias se muestran en la sección de radio
- [ ] El detalle cacheado expira según el TTL

## Ejemplos de prompts

- "Agregá a Ryutify la sección de radio con las sugerencias del video actual y el detalle extendido con cache TTL."
- "Aplica Detalle y sugerencias (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Las sugerencias se muestran en la sección de radio"
- "Revisa mi innertube-yt y dime qué pasos de Detalle y sugerencias me faltan en este nivel"