---
name: typescript-core-tipos-avanzados-basico
description: Tipos avanzados (conditional, mapped) · nivel Básico · TypeScript: tipado profesional. Construís tipos condicionales y mapeados para librerías y utilidades expresivas. Objetivo del nivel: Usar mapped types y condicionales simples
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tipos-avanzados"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Tipos avanzados (conditional, mapped) — Básico

## Qué hace este skill

Construís tipos condicionales y mapeados para librerías y utilidades expresivas. En este nivel se entrega: **Usar mapped types y condicionales simples**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipos avanzados (conditional, mapped)** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear tipos mapeados con keyof sobre un objeto
2. Transformar propiedades con mapeo de modifiers
3. Escribir un tipo condicional simple con ternario
4. Usar typeof para derivar tipos de objetos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar mapped types y condicionales simples | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear tipos mapeados con keyof sobre un objeto · Transformar propiedades con mapeo de modifiers · Escribir un tipo condicional simple con ternario · Usar typeof para derivar tipos de objetos | lista | sí | 3-4 pasos |
| $criterios_clave | Los tipos mapeados se comprenden en una leída · Las condiciones cubren los casos esperados | lista | sí | calidad verificable |
| $prompt_guia | Creá un tipo Nullable<T> que vuelva opcional cada propiedad, y un condicional simple que derive el tipo de retorno según el argumento. | texto | no | "Tipos avanzados (conditional, mapped)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tipos mapeados se comprenden en una leída
- [ ] Las condiciones cubren los casos esperados

## Ejemplos de prompts

- "Creá un tipo Nullable<T> que vuelva opcional cada propiedad, y un condicional simple que derive el tipo de retorno según el argumento."
- "Aplica Tipos avanzados (conditional, mapped) (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los tipos mapeados se comprenden en una leída"
- "Revisa mi typescript-core y dime qué pasos de Tipos avanzados (conditional, mapped) me faltan en este nivel"