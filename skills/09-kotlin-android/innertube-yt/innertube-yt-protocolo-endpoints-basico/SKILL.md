---
name: innertube-yt-protocolo-endpoints-basico
description: Protocolo innertube y endpoints · nivel Básico · Cliente YouTube innertube: contenido de video. Entiende el protocolo de la API innertube de YouTube y sus endpoints clave. Objetivo del nivel: Conocer los endpoints principales de innertube y su estructura de request.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "protocolo-endpoints"
  nivel: basico
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Protocolo innertube y endpoints — Básico

## Qué hace este skill

Entiende el protocolo de la API innertube de YouTube y sus endpoints clave. En este nivel se entrega: **Conocer los endpoints principales de innertube y su estructura de request.**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Protocolo innertube y endpoints** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar los endpoints de búsqueda, player y playlist
2. Armar el payload base con clientName y clientVersion
3. Enviar el primer request de búsqueda
4. Entender la estructura de la respuesta

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Conocer los endpoints principales de innertube y su estructura de request. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Identificar los endpoints de búsqueda, player y playlist · Armar el payload base con clientName y clientVersion · Enviar el primer request de búsqueda · Entender la estructura de la respuesta | lista | sí | 3-4 pasos |
| $criterios_clave | El request base de búsqueda devuelve una respuesta válida · El payload se construye de forma centralizada | lista | sí | calidad verificable |
| $prompt_guia | Estoy arrancando el cliente innertube de Ryutify. Explicame los endpoints básicos y armá el payload base de búsqueda con el client correcto. | texto | no | "Protocolo innertube y endpoints" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El request base de búsqueda devuelve una respuesta válida
- [ ] El payload se construye de forma centralizada

## Ejemplos de prompts

- "Estoy arrancando el cliente innertube de Ryutify. Explicame los endpoints básicos y armá el payload base de búsqueda con el client correcto."
- "Aplica Protocolo innertube y endpoints (nivel basico) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza El request base de búsqueda devuelve una respuesta válida"
- "Revisa mi innertube-yt y dime qué pasos de Protocolo innertube y endpoints me faltan en este nivel"