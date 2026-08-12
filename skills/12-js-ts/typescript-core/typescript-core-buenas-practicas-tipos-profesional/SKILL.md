---
name: typescript-core-buenas-practicas-tipos-profesional
description: Buenas prácticas de tipos · nivel Profesional · TypeScript: tipado profesional. Escribís tipos que comunican, evitan any y mantienen el tipado honesto en todo el proyecto. Objetivo del nivel: Establecer estándares de tipado y revisión en el equipo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "buenas-practicas-tipos"
  nivel: profesional
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Buenas prácticas de tipos — Profesional

## Qué hace este skill

Escribís tipos que comunican, evitan any y mantienen el tipado honesto en todo el proyecto. En este nivel se entrega: **Establecer estándares de tipado y revisión en el equipo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Buenas prácticas de tipos** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escribir una guía de buenas prácticas de tipos del equipo
2. Configurar reglas de ESLint para tipos inseguros
3. Crear ejemplos de referencia en el repo
4. Definir cuándo usar validación runtime

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Establecer estándares de tipado y revisión en el equipo | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Escribir una guía de buenas prácticas de tipos del equipo · Configurar reglas de ESLint para tipos inseguros · Crear ejemplos de referencia en el repo · Definir cuándo usar validación runtime | lista | sí | 3-4 pasos |
| $criterios_clave | La guía está publicada en el repo y se usa en reviews · El lint bloquea violaciones de tipado inseguro | lista | sí | calidad verificable |
| $prompt_guia | Redactá la guía de buenas prácticas de tipos del equipo (anti-any, honestidad de tipos, cuándo validar en runtime) y configurá las reglas de ESLint que la apliquen. | texto | no | "Buenas prácticas de tipos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La guía está publicada en el repo y se usa en reviews
- [ ] El lint bloquea violaciones de tipado inseguro

## Ejemplos de prompts

- "Redactá la guía de buenas prácticas de tipos del equipo (anti-any, honestidad de tipos, cuándo validar en runtime) y configurá las reglas de ESLint que la apliquen."
- "Aplica Buenas prácticas de tipos (nivel profesional) a mi trabajo actual con TypeScript: tipado profesional: prioriza La guía está publicada en el repo y se usa en reviews"
- "Revisa mi typescript-core y dime qué pasos de Buenas prácticas de tipos me faltan en este nivel"