---
name: bundlers-analisis-bundles-basico
description: Análisis de bundles · nivel Básico · Bundlers y tooling. Analizás el tamaño del bundle, encontrás duplicados y mantenés presupuestos verificables. Objetivo del nivel: Visualizar y entender la composición del bundle
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "analisis-bundles"
  nivel: basico
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Análisis de bundles — Básico

## Qué hace este skill

Analizás el tamaño del bundle, encontrás duplicados y mantenés presupuestos verificables. En este nivel se entrega: **Visualizar y entender la composición del bundle**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Análisis de bundles** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar el reporte visual con rollup-plugin-visualizer
2. Identificar los paquetes más pesados
3. Comparar el bundle entre versiones
4. Explicar el tamaño de cada chunk

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Visualizar y entender la composición del bundle | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Generar el reporte visual con rollup-plugin-visualizer · Identificar los paquetes más pesados · Comparar el bundle entre versiones · Explicar el tamaño de cada chunk | lista | sí | 3-4 pasos |
| $criterios_clave | El reporte se genera y se interpreta · Los paquetes pesados están identificados | lista | sí | calidad verificable |
| $prompt_guia | El bundle pesa 350KB: generá el análisis visual con rollup-plugin-visualizer e identificá qué paquetes pesan más y por qué. | texto | no | "Análisis de bundles" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El reporte se genera y se interpreta
- [ ] Los paquetes pesados están identificados

## Ejemplos de prompts

- "El bundle pesa 350KB: generá el análisis visual con rollup-plugin-visualizer e identificá qué paquetes pesan más y por qué."
- "Aplica Análisis de bundles (nivel basico) a mi trabajo actual con Bundlers y tooling: prioriza El reporte se genera y se interpreta"
- "Revisa mi bundlers y dime qué pasos de Análisis de bundles me faltan en este nivel"