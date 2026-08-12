---
name: bundlers-modo-produccion-basico
description: Modo producción · nivel Básico · Bundlers y tooling. Configurás el build de producción: minificación, hashing, variables y salida final. Objetivo del nivel: Configurar el build de producción básico
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "modo-produccion"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Modo producción — Básico

## Qué hace este skill

Configurás el build de producción: minificación, hashing, variables y salida final. En este nivel se entrega: **Configurar el build de producción básico**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Modo producción** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar el modo build de Vite
2. Entender la minificación y el hashing de archivos
3. Definir la base URL del deploy
4. Verificar el resultado en dist/ con preview

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Configurar el build de producción básico | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Configurar el modo build de Vite · Entender la minificación y el hashing de archivos · Definir la base URL del deploy · Verificar el resultado en dist/ con preview | lista | sí | 3-4 pasos |
| $criterios_clave | El build produce archivos con hash · npm run preview sirve el build correctamente | lista | sí | calidad verificable |
| $prompt_guia | Configurá el build de producción: minificación, hashes en los nombres, base URL configurable y verificá con el preview server. | texto | no | "Modo producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El build produce archivos con hash
- [ ] npm run preview sirve el build correctamente

## Ejemplos de prompts

- "Configurá el build de producción: minificación, hashes en los nombres, base URL configurable y verificá con el preview server."
- "Aplica Modo producción (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza El build produce archivos con hash"
- "Revisa mi bundlers y dime qué pasos de Modo producción me faltan en este nivel"