---
name: node-servicios-integracion-node-php-basico
description: Integración con PHP · nivel Básico · Node.js: servicios y CLIs. Hacés que las herramientas Node y el backend PHP convivan: scripts de build, deploy y dev. Objetivo del nivel: Orquestar scripts Node que llaman herramientas PHP
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "integracion-node-php"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# Integración con PHP — Básico

## Qué hace este skill

Hacés que las herramientas Node y el backend PHP convivan: scripts de build, deploy y dev. En este nivel se entrega: **Orquestar scripts Node que llaman herramientas PHP**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con PHP** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Ejecutar composer y artisan desde npm scripts
2. Pasar variables de entorno al proceso PHP
3. Capturar y mostrar la salida de PHP
4. Encadenar build frontend con pasos PHP

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Orquestar scripts Node que llaman herramientas PHP | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Ejecutar composer y artisan desde npm scripts · Pasar variables de entorno al proceso PHP · Capturar y mostrar la salida de PHP · Encadenar build frontend con pasos PHP | lista | sí | 3-4 pasos |
| $criterios_clave | Los scripts de npm corren los pasos PHP correctamente · Los errores de PHP fallan el script completo | lista | sí | calidad verificable |
| $prompt_guia | Configurá npm scripts que ejecuten composer install, las migraciones de artisan y el build de la SPA en orden, propagando los errores. | texto | no | "Integración con PHP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los scripts de npm corren los pasos PHP correctamente
- [ ] Los errores de PHP fallan el script completo

## Ejemplos de prompts

- "Configurá npm scripts que ejecuten composer install, las migraciones de artisan y el build de la SPA en orden, propagando los errores."
- "Aplica Integración con PHP (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Los scripts de npm corren los pasos PHP correctamente"
- "Revisa mi node-servicios y dime qué pasos de Integración con PHP me faltan en este nivel"