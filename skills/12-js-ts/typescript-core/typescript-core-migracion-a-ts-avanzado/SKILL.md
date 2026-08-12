---
name: typescript-core-migracion-a-ts-avanzado
description: Migración a TS · nivel Avanzado · TypeScript: tipado profesional. Migrás proyectos JS a TypeScript con estrategia gradual y verificación continua. Objetivo del nivel: Migrar módulos completos con estrategia de dependencias
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "migracion-a-ts"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Migración a TS — Avanzado

## Qué hace este skill

Migrás proyectos JS a TypeScript con estrategia gradual y verificación continua. En este nivel se entrega: **Migrar módulos completos con estrategia de dependencias**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migración a TS** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Migrar módulos de base antes que los que dependen de ellos
2. Tipar los contratos entre módulos migrados
3. Dejar los .d.ts provisionales para los no migrados
4. Verificar el tipo de cada PR migrado

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Migrar módulos completos con estrategia de dependencias | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Migrar módulos de base antes que los que dependen de ellos · Tipar los contratos entre módulos migrados · Dejar los .d.ts provisionales para los no migrados · Verificar el tipo de cada PR migrado | lista | sí | 3-4 pasos |
| $criterios_clave | Cada PR migrado mantiene el check completo verde · Los contratos entre módulos quedan tipados | lista | sí | calidad verificable |
| $prompt_guia | Planificá la migración de los módulos restantes en orden de dependencias: primero los utilitarios, después los servicios y al final las vistas; validá el plan con el grafo real. | texto | no | "Migración a TS" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada PR migrado mantiene el check completo verde
- [ ] Los contratos entre módulos quedan tipados

## Ejemplos de prompts

- "Planificá la migración de los módulos restantes en orden de dependencias: primero los utilitarios, después los servicios y al final las vistas; validá el plan con el grafo real."
- "Aplica Migración a TS (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza Cada PR migrado mantiene el check completo verde"
- "Revisa mi typescript-core y dime qué pasos de Migración a TS me faltan en este nivel"