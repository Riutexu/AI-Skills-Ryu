---
name: bundlers-modo-produccion-avanzado
description: Modo producción · nivel Avanzado · Bundlers y tooling. Configurás el build de producción: minificación, hashing, variables y salida final. Objetivo del nivel: Manejar variables y salidas por entorno de producción
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "modo-produccion"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Modo producción — Avanzado

## Qué hace este skill

Configurás el build de producción: minificación, hashing, variables y salida final. En este nivel se entrega: **Manejar variables y salidas por entorno de producción**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Modo producción** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar variables de entorno por modo
2. Generar builds distintos para staging y producción
3. Manejar secretos de build sin exponerlos
4. Configurar la optimización de producción fina

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Manejar variables y salidas por entorno de producción | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Configurar variables de entorno por modo · Generar builds distintos para staging y producción · Manejar secretos de build sin exponerlos · Configurar la optimización de producción fina | lista | sí | 3-4 pasos |
| $criterios_clave | Cada entorno genera el build correcto · Los secretos no están en el bundle final | lista | sí | calidad verificable |
| $prompt_guia | La SPA necesita builds distintos para staging y producción: variables por modo, sin secrets en el bundle final y config de optimización fina. | texto | no | "Modo producción" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada entorno genera el build correcto
- [ ] Los secretos no están en el bundle final

## Ejemplos de prompts

- "La SPA necesita builds distintos para staging y producción: variables por modo, sin secrets en el bundle final y config de optimización fina."
- "Aplica Modo producción (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza Cada entorno genera el build correcto"
- "Revisa mi bundlers y dime qué pasos de Modo producción me faltan en este nivel"