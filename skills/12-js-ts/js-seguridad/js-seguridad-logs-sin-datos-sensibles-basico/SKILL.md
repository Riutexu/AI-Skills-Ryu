---
name: js-seguridad-logs-sin-datos-sensibles-basico
description: Logs sin datos sensibles · nivel Básico · Seguridad web JS. Mantenés los logs y el reporting libres de datos personales y credenciales. Objetivo del nivel: Loguear sin información sensible
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "logs-sin-datos-sensibles"
  nivel: basico
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Logs sin datos sensibles — Básico

## Qué hace este skill

Mantenés los logs y el reporting libres de datos personales y credenciales. En este nivel se entrega: **Loguear sin información sensible**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logs sin datos sensibles** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Revisar lo que se loguea en el frontend
2. Redactar emails, tokens y passwords de los logs
3. Espiar el payload antes de loguear
4. Verificar la console del sitio en producción

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Loguear sin información sensible | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Revisar lo que se loguea en el frontend · Redactar emails, tokens y passwords de los logs · Espiar el payload antes de loguear · Verificar la console del sitio en producción | lista | sí | 3-4 pasos |
| $criterios_clave | No hay datos sensibles en los logs del frontend · La redacción se aplica antes de registrar | lista | sí | calidad verificable |
| $prompt_guia | El frontend loguea respuestas enteras con datos personales: redactá emails y tokens antes de loguear y verificá que la consola de producción esté limpia. | texto | no | "Logs sin datos sensibles" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No hay datos sensibles en los logs del frontend
- [ ] La redacción se aplica antes de registrar

## Ejemplos de prompts

- "El frontend loguea respuestas enteras con datos personales: redactá emails y tokens antes de loguear y verificá que la consola de producción esté limpia."
- "Aplica Logs sin datos sensibles (nivel basico) a mi trabajo actual con Seguridad web JS: prioriza No hay datos sensibles en los logs del frontend"
- "Revisa mi js-seguridad y dime qué pasos de Logs sin datos sensibles me faltan en este nivel"