---
name: typescript-core-tsconfig-strict-basico
description: tsconfig y strict · nivel Básico · TypeScript: tipado profesional. Configurás el compilador con strict mode y opciones que endurecen el tipado. Objetivo del nivel: Crear un tsconfig con strict mode y entender sus flags
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tsconfig-strict"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# tsconfig y strict — Básico

## Qué hace este skill

Configurás el compilador con strict mode y opciones que endurecen el tipado. En este nivel se entrega: **Crear un tsconfig con strict mode y entender sus flags**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **tsconfig y strict** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar un tsconfig básico con tsc --init
2. Habilitar strict y explicar sus implicancias
3. Configurar target, module y outDir
4. Compilar el proyecto y corregir errores de strict

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un tsconfig con strict mode y entender sus flags | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Generar un tsconfig básico con tsc --init · Habilitar strict y explicar sus implicancias · Configurar target, module y outDir · Compilar el proyecto y corregir errores de strict | lista | sí | 3-4 pasos |
| $criterios_clave | El proyecto compila con strict: true sin errores · Los flags del tsconfig están documentados | lista | sí | calidad verificable |
| $prompt_guia | Inicializá el tsconfig del proyecto con strict mode, target ES2022 y module ESNext, y corregí los errores de tipado que aparecen al compilar. | texto | no | "tsconfig y strict" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El proyecto compila con strict: true sin errores
- [ ] Los flags del tsconfig están documentados

## Ejemplos de prompts

- "Inicializá el tsconfig del proyecto con strict mode, target ES2022 y module ESNext, y corregí los errores de tipado que aparecen al compilar."
- "Aplica tsconfig y strict (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza El proyecto compila con strict: true sin errores"
- "Revisa mi typescript-core y dime qué pasos de tsconfig y strict me faltan en este nivel"