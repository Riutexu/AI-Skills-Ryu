---
name: bundlers-vite-esbuild-basico
description: Vite y esbuild · nivel Básico · Bundlers y tooling. Configurás Vite con esbuild para transpilar, servir y construir aplicaciones vanilla. Objetivo del nivel: Configurar Vite con dev server y build básico
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "vite-esbuild"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Vite y esbuild — Básico

## Qué hace este skill

Configurás Vite con esbuild para transpilar, servir y construir aplicaciones vanilla. En este nivel se entrega: **Configurar Vite con dev server y build básico**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Vite y esbuild** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear el vite.config con server, plugins y resolve
2. Usar el HMR en desarrollo
3. Configurar la entrada HTML y los assets
4. Generar el build de producción con npm run build

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar Vite con dev server y build básico | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Crear el vite.config con server, plugins y resolve · Usar el HMR en desarrollo · Configurar la entrada HTML y los assets · Generar el build de producción con npm run build | lista | sí | 3-4 pasos |
| $criterios_clave | El dev server sirve la app con HMR · El build genera la salida en dist/ | lista | sí | calidad verificable |
| $prompt_guia | Configurá el vite.config.js de la SPA: alias de imports, HMR funcionando y el build generando a dist/ sin errores. | texto | no | "Vite y esbuild" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El dev server sirve la app con HMR
- [ ] El build genera la salida en dist/

## Ejemplos de prompts

- "Configurá el vite.config.js de la SPA: alias de imports, HMR funcionando y el build generando a dist/ sin errores."
- "Aplica Vite y esbuild (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza El dev server sirve la app con HMR"
- "Revisa mi bundlers y dime qué pasos de Vite y esbuild me faltan en este nivel"