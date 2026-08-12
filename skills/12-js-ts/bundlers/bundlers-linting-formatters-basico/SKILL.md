---
name: bundlers-linting-formatters-basico
description: Linting y formatters (ESLint, Prettier) · nivel Básico · Bundlers y tooling. Aplicás ESLint y Prettier como red de seguridad del estilo y de bugs comunes. Objetivo del nivel: Configurar ESLint y Prettier en el proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "linting-formatters"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Linting y formatters (ESLint, Prettier) — Básico

## Qué hace este skill

Aplicás ESLint y Prettier como red de seguridad del estilo y de bugs comunes. En este nivel se entrega: **Configurar ESLint y Prettier en el proyecto**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Linting y formatters (ESLint, Prettier)** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar ESLint con flat config
2. Integrar Prettier sin conflictos con ESLint
3. Agregar scripts de lint y format
4. Corregir las violaciones existentes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar ESLint y Prettier en el proyecto | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Configurar ESLint con flat config · Integrar Prettier sin conflictos con ESLint · Agregar scripts de lint y format · Corregir las violaciones existentes | lista | sí | 3-4 pasos |
| $criterios_clave | El lint pasa sin errores · Prettier y ESLint no se pisan | lista | sí | calidad verificable |
| $prompt_guia | Configurá ESLint con flat config y Prettier en el proyecto: sin reglas en conflicto, scripts de lint/format y el codebase limpio. | texto | no | "Linting y formatters (ESLint, Prettier)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El lint pasa sin errores
- [ ] Prettier y ESLint no se pisan

## Ejemplos de prompts

- "Configurá ESLint con flat config y Prettier en el proyecto: sin reglas en conflicto, scripts de lint/format y el codebase limpio."
- "Aplica Linting y formatters (ESLint, Prettier) (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza El lint pasa sin errores"
- "Revisa mi bundlers y dime qué pasos de Linting y formatters (ESLint, Prettier) me faltan en este nivel"