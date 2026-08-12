---
name: innertube-yt-canal-continuaciones-avanzado
description: Canales y continuaciones · nivel Avanzado · Cliente YouTube innertube: contenido de video. Perfiles de canal y carga incremental con los tokens de continuación. Objetivo del nivel: Continuaciones y carga incremental de contenido.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "canal-continuaciones"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Canales y continuaciones — Avanzado

## Qué hace este skill

Perfiles de canal y carga incremental con los tokens de continuación. En este nivel se entrega: **Continuaciones y carga incremental de contenido.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Canales y continuaciones** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Entender los tokens de continuación de innertube
2. Implementar la carga de la siguiente página
3. Manejar el final de las continuaciones
4. Agregar el scroll infinito del canal

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Continuaciones y carga incremental de contenido. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Entender los tokens de continuación de innertube · Implementar la carga de la siguiente página · Manejar el final de las continuaciones · Agregar el scroll infinito del canal | lista | sí | 3-4 pasos |
| $criterios_clave | El scroll infinito del canal carga todas las páginas · El final de las continuaciones se detecta correctamente | lista | sí | calidad verificable |
| $prompt_guia | El perfil de artista de Ryutify carga solo la primera página. Implementá las continuaciones con scroll infinito. | texto | no | "Canales y continuaciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El scroll infinito del canal carga todas las páginas
- [ ] El final de las continuaciones se detecta correctamente

## Ejemplos de prompts

- "El perfil de artista de Ryutify carga solo la primera página. Implementá las continuaciones con scroll infinito."
- "Aplica Canales y continuaciones (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza El scroll infinito del canal carga todas las páginas"
- "Revisa mi innertube-yt y dime qué pasos de Canales y continuaciones me faltan en este nivel"