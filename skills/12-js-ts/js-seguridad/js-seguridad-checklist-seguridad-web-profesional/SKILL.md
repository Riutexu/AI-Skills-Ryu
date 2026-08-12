---
name: js-seguridad-checklist-seguridad-web-profesional
description: Checklist de seguridad web · nivel Profesional · Seguridad web JS. Aplicás y mantenés un checklist de seguridad integral que se verifica en cada release. Objetivo del nivel: Incorporar el checklist de seguridad al proceso de release
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "checklist-seguridad-web"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# Checklist de seguridad web — Profesional

## Qué hace este skill

Aplicás y mantenés un checklist de seguridad integral que se verifica en cada release. En este nivel se entrega: **Incorporar el checklist de seguridad al proceso de release**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Checklist de seguridad web** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el checklist por nivel de cambio
2. Automatizar la verificación del checklist en CI
3. Crear el proceso de respuesta a hallazgos
4. Documentar la evolución de la seguridad del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Incorporar el checklist de seguridad al proceso de release | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir el checklist por nivel de cambio · Automatizar la verificación del checklist en CI · Crear el proceso de respuesta a hallazgos · Documentar la evolución de la seguridad del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | El checklist es parte del gate de release · Los hallazgos tienen responsables y plazos | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el checklist de seguridad como parte del release: niveles por tipo de cambio, verificación automatizada en CI, proceso de respuesta y evolución documentada. | texto | no | "Checklist de seguridad web" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El checklist es parte del gate de release
- [ ] Los hallazgos tienen responsables y plazos

## Ejemplos de prompts

- "Diseñá el checklist de seguridad como parte del release: niveles por tipo de cambio, verificación automatizada en CI, proceso de respuesta y evolución documentada."
- "Aplica Checklist de seguridad web (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza El checklist es parte del gate de release"
- "Revisa mi js-seguridad y dime qué pasos de Checklist de seguridad web me faltan en este nivel"