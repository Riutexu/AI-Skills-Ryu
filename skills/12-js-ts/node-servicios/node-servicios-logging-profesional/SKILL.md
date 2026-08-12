---
name: node-servicios-logging-profesional
description: Logging · nivel Profesional · Node.js: servicios y CLIs. Logueás con niveles, formato estructurado y sin exponer datos sensibles. Objetivo del nivel: Diseñar la estrategia de observabilidad de las herramientas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "logging"
  nivel: profesional
  stack: "Node 22, npm, streams, workers"
---

# Logging — Profesional

## Qué hace este skill

Logueás con niveles, formato estructurado y sin exponer datos sensibles. En este nivel se entrega: **Diseñar la estrategia de observabilidad de las herramientas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logging** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir eventos de negocio y métricas de log
2. Centralizar logs con rotación y retención
3. Correlacionar logs entre frontend y backend
4. Documentar el flujo de diagnóstico con logs

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de observabilidad de las herramientas | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Definir eventos de negocio y métricas de log · Centralizar logs con rotación y retención · Correlacionar logs entre frontend y backend · Documentar el flujo de diagnóstico con logs | lista | sí | 3-4 pasos |
| $criterios_clave | Los eventos de negocio se loguean consistentemente · Un incidente se diagnostica con los logs del día | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estrategia de logs del proyecto: eventos de negocio consistentes, rotación y retención, correlación con el backend PHP y la guía de diagnóstico de incidentes. | texto | no | "Logging" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los eventos de negocio se loguean consistentemente
- [ ] Un incidente se diagnostica con los logs del día

## Ejemplos de prompts

- "Diseñá la estrategia de logs del proyecto: eventos de negocio consistentes, rotación y retención, correlación con el backend PHP y la guía de diagnóstico de incidentes."
- "Aplica Logging (nivel profesional) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los eventos de negocio se loguean consistentemente"
- "Revisa mi node-servicios y dime qué pasos de Logging me faltan en este nivel"