---
name: innertube-yt-pruebas-cliente-profesional
description: Pruebas del cliente innertube · nivel Profesional · Cliente YouTube innertube: contenido de video. Tests del cliente con fixtures, interceptores y datos simulados. Objetivo del nivel: Estrategia de pruebas del cliente: contratos y regresión ante cambios de YouTube.
license: MIT
compatibility: opencode
metadata:
  familia: "09-kotlin-android"
  tema: "pruebas-cliente"
  nivel: profesional
  stack: "API innertube custom, búsqueda, sugerencias, streams, IDs, TTL"
---

# Pruebas del cliente innertube — Profesional

## Qué hace este skill

Tests del cliente con fixtures, interceptores y datos simulados. En este nivel se entrega: **Estrategia de pruebas del cliente: contratos y regresión ante cambios de YouTube.**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Cliente YouTube innertube: contenido de video** (API innertube custom, búsqueda, sugerencias, streams, IDs, TTL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Pruebas del cliente innertube** dentro de Cliente YouTube innertube: contenido de video.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **API innertube custom, búsqueda, sugerencias, streams, IDs, TTL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear tests de contrato de las respuestas
2. Automatizar la captura de fixtures reales
3. Correr los tests del cliente en el CI
4. Medir la cobertura de los mappers

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de pruebas del cliente: contratos y regresión ante cambios de YouTube. | texto | sí | resultado medible |
| $stack | Cliente YouTube innertube: contenido de video | texto | sí | 09-kotlin-android/innertube-yt |
| $tecnologias | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL | texto | sí | API innertube custom, búsqueda, sugerencias, streams, IDs, TTL |
| $tareas_clave | Crear tests de contrato de las respuestas · Automatizar la captura de fixtures reales · Correr los tests del cliente en el CI · Medir la cobertura de los mappers | lista | sí | 3-4 pasos |
| $criterios_clave | Los fixtures se capturan y versionan de forma automatizada · El CI corre los tests del cliente en cada PR | lista | sí | calidad verificable |
| $prompt_guia | Quiero que los cambios de YouTube no rompan Ryutify en silencio: tests de contrato, captura automatizada de fixtures y CI obligatorio. | texto | no | "Pruebas del cliente innertube" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los fixtures se capturan y versionan de forma automatizada
- [ ] El CI corre los tests del cliente en cada PR

## Ejemplos de prompts

- "Quiero que los cambios de YouTube no rompan Ryutify en silencio: tests de contrato, captura automatizada de fixtures y CI obligatorio."
- "Aplica Pruebas del cliente innertube (nivel profesional) a mi trabajo actual con Cliente YouTube innertube: contenido de video: prioriza Los fixtures se capturan y versionan de forma automatizada"
- "Revisa mi innertube-yt y dime qué pasos de Pruebas del cliente innertube me faltan en este nivel"