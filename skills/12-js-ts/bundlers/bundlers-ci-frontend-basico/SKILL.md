---
name: bundlers-ci-frontend-basico
description: CI de frontend · nivel Básico · Bundlers y tooling. Automatizás lint, build, tests y auditorías del frontend en el pipeline de CI. Objetivo del nivel: Configurar el pipeline básico del frontend
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "ci-frontend"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# CI de frontend — Básico

## Qué hace este skill

Automatizás lint, build, tests y auditorías del frontend en el pipeline de CI. En este nivel se entrega: **Configurar el pipeline básico del frontend**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CI de frontend** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Armar un job de CI con lint, build y tests
2. Fijar la versión de Node y los browsers
3. Cachear dependencias del pipeline
4. Publicar el estado del PR

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar el pipeline básico del frontend | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Armar un job de CI con lint, build y tests · Fijar la versión de Node y los browsers · Cachear dependencias del pipeline · Publicar el estado del PR | lista | sí | 3-4 pasos |
| $criterios_clave | El pipeline corre en cada push · Los artefactos del build se preservan | lista | sí | calidad verificable |
| $prompt_guia | Configurá el CI del frontend: lint, typecheck, tests y build en un job, con cache y la versión de Node fijada. | texto | no | "CI de frontend" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El pipeline corre en cada push
- [ ] Los artefactos del build se preservan

## Ejemplos de prompts

- "Configurá el CI del frontend: lint, typecheck, tests y build en un job, con cache y la versión de Node fijada."
- "Aplica CI de frontend (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza El pipeline corre en cada push"
- "Revisa mi bundlers y dime qué pasos de CI de frontend me faltan en este nivel"