---
name: js-seguridad-csp-profesional
description: CSP · nivel Profesional · Seguridad web JS. Implementás Content Security Policy con estrategias seguras de scripts, styles y conexiones. Objetivo del nivel: Definir la política CSP del proyecto y su verificación
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "csp"
  nivel: profesional
  stack: "CSP, fetch, storage seguro, npm audit"
---

# CSP — Profesional

## Qué hace este skill

Implementás Content Security Policy con estrategias seguras de scripts, styles y conexiones. En este nivel se entrega: **Definir la política CSP del proyecto y su verificación**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web JS** (CSP, fetch, storage seguro, npm audit) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CSP** dentro de Seguridad web JS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **CSP, fetch, storage seguro, npm audit**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la CSP por entorno (dev, staging, prod)
2. Automatizar la verificación de la CSP en CI
3. Monitorear los reportes de violación en producción
4. Documentar la política y su evolución

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la política CSP del proyecto y su verificación | texto | sí | resultado medible |
| $stack | Seguridad web JS | texto | sí | 12-js-ts/js-seguridad |
| $tecnologias | CSP, fetch, storage seguro, npm audit | texto | sí | CSP, fetch, storage seguro, npm audit |
| $tareas_clave | Definir la CSP por entorno (dev, staging, prod) · Automatizar la verificación de la CSP en CI · Monitorear los reportes de violación en producción · Documentar la política y su evolución | lista | sí | 3-4 pasos |
| $criterios_clave | Cada entorno tiene su CSP definida · Las violaciones se monitorean y atienden | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la política CSP: por entorno, verificación automática en CI, monitoreo de violaciones de producción y el proceso de evolución de la política. | texto | no | "CSP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada entorno tiene su CSP definida
- [ ] Las violaciones se monitorean y atienden

## Ejemplos de prompts

- "Diseñá la política CSP: por entorno, verificación automática en CI, monitoreo de violaciones de producción y el proceso de evolución de la política."
- "Aplica CSP (nivel profesional) a mi trabajo actual con Seguridad web JS: prioriza Cada entorno tiene su CSP definida"
- "Revisa mi js-seguridad y dime qué pasos de CSP me faltan en este nivel"