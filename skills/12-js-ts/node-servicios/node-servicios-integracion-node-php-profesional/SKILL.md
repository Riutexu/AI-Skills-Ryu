---
name: node-servicios-integracion-node-php-profesional
description: Integración con PHP · nivel Profesional · Node.js: servicios y CLIs. Hacés que las herramientas Node y el backend PHP convivan: scripts de build, deploy y dev. Objetivo del nivel: Diseñar el pipeline integrado de build y release
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "integracion-node-php"
  nivel: profesional
  stack: "Node 22, npm, streams, workers"
---

# Integración con PHP — Profesional

## Qué hace este skill

Hacés que las herramientas Node y el backend PHP convivan: scripts de build, deploy y dev. En este nivel se entrega: **Diseñar el pipeline integrado de build y release**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con PHP** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el flujo de build end-to-end con artefactos
2. Implementar deploy con pasos frontend y backend atómicos
3. Crear la estrategia de rollback integrada
4. Documentar el pipeline completo para el equipo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el pipeline integrado de build y release | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Definir el flujo de build end-to-end con artefactos · Implementar deploy con pasos frontend y backend atómicos · Crear la estrategia de rollback integrada · Documentar el pipeline completo para el equipo | lista | sí | 3-4 pasos |
| $criterios_clave | El release genera artefactos verificados de ambos lados · El rollback restaura frontend y backend consistentemente | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el pipeline de release integrado: build de la SPA y del backend PHP, artefactos verificados, deploy atómico y estrategia de rollback conjunta. | texto | no | "Integración con PHP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El release genera artefactos verificados de ambos lados
- [ ] El rollback restaura frontend y backend consistentemente

## Ejemplos de prompts

- "Diseñá el pipeline de release integrado: build de la SPA y del backend PHP, artefactos verificados, deploy atómico y estrategia de rollback conjunta."
- "Aplica Integración con PHP (nivel profesional) a mi trabajo actual con Node.js: servicios y CLIs: prioriza El release genera artefactos verificados de ambos lados"
- "Revisa mi node-servicios y dime qué pasos de Integración con PHP me faltan en este nivel"