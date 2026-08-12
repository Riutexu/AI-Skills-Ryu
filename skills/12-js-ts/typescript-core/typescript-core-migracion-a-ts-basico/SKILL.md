---
name: typescript-core-migracion-a-ts-basico
description: Migración a TS · nivel Básico · TypeScript: tipado profesional. Migrás proyectos JS a TypeScript con estrategia gradual y verificación continua. Objetivo del nivel: Iniciar la migración de un proyecto JS a TS
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "migracion-a-ts"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Migración a TS — Básico

## Qué hace este skill

Migrás proyectos JS a TypeScript con estrategia gradual y verificación continua. En este nivel se entrega: **Iniciar la migración de un proyecto JS a TS**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migración a TS** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Agregar TypeScript a un proyecto JS existente
2. Configurar allowJs y checkJs iniciales
3. Renombrar un primer archivo .js a .ts
4. Corregir los primeros errores de tipado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Iniciar la migración de un proyecto JS a TS | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Agregar TypeScript a un proyecto JS existente · Configurar allowJs y checkJs iniciales · Renombrar un primer archivo .js a .ts · Corregir los primeros errores de tipado | lista | sí | 3-4 pasos |
| $criterios_clave | El build sigue funcionando tras cada paso · El primer archivo migrado queda sin errores de tipo | lista | sí | calidad verificable |
| $prompt_guia | Agregá TypeScript a la SPA vanilla existente, migrá un primer módulo (validaciones) y dejá la configuración lista para seguir archivo por archivo. | texto | no | "Migración a TS" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El build sigue funcionando tras cada paso
- [ ] El primer archivo migrado queda sin errores de tipo

## Ejemplos de prompts

- "Agregá TypeScript a la SPA vanilla existente, migrá un primer módulo (validaciones) y dejá la configuración lista para seguir archivo por archivo."
- "Aplica Migración a TS (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza El build sigue funcionando tras cada paso"
- "Revisa mi typescript-core y dime qué pasos de Migración a TS me faltan en este nivel"