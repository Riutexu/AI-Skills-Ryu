---
name: bundlers-assets-imagenes-profesional
description: Assets e imágenes · nivel Profesional · Bundlers y tooling. Gestionás imágenes, fuentes y media en el build con formatos modernos y optimización. Objetivo del nivel: Diseñar la estrategia de media del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "assets-imagenes"
  nivel: profesional
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Assets e imágenes — Profesional

## Qué hace este skill

Gestionás imágenes, fuentes y media en el build con formatos modernos y optimización. En este nivel se entrega: **Diseñar la estrategia de media del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Assets e imágenes** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la pipeline de optimización de imágenes del build
2. Manejar la generación de múltiples resoluciones
3. Automatizar la auditoría de peso de media
4. Documentar la estrategia de assets

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la estrategia de media del proyecto | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Definir la pipeline de optimización de imágenes del build · Manejar la generación de múltiples resoluciones · Automatizar la auditoría de peso de media · Documentar la estrategia de assets | lista | sí | 3-4 pasos |
| $criterios_clave | La pipeline genera todas las resoluciones automáticamente · Las auditorías de media corren en CI | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la estrategia de media: pipeline de optimización en el build, generación automática de resoluciones y auditoría de peso automatizada en CI. | texto | no | "Assets e imágenes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La pipeline genera todas las resoluciones automáticamente
- [ ] Las auditorías de media corren en CI

## Ejemplos de prompts

- "Diseñá la estrategia de media: pipeline de optimización en el build, generación automática de resoluciones y auditoría de peso automatizada en CI."
- "Aplica Assets e imágenes (nivel profesional) a mi trabajo actual con Bundlers y tooling: prioriza La pipeline genera todas las resoluciones automáticamente"
- "Revisa mi bundlers y dime qué pasos de Assets e imágenes me faltan en este nivel"