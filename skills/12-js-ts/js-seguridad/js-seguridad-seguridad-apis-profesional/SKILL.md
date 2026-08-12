---
name: js-seguridad-seguridad-apis-profesional
description: Seguridad de APIs · nivel Profesional · Seguridad web JS. Consumís APIs de forma segura: HTTPS, autorización, rate limiting y respuestas verificadas. Objetivo del nivel: Diseñar la capa de seguridad de integraciones
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "seguridad-apis"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Seguridad de APIs — Profesional

## Qué hace este skill

Consumís APIs de forma segura: HTTPS, autorización, rate limiting y respuestas verificadas. En este nivel se entrega: **Diseñar la capa de seguridad de integraciones**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Seguridad de APIs** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el manejo de credenciales de las integraciones
2. Implementar la verificación de respuestas con esquemas
3. Crear el monitoreo de errores de integraciones
4. Documentar las integraciones y sus límites

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la capa de seguridad de integraciones | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir el manejo de credenciales de las integraciones · Implementar la verificación de respuestas con esquemas · Crear el monitoreo de errores de integraciones · Documentar las integraciones y sus límites | lista | sí | 3-4 pasos |
| $criterios_clave | Las credenciales de integraciones pasan por el backend · El monitoreo detecta errores de integraciones | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la capa de seguridad de las integraciones: credenciales solo en el backend, verificación de respuestas por esquema, monitoreo de errores y documentación. | texto | no | "Seguridad de APIs" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las credenciales de integraciones pasan por el backend
- [ ] El monitoreo detecta errores de integraciones

## Ejemplos de prompts

- "Diseñá la capa de seguridad de las integraciones: credenciales solo en el backend, verificación de respuestas por esquema, monitoreo de errores y documentación."
- "Aplica Seguridad de APIs (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza Las credenciales de integraciones pasan por el backend"
- "Revisa mi js-seguridad y dime qué pasos de Seguridad de APIs me faltan en este nivel"