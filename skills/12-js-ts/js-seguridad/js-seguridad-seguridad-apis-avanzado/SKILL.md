---
name: js-seguridad-seguridad-apis-avanzado
description: Seguridad de APIs · nivel Avanzado · Seguridad web JS. Consumís APIs de forma segura: HTTPS, autorización, rate limiting y respuestas verificadas. Objetivo del nivel: Manejar límites de uso y respuestas hostiles
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "seguridad-apis"
  nivel: avanzado
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Seguridad de APIs — Avanzado

## Qué hace este skill

Consumís APIs de forma segura: HTTPS, autorización, rate limiting y respuestas verificadas. En este nivel se entrega: **Manejar límites de uso y respuestas hostiles**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Seguridad de APIs** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar 429 con backoff del rate limit
2. Validar las respuestas antes de usarlas
3. Evitar la réplica explosiva con límites de clients
4. Manejar timeouts de la API

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar límites de uso y respuestas hostiles | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Manejar 429 con backoff del rate limit · Validar las respuestas antes de usarlas · Evitar la réplica explosiva con límites de clients · Manejar timeouts de la API | lista | sí | 3-4 pasos |
| $criterios_clave | El 429 se maneja respetando el retry del servidor · Las respuestas se validan antes de consumirse | lista | sí | calidad verificable |
| $prompt_guia | La API externa limita a 100 requests por minuto: manejá el 429 con backoff, validá cada respuesta y poné timeouts a todas las llamadas. | texto | no | "Seguridad de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El 429 se maneja respetando el retry del servidor
- [ ] Las respuestas se validan antes de consumirse

## Ejemplos de prompts

- "La API externa limita a 100 requests por minuto: manejá el 429 con backoff, validá cada respuesta y poné timeouts a todas las llamadas."
- "Aplica Seguridad de APIs (nivel avanzado) a mi trabajo actual con Seguridad web JS: prioriza El 429 se maneja respetando el retry del servidor"
- "Revisa mi js-seguridad y dime qué pasos de Seguridad de APIs me faltan en este nivel"