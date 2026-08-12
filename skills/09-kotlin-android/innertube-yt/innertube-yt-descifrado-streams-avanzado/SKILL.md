---
name: innertube-yt-descifrado-streams-avanzado
description: Descifrado de streams · nivel Avanzado · Cliente YouTube innertube: contenido de video. Obtén y descifra las URLs de stream de audio de YouTube. Objetivo del nivel: Descifrar las firmas y manejar las variantes de formato.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "descifrado-streams"
  nivel: avanzado
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Descifrado de streams — Avanzado

## Qué hace este skill

Obtén y descifra las URLs de stream de audio de YouTube. En este nivel se entrega: **Descifrar las firmas y manejar las variantes de formato.**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Descifrado de streams** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar las URLs firmadas con la firma en la URL
2. Implementar el descifrado de firmas
3. Elegir el formato de audio óptimo entre los disponibles
4. Manejar la expiración de las URLs

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Descifrar las firmas y manejar las variantes de formato. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Identificar las URLs firmadas con la firma en la URL · Implementar el descifrado de firmas · Elegir el formato de audio óptimo entre los disponibles · Manejar la expiración de las URLs | lista | sí | 3-4 pasos |
| $criterios_clave | Las URLs firmadas se descifran y reproducen · El formato elegido es el de mejor calidad disponible | lista | sí | calidad verificable |
| $prompt_guia | Algunos streams de Ryutify vienen firmados y no reproducen. Implementá el descifrado de firmas y elegí el mejor formato de audio. | texto | no | "Descifrado de streams" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las URLs firmadas se descifran y reproducen
- [ ] El formato elegido es el de mejor calidad disponible

## Ejemplos de prompts

- "Algunos streams de Ryutify vienen firmados y no reproducen. Implementá el descifrado de firmas y elegí el mejor formato de audio."
- "Aplica Descifrado de streams (nivel avanzado) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Las URLs firmadas se descifran y reproducen"
- "Revisa mi innertube-yt y dime qué pasos de Descifrado de streams me faltan en este nivel"