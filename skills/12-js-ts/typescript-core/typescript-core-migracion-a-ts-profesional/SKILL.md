---
name: typescript-core-migracion-a-ts-profesional
description: Migración a TS · nivel Profesional · TypeScript: tipado profesional. Migrás proyectos JS a TypeScript con estrategia gradual y verificación continua. Objetivo del nivel: Conducir la migración completa con métricas y cero regresiones
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "migracion-a-ts"
  nivel: profesional
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Migración a TS — Profesional

## Qué hace este skill

Migrás proyectos JS a TypeScript con estrategia gradual y verificación continua. En este nivel se entrega: **Conducir la migración completa con métricas y cero regresiones**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migración a TS** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir métricas de progreso (archivos, errores, cobertura de tipos)
2. Manejar el strict granulado por módulo
3. Eliminar los .d.ts provisionales al finalizar
4. Dejar documentado el estado final y las lecciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Conducir la migración completa con métricas y cero regresiones | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Definir métricas de progreso (archivos, errores, cobertura de tipos) · Manejar el strict granulado por módulo · Eliminar los .d.ts provisionales al finalizar · Dejar documentado el estado final y las lecciones | lista | sí | 3-4 pasos |
| $criterios_clave | La migración termina con strict global y sin declaraciones provisionales · Las métricas muestran el avance en cada hito | lista | sí | calidad verificable |
| $prompt_guia | Conducí el final de la migración: cerrá los archivos restantes, subí strict a todo el proyecto, borrá los d.ts provisionales y redactá el resumen con métricas y lecciones para el equipo. | texto | no | "Migración a TS" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La migración termina con strict global y sin declaraciones provisionales
- [ ] Las métricas muestran el avance en cada hito

## Ejemplos de prompts

- "Conducí el final de la migración: cerrá los archivos restantes, subí strict a todo el proyecto, borrá los d.ts provisionales y redactá el resumen con métricas y lecciones para el equipo."
- "Aplica Migración a TS (nivel profesional) a mi trabajo actual con TypeScript: tipado profesional: prioriza La migración termina con strict global y sin declaraciones provisionales"
- "Revisa mi typescript-core y dime qué pasos de Migración a TS me faltan en este nivel"