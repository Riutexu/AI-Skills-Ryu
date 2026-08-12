---
name: typescript-core-tipos-avanzados-avanzado
description: Tipos avanzados (conditional, mapped) · nivel Avanzado · TypeScript: tipado profesional. Construís tipos condicionales y mapeados para librerías y utilidades expresivas. Objetivo del nivel: Componer conditional types con infer y recursión
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tipos-avanzados"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Tipos avanzados (conditional, mapped) — Avanzado

## Qué hace este skill

Construís tipos condicionales y mapeados para librerías y utilidades expresivas. En este nivel se entrega: **Componer conditional types con infer y recursión**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipos avanzados (conditional, mapped)** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar infer para extraer tipos anidados
2. Crear tipos recursivos para estructuras anidadas
3. Componer mapped types con condicionales
4. Derivar tipos de configuración con as const y keyof

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Componer conditional types con infer y recursión | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Usar infer para extraer tipos anidados · Crear tipos recursivos para estructuras anidadas · Componer mapped types con condicionales · Derivar tipos de configuración con as const y keyof | lista | sí | 3-4 pasos |
| $criterios_clave | Las recursiones terminan para todos los inputs · Los tipos inferidos son exactos | lista | sí | calidad verificable |
| $prompt_guia | Implementá Flatten<T> que aplane los tipos de un objeto anidado en una unión, y Unwrap<T> que saque el tipo de dentro de Promise o Array usando infer. | texto | no | "Tipos avanzados (conditional, mapped)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las recursiones terminan para todos los inputs
- [ ] Los tipos inferidos son exactos

## Ejemplos de prompts

- "Implementá Flatten<T> que aplane los tipos de un objeto anidado en una unión, y Unwrap<T> que saque el tipo de dentro de Promise o Array usando infer."
- "Aplica Tipos avanzados (conditional, mapped) (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza Las recursiones terminan para todos los inputs"
- "Revisa mi typescript-core y dime qué pasos de Tipos avanzados (conditional, mapped) me faltan en este nivel"