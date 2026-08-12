---
name: node-servicios-npm-scripts-basico
description: npm y scripts · nivel Básico · Node.js: servicios y CLIs. Gestionás dependencias, scripts y versionado con npm de forma segura y ordenada. Objetivo del nivel: Gestionar el package.json y sus scripts
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "npm-scripts"
  nivel: basico
  stack: "Node 22, npm, streams, workers"
---

# npm y scripts — Básico

## Qué hace este skill

Gestionás dependencias, scripts y versionado con npm de forma segura y ordenada. En este nivel se entrega: **Gestionar el package.json y sus scripts**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **npm y scripts** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir scripts de dev, build, test y lint
2. Encadenar scripts con pre/post hooks
3. Instalar dependencias y separar dev de prod
4. Usar npm ci en entornos reproducibles

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Gestionar el package.json y sus scripts | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Definir scripts de dev, build, test y lint · Encadenar scripts con pre/post hooks · Instalar dependencias y separar dev de prod · Usar npm ci en entornos reproducibles | lista | sí | 3-4 pasos |
| $criterios_clave | El proyecto se instala con npm ci en un clon limpio · Los scripts cubren el flujo de desarrollo completo | lista | sí | calidad verificable |
| $prompt_guia | Organizá el package.json del proyecto: scripts de dev/build/test/lint, hooks pre-test y dependencias de desarrollo bien separadas. | texto | no | "npm y scripts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El proyecto se instala con npm ci en un clon limpio
- [ ] Los scripts cubren el flujo de desarrollo completo

## Ejemplos de prompts

- "Organizá el package.json del proyecto: scripts de dev/build/test/lint, hooks pre-test y dependencias de desarrollo bien separadas."
- "Aplica npm y scripts (nivel basico) a mi trabajo actual con Node.js: servicios y CLIs: prioriza El proyecto se instala con npm ci en un clon limpio"
- "Revisa mi node-servicios y dime qué pasos de npm y scripts me faltan en este nivel"