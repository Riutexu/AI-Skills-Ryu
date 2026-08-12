---
name: innertube-yt-integracion-media3-avanzado
description: Integración con Media3 · nivel Avanzado · Cliente YouTube innertube: contenido de video. Conecta el cliente innertube con el ExoPlayer de Ryutify. Objetivo del nivel: Precarga y recuperación integrada entre cliente y player.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "integracion-media3"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Integración con Media3 — Avanzado

## Qué hace este skill

Conecta el cliente innertube con el ExoPlayer de Ryutify. En este nivel se entrega: **Precarga y recuperación integrada entre cliente y player.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con Media3** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Precargar el stream de la siguiente canción
2. Recuperar los fallos del player con nuevos streams
3. Sincronizar la sesión de medios con el contenido
4. Manejar la calidad según el estado del player

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Precarga y recuperación integrada entre cliente y player. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Precargar el stream de la siguiente canción · Recuperar los fallos del player con nuevos streams · Sincronizar la sesión de medios con el contenido · Manejar la calidad según el estado del player | lista | sí | 3-4 pasos |
| $criterios_clave | La siguiente canción arranca sin pausa por carga · Un fallo de stream se recupera con uno nuevo | lista | sí | calidad verificable |
| $prompt_guia | Quiero que Ryutify precargue el siguiente stream mientras suena la actual y que un fallo se recupere con un stream nuevo automáticamente. | texto | no | "Integración con Media3" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La siguiente canción arranca sin pausa por carga
- [ ] Un fallo de stream se recupera con uno nuevo

## Ejemplos de prompts

- "Quiero que Ryutify precargue el siguiente stream mientras suena la actual y que un fallo se recupere con un stream nuevo automáticamente."
- "Aplica Integración con Media3 (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza La siguiente canción arranca sin pausa por carga"
- "Revisa mi innertube-yt y dime qué pasos de Integración con Media3 me faltan en este nivel"