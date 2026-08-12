---
name: bundlers-sourcemaps-basico
description: Sourcemaps · nivel Básico · Bundlers y tooling. Generás y gestionás sourcemaps para debuggear el código transpilado en producción. Objetivo del nivel: Configurar sourcemaps en dev y producción
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "sourcemaps"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Sourcemaps — Básico

## Qué hace este skill

Generás y gestionás sourcemaps para debuggear el código transpilado en producción. En este nivel se entrega: **Configurar sourcemaps en dev y producción**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sourcemaps** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Habilitar sourcemaps en el modo dev
2. Configurar el tipo de sourcemap de producción
3. Verificar el mapeo en DevTools
4. Entender el costo de cada tipo de sourcemap

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar sourcemaps en dev y producción | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Habilitar sourcemaps en el modo dev · Configurar el tipo de sourcemap de producción · Verificar el mapeo en DevTools · Entender el costo de cada tipo de sourcemap | lista | sí | 3-4 pasos |
| $criterios_clave | El código fuente se ve en DevTools · El tipo de sourcemap elegido es el apropiado | lista | sí | calidad verificable |
| $prompt_guia | Configurá los sourcemaps del proyecto: dev con inline y producción con el tipo que permita debuggear sin exponer todo el source. | texto | no | "Sourcemaps" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El código fuente se ve en DevTools
- [ ] El tipo de sourcemap elegido es el apropiado

## Ejemplos de prompts

- "Configurá los sourcemaps del proyecto: dev con inline y producción con el tipo que permita debuggear sin exponer todo el source."
- "Aplica Sourcemaps (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza El código fuente se ve en DevTools"
- "Revisa mi bundlers y dime qué pasos de Sourcemaps me faltan en este nivel"