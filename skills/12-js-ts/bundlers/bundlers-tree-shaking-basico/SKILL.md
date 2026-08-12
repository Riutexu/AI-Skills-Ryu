---
name: bundlers-tree-shaking-basico
description: Tree shaking · nivel Básico · Bundlers y tooling. Eliminás código muerto del bundle con exports estáticos, sideEffects y análisis preciso. Objetivo del nivel: Entender y habilitar el tree shaking del build
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tree-shaking"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Tree shaking — Básico

## Qué hace este skill

Eliminás código muerto del bundle con exports estáticos, sideEffects y análisis preciso. En este nivel se entrega: **Entender y habilitar el tree shaking del build**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tree shaking** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Ver qué exports entran al bundle y cuáles no
2. Usar ESM para permitir el tree shaking
3. Evitar barrels que rompan el shaking
4. Medir el efecto con el tamaño del bundle

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Entender y habilitar el tree shaking del build | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Ver qué exports entran al bundle y cuáles no · Usar ESM para permitir el tree shaking · Evitar barrels que rompan el shaking · Medir el efecto con el tamaño del bundle | lista | sí | 3-4 pasos |
| $criterios_clave | El bundle no incluye exports no usados · Los barrels no impiden la eliminación | lista | sí | calidad verificable |
| $prompt_guia | El bundle incluye funciones que no usamos: verificá el tree shaking, corregí los barrels que lo rompen y medí el tamaño antes y después. | texto | no | "Tree shaking" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El bundle no incluye exports no usados
- [ ] Los barrels no impiden la eliminación

## Ejemplos de prompts

- "El bundle incluye funciones que no usamos: verificá el tree shaking, corregí los barrels que lo rompen y medí el tamaño antes y después."
- "Aplica Tree shaking (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza El bundle no incluye exports no usados"
- "Revisa mi bundlers y dime qué pasos de Tree shaking me faltan en este nivel"