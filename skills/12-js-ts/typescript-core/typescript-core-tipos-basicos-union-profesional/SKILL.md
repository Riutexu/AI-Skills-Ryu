---
name: typescript-core-tipos-basicos-union-profesional
description: Tipos básicos y unión · nivel Profesional · TypeScript: tipado profesional. Modelás datos con primitivos, literales, uniones y tuplas con precisión. Objetivo del nivel: Diseñar el modelo de dominio tipado de un módulo completo
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tipos-basicos-union"
  nivel: profesional
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Tipos básicos y unión — Profesional

## Qué hace este skill

Modelás datos con primitivos, literales, uniones y tuplas con precisión. En este nivel se entrega: **Diseñar el modelo de dominio tipado de un módulo completo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipos básicos y unión** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir tipos que reflejen el contrato del backend PHP
2. Crear tipos de respuesta API con variantes
3. Documentar tipos con JSDoc y ejemplos de uso
4. Auditar el uso de any restante y eliminarlo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Diseñar el modelo de dominio tipado de un módulo completo | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Definir tipos que reflejen el contrato del backend PHP · Crear tipos de respuesta API con variantes · Documentar tipos con JSDoc y ejemplos de uso · Auditar el uso de any restante y eliminarlo | lista | sí | 3-4 pasos |
| $criterios_clave | El dominio entero está tipado sin any · Los tipos se reutilizan entre módulos sin duplicación | lista | sí | calidad verificable |
| $prompt_guia | Diseñá el modelo tipado completo del módulo de usuarios reflejando el JSON del backend PHP (que a veces manda null donde no debería) y eliminá los any restantes. | texto | no | "Tipos básicos y unión" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El dominio entero está tipado sin any
- [ ] Los tipos se reutilizan entre módulos sin duplicación

## Ejemplos de prompts

- "Diseñá el modelo tipado completo del módulo de usuarios reflejando el JSON del backend PHP (que a veces manda null donde no debería) y eliminá los any restantes."
- "Aplica Tipos básicos y unión (nivel profesional) a mi trabajo actual con TypeScript: tipado profesional: prioriza El dominio entero está tipado sin any"
- "Revisa mi typescript-core y dime qué pasos de Tipos básicos y unión me faltan en este nivel"