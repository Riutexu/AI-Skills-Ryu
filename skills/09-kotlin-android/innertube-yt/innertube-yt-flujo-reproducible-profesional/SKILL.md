---
name: innertube-yt-flujo-reproducible-profesional
description: Construcción del flujo reproductible · nivel Profesional · Cliente YouTube innertube: contenido de video. Convierte cualquier contenido en una secuencia de streams reproducibles. Objetivo del nivel: Pipeline de reproducción de producción: planos de datos y medición.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "flujo-reproducible"
  nivel: profesional
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Construcción del flujo reproductible — Profesional

## Qué hace este skill

Convierte cualquier contenido en una secuencia de streams reproducibles. En este nivel se entrega: **Pipeline de reproducción de producción: planos de datos y medición.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Construcción del flujo reproductible** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar el pipeline como funciones puras componibles
2. Agregar la telemetría por etapa del pipeline
3. Degradar a radio ante fallos consecutivos
4. Testear el pipeline con datos simulados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Pipeline de reproducción de producción: planos de datos y medición. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Modelar el pipeline como funciones puras componibles · Agregar la telemetría por etapa del pipeline · Degradar a radio ante fallos consecutivos · Testear el pipeline con datos simulados | lista | sí | 3-4 pasos |
| $criterios_clave | La telemetría muestra el tiempo de cada etapa · El pipeline se testea con datos simulados | lista | sí | calidad verificable |
| $prompt_guia | Quiero medir dónde se pierde tiempo entre buscar una canción y que suene en Ryutify. Modelá el pipeline por etapas con telemetría. | texto | no | "Construcción del flujo reproductible" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La telemetría muestra el tiempo de cada etapa
- [ ] El pipeline se testea con datos simulados

## Ejemplos de prompts

- "Quiero medir dónde se pierde tiempo entre buscar una canción y que suene en Ryutify. Modelá el pipeline por etapas con telemetría."
- "Aplica Construcción del flujo reproductible (nivel profesional) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza La telemetría muestra el tiempo de cada etapa"
- "Revisa mi innertube-yt y dime qué pasos de Construcción del flujo reproductible me faltan en este nivel"