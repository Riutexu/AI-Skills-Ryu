---
name: innertube-yt-mapeo-dominio-avanzado
description: Mapeo de datos a dominio · nivel Avanzado · Cliente YouTube innertube: contenido de video. Convierte las respuestas crudas de YouTube en los modelos de Ryutify. Objetivo del nivel: Mapeos complejos con normalización y enriquecimiento.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mapeo-dominio"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Mapeo de datos a dominio — Avanzado

## Qué hace este skill

Convierte las respuestas crudas de YouTube en los modelos de Ryutify. En este nivel se entrega: **Mapeos complejos con normalización y enriquecimiento.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mapeo de datos a dominio** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Normalizar los ids y las URLs de thumbnail
2. Enriquecer con datos locales como favoritos
3. Mapear las continuaciones a un modelo de página
4. Escribir tests de los mappers con fixtures

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Mapeos complejos con normalización y enriquecimiento. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Normalizar los ids y las URLs de thumbnail · Enriquecer con datos locales como favoritos · Mapear las continuaciones a un modelo de página · Escribir tests de los mappers con fixtures | lista | sí | 3-4 pasos |
| $criterios_clave | Los fixtures de las respuestas cubren los mappers · El enriquecimiento con datos locales funciona | lista | sí | calidad verificable |
| $prompt_guia | Los mappers de Ryutify no normalizan las URLs ni enriquecen con favoritos locales. Mejorálos y escribí tests con fixtures. | texto | no | "Mapeo de datos a dominio" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los fixtures de las respuestas cubren los mappers
- [ ] El enriquecimiento con datos locales funciona

## Ejemplos de prompts

- "Los mappers de Ryutify no normalizan las URLs ni enriquecen con favoritos locales. Mejorálos y escribí tests con fixtures."
- "Aplica Mapeo de datos a dominio (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Los fixtures de las respuestas cubren los mappers"
- "Revisa mi innertube-yt y dime qué pasos de Mapeo de datos a dominio me faltan en este nivel"