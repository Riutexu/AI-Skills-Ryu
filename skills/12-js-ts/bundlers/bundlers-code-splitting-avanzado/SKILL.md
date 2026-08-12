---
name: bundlers-code-splitting-avanzado
description: Code splitting · nivel Avanzado · Bundlers y tooling. Dividís el bundle en partes que cargan bajo demanda para reducir el payload inicial. Objetivo del nivel: Controlar la división de chunks y sus límites
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "code-splitting"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Code splitting — Avanzado

## Qué hace este skill

Dividís el bundle en partes que cargan bajo demanda para reducir el payload inicial. En este nivel se entrega: **Controlar la división de chunks y sus límites**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Code splitting** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar manualChunks con criterio
2. Extraer dependencias compartidas en chunks comunes
3. Evitar chunks huérfanos o duplicados
4. Medir el impacto de la división

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Controlar la división de chunks y sus límites | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Configurar manualChunks con criterio · Extraer dependencias compartidas en chunks comunes · Evitar chunks huérfanos o duplicados · Medir el impacto de la división | lista | sí | 3-4 pasos |
| $criterios_clave | Las dependencias compartidas no se duplican · Los límites de tamaño de chunk están definidos | lista | sí | calidad verificable |
| $prompt_guia | El build genera chunks de 400KB: configurá manualChunks para separar dependencias comunes, evitá duplicaciones y medí la mejora. | texto | no | "Code splitting" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las dependencias compartidas no se duplican
- [ ] Los límites de tamaño de chunk están definidos

## Ejemplos de prompts

- "El build genera chunks de 400KB: configurá manualChunks para separar dependencias comunes, evitá duplicaciones y medí la mejora."
- "Aplica Code splitting (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza Las dependencias compartidas no se duplican"
- "Revisa mi bundlers y dime qué pasos de Code splitting me faltan en este nivel"