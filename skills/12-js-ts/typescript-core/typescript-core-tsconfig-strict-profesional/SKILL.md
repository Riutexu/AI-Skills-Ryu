---
name: typescript-core-tsconfig-strict-profesional
description: tsconfig y strict · nivel Profesional · TypeScript: tipado profesional. Configurás el compilador con strict mode y opciones que endurecen el tipado. Objetivo del nivel: Diseñar la configuración de compilación para monorepo y CI
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tsconfig-strict"
  nivel: profesional
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# tsconfig y strict — Profesional

## Qué hace este skill

Configurás el compilador con strict mode y opciones que endurecen el tipado. En este nivel se entrega: **Diseñar la configuración de compilación para monorepo y CI**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **tsconfig y strict** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear tsconfig base y configuraciones que la extienden
2. Configurar el typecheck como paso de CI
3. Optimizar tiempos de compilación con incremental
4. Definir política de strict por módulo si hace falta

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar la configuración de compilación para monorepo y CI | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear tsconfig base y configuraciones que la extienden · Configurar el typecheck como paso de CI · Optimizar tiempos de compilación con incremental · Definir política de strict por módulo si hace falta | lista | sí | 3-4 pasos |
| $criterios_clave | El typecheck corre en CI en menos de 2 minutos · La configuración está documentada y centralizada | lista | sí | calidad verificable |
| $prompt_guia | Diseñá la configuración de TS para el monorepo: un tsconfig.base.json, config por paquete, build incremental y el paso de typecheck en el pipeline de CI. | texto | no | "tsconfig y strict" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El typecheck corre en CI en menos de 2 minutos
- [ ] La configuración está documentada y centralizada

## Ejemplos de prompts

- "Diseñá la configuración de TS para el monorepo: un tsconfig.base.json, config por paquete, build incremental y el paso de typecheck en el pipeline de CI."
- "Aplica tsconfig y strict (nivel profesional) a mi trabajo actual con TypeScript: tipado profesional: prioriza El typecheck corre en CI en menos de 2 minutos"
- "Revisa mi typescript-core y dime qué pasos de tsconfig y strict me faltan en este nivel"