---
name: bundlers-actualizacion-dependencias-avanzado
description: Actualización de dependencias · nivel Avanzado · Bundlers y tooling. Mantenés las dependencias al día con estrategias de actualización y verificación continua. Objetivo del nivel: Planificar actualizaciones mayores con riesgo controlado
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "actualizacion-dependencias"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Actualización de dependencias — Avanzado

## Qué hace este skill

Mantenés las dependencias al día con estrategias de actualización y verificación continua. En este nivel se entrega: **Planificar actualizaciones mayores con riesgo controlado**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Actualización de dependencias** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Planificar las actualizaciones mayores con riesgo
2. Usar ncu para seleccionar qué actualizar
3. Resolver breaking changes con migraciones
4. Mantener el histórico de actualizaciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Planificar actualizaciones mayores con riesgo controlado | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Planificar las actualizaciones mayores con riesgo · Usar ncu para seleccionar qué actualizar · Resolver breaking changes con migraciones · Mantener el histórico de actualizaciones | lista | sí | 3-4 pasos |
| $criterios_clave | Las actualizaciones mayores se documentan con su breaking change · Las migraciones quedan en el repo | lista | sí | calidad verificable |
| $prompt_guia | Hay que migrar de Vite 5 a 7: planificá la actualización, usá ncu, resolvé los breaking changes y documentá la migración con el histórico. | texto | no | "Actualización de dependencias" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las actualizaciones mayores se documentan con su breaking change
- [ ] Las migraciones quedan en el repo

## Ejemplos de prompts

- "Hay que migrar de Vite 5 a 7: planificá la actualización, usá ncu, resolvé los breaking changes y documentá la migración con el histórico."
- "Aplica Actualización de dependencias (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza Las actualizaciones mayores se documentan con su breaking change"
- "Revisa mi bundlers y dime qué pasos de Actualización de dependencias me faltan en este nivel"