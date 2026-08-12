---
name: bundlers-code-splitting-basico
description: Code splitting · nivel Básico · Bundlers y tooling. Dividís el bundle en partes que cargan bajo demanda para reducir el payload inicial. Objetivo del nivel: Dividir el código con import dinámico
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "code-splitting"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Code splitting — Básico

## Qué hace este skill

Dividís el bundle en partes que cargan bajo demanda para reducir el payload inicial. En este nivel se entrega: **Dividir el código con import dinámico**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Code splitting** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear chunks con import() dinámico
2. Dividir por rutas de la SPA
3. Verificar los chunks generados en el build
4. Manejar el estado de carga de cada chunk

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Dividir el código con import dinámico | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Crear chunks con import() dinámico · Dividir por rutas de la SPA · Verificar los chunks generados en el build · Manejar el estado de carga de cada chunk | lista | sí | 3-4 pasos |
| $criterios_clave | Las vistas no visitadas no están en el bundle inicial · Cada chunk carga bajo demanda | lista | sí | calidad verificable |
| $prompt_guia | Dividí el bundle de la SPA por rutas con import dinámico y verificá en el build que el chunk inicial no incluya las vistas. | texto | no | "Code splitting" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las vistas no visitadas no están en el bundle inicial
- [ ] Cada chunk carga bajo demanda

## Ejemplos de prompts

- "Dividí el bundle de la SPA por rutas con import dinámico y verificá en el build que el chunk inicial no incluya las vistas."
- "Aplica Code splitting (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza Las vistas no visitadas no están en el bundle inicial"
- "Revisa mi bundlers y dime qué pasos de Code splitting me faltan en este nivel"