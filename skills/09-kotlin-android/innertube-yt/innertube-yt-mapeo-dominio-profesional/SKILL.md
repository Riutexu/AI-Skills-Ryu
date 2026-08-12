---
name: innertube-yt-mapeo-dominio-profesional
description: Mapeo de datos a dominio · nivel Profesional · Cliente YouTube innertube: contenido de video. Convierte las respuestas crudas de YouTube en los modelos de Ryutify. Objetivo del nivel: Capa de mapeo del producto: contratos versionados y evolución de la API.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "mapeo-dominio"
  nivel: profesional
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Mapeo de datos a dominio — Profesional

## Qué hace este skill

Convierte las respuestas crudas de YouTube en los modelos de Ryutify. En este nivel se entrega: **Capa de mapeo del producto: contratos versionados y evolución de la API.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mapeo de datos a dominio** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Versionar el mapeo frente a cambios de la API
2. Definir el contrato de dominio estable
3. Manejar la deprecación de campos de la API
4. Documentar el flujo completo de datos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Capa de mapeo del producto: contratos versionados y evolución de la API. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Versionar el mapeo frente a cambios de la API · Definir el contrato de dominio estable · Manejar la deprecación de campos de la API · Documentar el flujo completo de datos | lista | sí | 3-4 pasos |
| $criterios_clave | Un cambio de la API de YouTube no altera el dominio · El contrato de dominio está documentado | lista | sí | calidad verificable |
| $prompt_guia | Quiero que el dominio de Ryutify sea estable aunque YouTube cambie: versioná los mapeos, documentá el contrato y manejá las deprecaciones. | texto | no | "Mapeo de datos a dominio" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un cambio de la API de YouTube no altera el dominio
- [ ] El contrato de dominio está documentado

## Ejemplos de prompts

- "Quiero que el dominio de Ryutify sea estable aunque YouTube cambie: versioná los mapeos, documentá el contrato y manejá las deprecaciones."
- "Aplica Mapeo de datos a dominio (nivel profesional) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Un cambio de la API de YouTube no altera el dominio"
- "Revisa mi innertube-yt y dime qué pasos de Mapeo de datos a dominio me faltan en este nivel"