---
name: node-servicios-debugging-node-profesional
description: Debugging · nivel Profesional · Node.js: servicios y CLIs. Debuggeás Node con inspector, node --inspect, profiling y heap dumps. Objetivo del nivel: Establecer el flujo de debugging y diagnóstico del equipo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "debugging-node"
  nivel: profesional
  stack: "Node 22, npm, streams, workers"
---

# Debugging — Profesional

## Qué hace este skill

Debuggeás Node con inspector, node --inspect, profiling y heap dumps. En este nivel se entrega: **Establecer el flujo de debugging y diagnóstico del equipo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Debugging** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la guía de debugging del proyecto
2. Configurar el debugger del editor para Node
3. Implementar telemetría mínima para diagnósticos
4. Documentar incidentes con sus diagnósticos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Establecer el flujo de debugging y diagnóstico del equipo | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Crear la guía de debugging del proyecto · Configurar el debugger del editor para Node · Implementar telemetría mínima para diagnósticos · Documentar incidentes con sus diagnósticos | lista | sí | 3-4 pasos |
| $criterios_clave | La guía cubre los casos reales del proyecto · Los incidentes documentan el diagnóstico y la solución | lista | sí | calidad verificable |
| $prompt_guia | Escribí la guía de debugging de las herramientas Node del equipo: inspector, profiles, heap dumps y el flujo para reportar un incidente con su diagnóstico. | texto | no | "Debugging" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La guía cubre los casos reales del proyecto
- [ ] Los incidentes documentan el diagnóstico y la solución

## Ejemplos de prompts

- "Escribí la guía de debugging de las herramientas Node del equipo: inspector, profiles, heap dumps y el flujo para reportar un incidente con su diagnóstico."
- "Aplica Debugging (nivel profesional) a mi trabajo actual con Node.js: servicios y CLIs: prioriza La guía cubre los casos reales del proyecto"
- "Revisa mi node-servicios y dime qué pasos de Debugging me faltan en este nivel"