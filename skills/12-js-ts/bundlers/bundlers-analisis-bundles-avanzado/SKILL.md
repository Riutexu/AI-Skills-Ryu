---
name: bundlers-analisis-bundles-avanzado
description: Análisis de bundles · nivel Avanzado · Bundlers y tooling. Analizás el tamaño del bundle, encontrás duplicados y mantenés presupuestos verificables. Objetivo del nivel: Reducir el peso con estrategias concretas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "analisis-bundles"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Análisis de bundles — Avanzado

## Qué hace este skill

Analizás el tamaño del bundle, encontrás duplicados y mantenés presupuestos verificables. En este nivel se entrega: **Reducir el peso con estrategias concretas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Análisis de bundles** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Eliminar duplicados de dependencias
2. Cargar paquetes pesados bajo demanda
3. Usar imports selectivos de las librerías
4. Medir la reducción lograda por cambio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Reducir el peso con estrategias concretas | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Eliminar duplicados de dependencias · Cargar paquetes pesados bajo demanda · Usar imports selectivos de las librerías · Medir la reducción lograda por cambio | lista | sí | 3-4 pasos |
| $criterios_clave | La reducción de peso se documenta por cambio · No hay dependencias duplicadas en el bundle | lista | sí | calidad verificable |
| $prompt_guia | Bajá el bundle de 350KB a menos de 200KB: eliminá duplicados, imports selectivos de las librerías grandes y documentá la reducción de cada cambio. | texto | no | "Análisis de bundles" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La reducción de peso se documenta por cambio
- [ ] No hay dependencias duplicadas en el bundle

## Ejemplos de prompts

- "Bajá el bundle de 350KB a menos de 200KB: eliminá duplicados, imports selectivos de las librerías grandes y documentá la reducción de cada cambio."
- "Aplica Análisis de bundles (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza La reducción de peso se documenta por cambio"
- "Revisa mi bundlers y dime qué pasos de Análisis de bundles me faltan en este nivel"