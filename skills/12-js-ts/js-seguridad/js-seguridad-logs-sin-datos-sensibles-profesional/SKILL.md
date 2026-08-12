---
name: js-seguridad-logs-sin-datos-sensibles-profesional
description: Logs sin datos sensibles · nivel Profesional · Seguridad web JS. Mantenés los logs y el reporting libres de datos personales y credenciales. Objetivo del nivel: Definir la política de privacidad en los datos de diagnóstico
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "logs-sin-datos-sensibles"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Logs sin datos sensibles — Profesional

## Qué hace este skill

Mantenés los logs y el reporting libres de datos personales y credenciales. En este nivel se entrega: **Definir la política de privacidad en los datos de diagnóstico**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logs sin datos sensibles** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la política de datos de diagnóstico del proyecto
2. Implementar el saneamiento automático en la capa de reporte
3. Auditar los logs periódicamente con tests
4. Documentar la política y su cumplimiento

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la política de privacidad en los datos de diagnóstico | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Crear la política de datos de diagnóstico del proyecto · Implementar el saneamiento automático en la capa de reporte · Auditar los logs periódicamente con tests · Documentar la política y su cumplimiento | lista | sí | 3-4 pasos |
| $criterios_clave | La política define qué, cómo y cuánto se guarda · Las auditorías automáticas detectan fugas en los logs | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la política de datos de diagnóstico: qué se loguea, saneamiento automático de la capa de reporte, auditorías automáticas y la documentación de cumplimiento. | texto | no | "Logs sin datos sensibles" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La política define qué, cómo y cuánto se guarda
- [ ] Las auditorías automáticas detectan fugas en los logs

## Ejemplos de prompts

- "Diseñá la política de datos de diagnóstico: qué se loguea, saneamiento automático de la capa de reporte, auditorías automáticas y la documentación de cumplimiento."
- "Aplica Logs sin datos sensibles (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza La política define qué, cómo y cuánto se guarda"
- "Revisa mi js-seguridad y dime qué pasos de Logs sin datos sensibles me faltan en este nivel"