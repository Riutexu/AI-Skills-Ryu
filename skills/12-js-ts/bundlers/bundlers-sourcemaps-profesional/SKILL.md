---
name: bundlers-sourcemaps-profesional
description: Sourcemaps · nivel Profesional · Bundlers y tooling. Generás y gestionás sourcemaps para debuggear el código transpilado en producción. Objetivo del nivel: Diseñar la gestión de sourcemaps del ciclo de vida
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "sourcemaps"
  nivel: profesional
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Sourcemaps — Profesional

## Qué hace este skill

Generás y gestionás sourcemaps para debuggear el código transpilado en producción. En este nivel se entrega: **Diseñar la gestión de sourcemaps del ciclo de vida**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Sourcemaps** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la política de sourcemaps por entorno
2. Automatizar la subida de sourcemaps en el release
3. Expirar sourcemaps viejos de versiones anteriores
4. Documentar el flujo de debugging con sourcemaps

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la gestión de sourcemaps del ciclo de vida | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Definir la política de sourcemaps por entorno · Automatizar la subida de sourcemaps en el release · Expirar sourcemaps viejos de versiones anteriores · Documentar el flujo de debugging con sourcemaps | lista | sí | 3-4 pasos |
| $criterios_clave | Cada release sube sus sourcemaps al release del error tracking · La política está documentada y es automática | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la gestión de sourcemaps: política por entorno, subida automática de los del release al tracking y expiración de los viejos. | texto | no | "Sourcemaps" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada release sube sus sourcemaps al release del error tracking
- [ ] La política está documentada y es automática

## Ejemplos de prompts

- "Diseñá la gestión de sourcemaps: política por entorno, subida automática de los del release al tracking y expiración de los viejos."
- "Aplica Sourcemaps (nivel profesional) a mi trabajo actual con Bundlers y tooling: prioriza Cada release sube sus sourcemaps al release del error tracking"
- "Revisa mi bundlers y dime qué pasos de Sourcemaps me faltan en este nivel"