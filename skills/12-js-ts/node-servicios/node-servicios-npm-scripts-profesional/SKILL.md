---
name: node-servicios-npm-scripts-profesional
description: npm y scripts · nivel Profesional · Node.js: servicios y CLIs. Gestionás dependencias, scripts y versionado con npm de forma segura y ordenada. Objetivo del nivel: Diseñar el ciclo de vida del paquete y del monorepo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "npm-scripts"
  nivel: profesional
  stack: "Node 22, npm, streams, workers"
---

# npm y scripts — Profesional

## Qué hace este skill

Gestionás dependencias, scripts y versionado con npm de forma segura y ordenada. En este nivel se entrega: **Diseñar el ciclo de vida del paquete y del monorepo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **npm y scripts** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el flujo de release con changelog
2. Configurar workspaces para el monorepo
3. Automatizar scripts repetitivos con herramientas propias
4. Documentar el flujo de contribución

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el ciclo de vida del paquete y del monorepo | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Definir el flujo de release con changelog · Configurar workspaces para el monorepo · Automatizar scripts repetitivos con herramientas propias · Documentar el flujo de contribución | lista | sí | 3-4 pasos |
| $criterios_clave | Los releases generan changelog y versiones automáticas · Los workspaces comparten config sin duplicar | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el flujo de releases del monorepo: workspaces con npm, changelog automático, versionado de paquetes y documentación del flujo de contribución. | texto | no | "npm y scripts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los releases generan changelog y versiones automáticas
- [ ] Los workspaces comparten config sin duplicar

## Ejemplos de prompts

- "Diseñá el flujo de releases del monorepo: workspaces con npm, changelog automático, versionado de paquetes y documentación del flujo de contribución."
- "Aplica npm y scripts (nivel profesional) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los releases generan changelog y versiones automáticas"
- "Revisa mi node-servicios y dime qué pasos de npm y scripts me faltan en este nivel"