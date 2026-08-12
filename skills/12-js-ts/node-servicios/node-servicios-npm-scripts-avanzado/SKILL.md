---
name: node-servicios-npm-scripts-avanzado
description: npm y scripts · nivel Avanzado · Node.js: servicios y CLIs. Gestionás dependencias, scripts y versionado con npm de forma segura y ordenada. Objetivo del nivel: Controlar dependencias y versionado con precisión
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "npm-scripts"
  nivel: avanzado
  stack: "Node 22, npm, streams, workers"
---

# npm y scripts — Avanzado

## Qué hace este skill

Gestionás dependencias, scripts y versionado con npm de forma segura y ordenada. En este nivel se entrega: **Controlar dependencias y versionado con precisión**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Node.js: servicios y CLIs** (Node 22, npm, streams, workers) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **npm y scripts** dentro de Node.js: servicios y CLIs.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, npm, streams, workers**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar engines y lockfile en el package.json
2. Auditar dependencias y resolver vulnerabilidades
3. Publicar y versionar con npm version
4. Manejar peerDependencies y overrides

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Controlar dependencias y versionado con precisión | texto | sí | resultado medible |
| $stack | Node.js: servicios y CLIs | texto | sí | 12-js-ts/node-servicios |
| $tecnologias | Node 22, npm, streams, workers | texto | sí | Node 22, npm, streams, workers |
| $tareas_clave | Configurar engines y lockfile en el package.json · Auditar dependencias y resolver vulnerabilidades · Publicar y versionar con npm version · Manejar peerDependencies y overrides | lista | sí | 3-4 pasos |
| $criterios_clave | Las vulnerabilidades se resuelven o documentan · El versionado semver se respeta en los releases | lista | sí | calidad verificable |
| $prompt_guia | Auditá las dependencias del proyecto con npm audit, resolvé las vulnerabilidades posibles, configurá engines y documentá el flujo de versionado semver. | texto | no | "npm y scripts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las vulnerabilidades se resuelven o documentan
- [ ] El versionado semver se respeta en los releases

## Ejemplos de prompts

- "Auditá las dependencias del proyecto con npm audit, resolvé las vulnerabilidades posibles, configurá engines y documentá el flujo de versionado semver."
- "Aplica npm y scripts (nivel avanzado) a mi trabajo actual con Node.js: servicios y CLIs: prioriza Las vulnerabilidades se resuelven o documentan"
- "Revisa mi node-servicios y dime qué pasos de npm y scripts me faltan en este nivel"