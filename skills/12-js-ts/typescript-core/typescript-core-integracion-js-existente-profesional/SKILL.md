---
name: typescript-core-integracion-js-existente-profesional
description: Integración con JS existente · nivel Profesional · TypeScript: tipado profesional. Convivís con código JS legacy y librerías sin tipos sin perder la seguridad del tipado. Objetivo del nivel: Planificar y ejecutar la migración gradual a TS en producción
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "integracion-js-existente"
  nivel: profesional
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Integración con JS existente — Profesional

## Qué hace este skill

Convivís con código JS legacy y librerías sin tipos sin perder la seguridad del tipado. En este nivel se entrega: **Planificar y ejecutar la migración gradual a TS en producción**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Integración con JS existente** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un plan de migración por módulos con prioridades
2. Implementar allowJs + strict granulado por archivo
3. Cerrar brechas de tipado con declaraciones provisionales
4. Mantener el build verde durante toda la migración

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Planificar y ejecutar la migración gradual a TS en producción | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear un plan de migración por módulos con prioridades · Implementar allowJs + strict granulado por archivo · Cerrar brechas de tipado con declaraciones provisionales · Mantener el build verde durante toda la migración | lista | sí | 3-4 pasos |
| $criterios_clave | El build nunca se rompe durante la migración · El plan define hitos medibles y dueños | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el plan de migración a TS de la SPA de 40 archivos JS: orden por riesgo, estrategia de strict gradual y cómo mantener el build verde. El plazo es un mes y el equipo sigue haciendo features. | texto | no | "Integración con JS existente" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El build nunca se rompe durante la migración
- [ ] El plan define hitos medibles y dueños

## Ejemplos de prompts

- "Diseñá el plan de migración a TS de la SPA de 40 archivos JS: orden por riesgo, estrategia de strict gradual y cómo mantener el build verde. El plazo es un mes y el equipo sigue haciendo features."
- "Aplica Integración con JS existente (nivel profesional) a mi trabajo actual con TypeScript: tipado profesional: prioriza El build nunca se rompe durante la migración"
- "Revisa mi typescript-core y dime qué pasos de Integración con JS existente me faltan en este nivel"