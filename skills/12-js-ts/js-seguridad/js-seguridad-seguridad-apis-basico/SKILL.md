---
name: js-seguridad-seguridad-apis-basico
description: Seguridad de APIs · nivel Básico · Seguridad web JS. Consumís APIs de forma segura: HTTPS, autorización, rate limiting y respuestas verificadas. Objetivo del nivel: Consumir APIs con prácticas seguras básicas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "seguridad-apis"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Seguridad de APIs — Básico

## Qué hace este skill

Consumís APIs de forma segura: HTTPS, autorización, rate limiting y respuestas verificadas. En este nivel se entrega: **Consumir APIs con prácticas seguras básicas**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Seguridad de APIs** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Verificar el HTTPS en todas las llamadas
2. Manejar el 401 y 403 con acciones claras
3. No exponer datos de debug en producción
4. Revisar los headers de las respuestas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Consumir APIs con prácticas seguras básicas | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Verificar el HTTPS en todas las llamadas · Manejar el 401 y 403 con acciones claras · No exponer datos de debug en producción · Revisar los headers de las respuestas | lista | sí | 3-4 pasos |
| $criterios_clave | Todas las llamadas van por HTTPS · Los errores de autorización no filtran datos | lista | sí | calidad verificable |
| $prompt_guia | Auditá el consumo de la API: HTTPS en todas las llamadas, manejo correcto de 401/403 y sin datos de debug en pantalla. | texto | no | "Seguridad de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todas las llamadas van por HTTPS
- [ ] Los errores de autorización no filtran datos

## Ejemplos de prompts

- "Auditá el consumo de la API: HTTPS en todas las llamadas, manejo correcto de 401/403 y sin datos de debug en pantalla."
- "Aplica Seguridad de APIs (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza Todas las llamadas van por HTTPS"
- "Revisa mi js-seguridad y dime qué pasos de Seguridad de APIs me faltan en este nivel"