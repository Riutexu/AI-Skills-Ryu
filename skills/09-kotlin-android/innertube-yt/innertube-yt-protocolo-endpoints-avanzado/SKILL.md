---
name: innertube-yt-protocolo-endpoints-avanzado
description: Protocolo innertube y endpoints · nivel Avanzado · Cliente YouTube innertube: contenido de video. Entiende el protocolo de la API innertube de YouTube y sus endpoints clave. Objetivo del nivel: Manejar variantes de clientes y la estructura de la respuesta en profundidad.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "protocolo-endpoints"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Protocolo innertube y endpoints — Avanzado

## Qué hace este skill

Entiende el protocolo de la API innertube de YouTube y sus endpoints clave. En este nivel se entrega: **Manejar variantes de clientes y la estructura de la respuesta en profundidad.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Protocolo innertube y endpoints** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Probar los clientes web, android y tv de innertube
2. Extraer los campos de la respuesta con path dinámicos
3. Manejar los campos ausentes de la respuesta
4. Normalizar la respuesta en un modelo tipado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar variantes de clientes y la estructura de la respuesta en profundidad. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Probar los clientes web, android y tv de innertube · Extraer los campos de la respuesta con path dinámicos · Manejar los campos ausentes de la respuesta · Normalizar la respuesta en un modelo tipado | lista | sí | 3-4 pasos |
| $criterios_clave | El parseo tolera respuestas con campos faltantes · El modelo tipado cubre los campos usados por Ryutify | lista | sí | calidad verificable |
| $prompt_guia | El cliente web de innertube me da respuestas más ricas pero cambia de forma. Compará los clientes disponibles y normalizá la respuesta en modelos tipados. | texto | no | "Protocolo innertube y endpoints" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El parseo tolera respuestas con campos faltantes
- [ ] El modelo tipado cubre los campos usados por Ryutify

## Ejemplos de prompts

- "El cliente web de innertube me da respuestas más ricas pero cambia de forma. Compará los clientes disponibles y normalizá la respuesta en modelos tipados."
- "Aplica Protocolo innertube y endpoints (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza El parseo tolera respuestas con campos faltantes"
- "Revisa mi innertube-yt y dime qué pasos de Protocolo innertube y endpoints me faltan en este nivel"