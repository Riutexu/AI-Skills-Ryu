---
name: typescript-core-generics-avanzado
description: Generics · nivel Avanzado · TypeScript: tipado profesional. Escribís funciones y tipos reutilizables que mantienen la relación entre entradas y salidas. Objetivo del nivel: Aplicar constraints y tipos genéricos múltiples
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "generics"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Generics — Avanzado

## Qué hace este skill

Escribís funciones y tipos reutilizables que mantienen la relación entre entradas y salidas. En este nivel se entrega: **Aplicar constraints y tipos genéricos múltiples**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Generics** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Restringir generics con extends
2. Crear funciones con dos o más parámetros de tipo
3. Tipar colecciones y caches con generics
4. Definir genéricos con defaults

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Aplicar constraints y tipos genéricos múltiples | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Restringir generics con extends · Crear funciones con dos o más parámetros de tipo · Tipar colecciones y caches con generics · Definir genéricos con defaults | lista | sí | 3-4 pasos |
| $criterios_clave | Las constraints se usan solo donde hacen falta · Las inferencias no requieren anotaciones en los call sites | lista | sí | calidad verificable |
| $prompt_guia | Implementá una función groupBy que agrupe un array por una clave con constraint correcta, y una cache genérica que respete el tipo al leer y escribir. | texto | no | "Generics" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las constraints se usan solo donde hacen falta
- [ ] Las inferencias no requieren anotaciones en los call sites

## Ejemplos de prompts

- "Implementá una función groupBy que agrupe un array por una clave con constraint correcta, y una cache genérica que respete el tipo al leer y escribir."
- "Aplica Generics (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza Las constraints se usan solo donde hacen falta"
- "Revisa mi typescript-core y dime qué pasos de Generics me faltan en este nivel"