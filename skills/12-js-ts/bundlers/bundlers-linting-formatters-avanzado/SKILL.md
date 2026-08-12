---
name: bundlers-linting-formatters-avanzado
description: Linting y formatters (ESLint, Prettier) · nivel Avanzado · Bundlers y tooling. Aplicás ESLint y Prettier como red de seguridad del estilo y de bugs comunes. Objetivo del nivel: Personalizar reglas y detectar bugs potenciales
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "linting-formatters"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Linting y formatters (ESLint, Prettier) — Avanzado

## Qué hace este skill

Aplicás ESLint y Prettier como red de seguridad del estilo y de bugs comunes. En este nivel se entrega: **Personalizar reglas y detectar bugs potenciales**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Linting y formatters (ESLint, Prettier)** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Activar reglas de errores comunes (no-unused, eqeqeq)
2. Agregar reglas de seguridad básicas
3. Configurar reglas por tipo de archivo
4. Automatizar el arreglo con eslint --fix

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Personalizar reglas y detectar bugs potenciales | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Activar reglas de errores comunes (no-unused, eqeqeq) · Agregar reglas de seguridad básicas · Configurar reglas por tipo de archivo · Automatizar el arreglo con eslint --fix | lista | sí | 3-4 pasos |
| $criterios_clave | Las reglas activas detectan bugs reales del codebase · Las configuraciones por archivo están justificadas | lista | sí | calidad verificable |
| $prompt_guia | Endurecé el lint del proyecto: reglas de errores comunes y seguridad, config por tipo de archivo y el flujo con --fix en el pre-commit. | texto | no | "Linting y formatters (ESLint, Prettier)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las reglas activas detectan bugs reales del codebase
- [ ] Las configuraciones por archivo están justificadas

## Ejemplos de prompts

- "Endurecé el lint del proyecto: reglas de errores comunes y seguridad, config por tipo de archivo y el flujo con --fix en el pre-commit."
- "Aplica Linting y formatters (ESLint, Prettier) (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza Las reglas activas detectan bugs reales del codebase"
- "Revisa mi bundlers y dime qué pasos de Linting y formatters (ESLint, Prettier) me faltan en este nivel"