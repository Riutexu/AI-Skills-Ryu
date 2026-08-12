---
name: bundlers-modo-produccion-profesional
description: Modo producción · nivel Profesional · Bundlers y tooling. Configurás el build de producción: minificación, hashing, variables y salida final. Objetivo del nivel: Diseñar el pipeline de release del frontend
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "modo-produccion"
  nivel: profesional
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Modo producción — Profesional

## Qué hace este skill

Configurás el build de producción: minificación, hashing, variables y salida final. En este nivel se entrega: **Diseñar el pipeline de release del frontend**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Modo producción** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el flujo de build a release con validaciones
2. Crear artefactos verificables del release
3. Automatizar la verificación post-deploy
4. Documentar el ciclo de vida del build

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el pipeline de release del frontend | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Definir el flujo de build a release con validaciones · Crear artefactos verificables del release · Automatizar la verificación post-deploy · Documentar el ciclo de vida del build | lista | sí | 3-4 pasos |
| $criterios_clave | El release produce artefactos verificados · El post-deploy se valida automáticamente | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el pipeline de release del frontend: build con validaciones, artefactos verificados, smoke test post-deploy y el ciclo documentado. | texto | no | "Modo producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El release produce artefactos verificados
- [ ] El post-deploy se valida automáticamente

## Ejemplos de prompts

- "Diseñá el pipeline de release del frontend: build con validaciones, artefactos verificados, smoke test post-deploy y el ciclo documentado."
- "Aplica Modo producción (nivel profesional) a mi trabajo actual con Bundlers y tooling: prioriza El release produce artefactos verificados"
- "Revisa mi bundlers y dime qué pasos de Modo producción me faltan en este nivel"