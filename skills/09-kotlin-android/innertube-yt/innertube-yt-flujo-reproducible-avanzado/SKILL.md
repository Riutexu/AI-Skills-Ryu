---
name: innertube-yt-flujo-reproducible-avanzado
description: Construcción del flujo reproductible · nivel Avanzado · Cliente YouTube innertube: contenido de video. Convierte cualquier contenido en una secuencia de streams reproducibles. Objetivo del nivel: Flujos encadenados para toda la cola con resiliencia.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "flujo-reproducible"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Construcción del flujo reproductible — Avanzado

## Qué hace este skill

Convierte cualquier contenido en una secuencia de streams reproducibles. En este nivel se entrega: **Flujos encadenados para toda la cola con resiliencia.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Construcción del flujo reproductible** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Construir los flujos de todas las canciones de la cola
2. Precargar el stream de la siguiente canción
3. Recuperar los streams fallidos con reintento
4. Mantener el orden de la cola ante fallos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Flujos encadenados para toda la cola con resiliencia. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Construir los flujos de todas las canciones de la cola · Precargar el stream de la siguiente canción · Recuperar los streams fallidos con reintento · Mantener el orden de la cola ante fallos | lista | sí | 3-4 pasos |
| $criterios_clave | La siguiente canción arranca sin esperar el stream · Un fallo de stream no altera el orden de la cola | lista | sí | calidad verificable |
| $prompt_guia | Quiero que la cola de Ryutify precargue el stream de la siguiente canción y que un fallo no desordene la cola. Diseñá el pipeline. | texto | no | "Construcción del flujo reproductible" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La siguiente canción arranca sin esperar el stream
- [ ] Un fallo de stream no altera el orden de la cola

## Ejemplos de prompts

- "Quiero que la cola de Ryutify precargue el stream de la siguiente canción y que un fallo no desordene la cola. Diseñá el pipeline."
- "Aplica Construcción del flujo reproductible (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza La siguiente canción arranca sin esperar el stream"
- "Revisa mi innertube-yt y dime qué pasos de Construcción del flujo reproductible me faltan en este nivel"