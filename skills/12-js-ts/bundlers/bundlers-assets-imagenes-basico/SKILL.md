---
name: bundlers-assets-imagenes-basico
description: Assets e imágenes · nivel Básico · Bundlers y tooling. Gestionás imágenes, fuentes y media en el build con formatos modernos y optimización. Objetivo del nivel: Importar y servir assets con Vite
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "assets-imagenes"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Assets e imágenes — Básico

## Qué hace este skill

Gestionás imágenes, fuentes y media en el build con formatos modernos y optimización. En este nivel se entrega: **Importar y servir assets con Vite**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Assets e imágenes** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Importar imágenes, fuentes y SVG desde el código
2. Configurar la carpeta public para assets
3. Usar la carga de assets en CSS
4. Entender cómo Vite procesa cada tipo de asset

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Importar y servir assets con Vite | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Importar imágenes, fuentes y SVG desde el código · Configurar la carpeta public para assets · Usar la carga de assets en CSS · Entender cómo Vite procesa cada tipo de asset | lista | sí | 3-4 pasos |
| $criterios_clave | Los assets importados se referencian correctamente · Los archivos de public se sirven tal cual | lista | sí | calidad verificable |
| $prompt_guia | La SPA usa imágenes y fuentes: integrá los assets con los imports de Vite, mové lo que corresponda a public/ y verificá las URLs del build. | texto | no | "Assets e imágenes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los assets importados se referencian correctamente
- [ ] Los archivos de public se sirven tal cual

## Ejemplos de prompts

- "La SPA usa imágenes y fuentes: integrá los assets con los imports de Vite, mové lo que corresponda a public/ y verificá las URLs del build."
- "Aplica Assets e imágenes (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza Los assets importados se referencian correctamente"
- "Revisa mi bundlers y dime qué pasos de Assets e imágenes me faltan en este nivel"