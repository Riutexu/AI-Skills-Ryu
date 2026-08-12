---
name: innertube-yt-detalle-sugerencias-profesional
description: Detalle y sugerencias · nivel Profesional · Cliente YouTube innertube: contenido de video. Información detallada de un video y sugerencias relacionadas. Objetivo del nivel: Experiencia de detalle del producto: precarga y coherencia con la reproducción.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "detalle-sugerencias"
  nivel: profesional
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Detalle y sugerencias — Profesional

## Qué hace este skill

Información detallada de un video y sugerencias relacionadas. En este nivel se entrega: **Experiencia de detalle del producto: precarga y coherencia con la reproducción.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Detalle y sugerencias** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Precargar el detalle de la siguiente canción de la cola
2. Sincronizar el detalle con el estado del player
3. Manejar videos eliminados o privados
4. Medir el tiempo de respuesta del detalle

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Experiencia de detalle del producto: precarga y coherencia con la reproducción. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Precargar el detalle de la siguiente canción de la cola · Sincronizar el detalle con el estado del player · Manejar videos eliminados o privados · Medir el tiempo de respuesta del detalle | lista | sí | 3-4 pasos |
| $criterios_clave | El detalle de la próxima canción está listo antes de que arranque · Los videos eliminados se muestran con su estado correcto | lista | sí | calidad verificable |
| $prompt_guia | Quiero que la pantalla del player de Ryutify muestre el detalle de la próxima canción sin esperas. Precargalo y manejá los videos eliminados. | texto | no | "Detalle y sugerencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El detalle de la próxima canción está listo antes de que arranque
- [ ] Los videos eliminados se muestran con su estado correcto

## Ejemplos de prompts

- "Quiero que la pantalla del player de Ryutify muestre el detalle de la próxima canción sin esperas. Precargalo y manejá los videos eliminados."
- "Aplica Detalle y sugerencias (nivel profesional) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza El detalle de la próxima canción está listo antes de que arranque"
- "Revisa mi innertube-yt y dime qué pasos de Detalle y sugerencias me faltan en este nivel"