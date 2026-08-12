---
name: typescript-core-buenas-practicas-tipos-avanzado
description: Buenas prácticas de tipos · nivel Avanzado · TypeScript: tipado profesional. Escribís tipos que comunican, evitan any y mantienen el tipado honesto en todo el proyecto. Objetivo del nivel: Mantener el tipado honesto en APIs y estados límite
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "buenas-practicas-tipos"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Buenas prácticas de tipos — Avanzado

## Qué hace este skill

Escribís tipos que comunican, evitan any y mantienen el tipado honesto en todo el proyecto. En este nivel se entrega: **Mantener el tipado honesto en APIs y estados límite**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Buenas prácticas de tipos** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Eliminar as any en el código de producción
2. Tipar correctamente los estados nulos y parciales
3. Evitar tipos que mienten sobre el runtime
4. Usar satisfies para validar literales sin perder el tipo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Mantener el tipado honesto en APIs y estados límite | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Eliminar as any en el código de producción · Tipar correctamente los estados nulos y parciales · Evitar tipos que mienten sobre el runtime · Usar satisfies para validar literales sin perder el tipo | lista | sí | 3-4 pasos |
| $criterios_clave | Ningún as any en producción · Los tipos describen fielmente lo que llega en runtime | lista | sí | calidad verificable |
| $prompt_guia | Pasá el lint de no-unnecessary-type-assertion por el proyecto y corregí todos los casos; donde el runtime mienta, ajustá el tipo para que sea honesto. | texto | no | "Buenas prácticas de tipos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ningún as any en producción
- [ ] Los tipos describen fielmente lo que llega en runtime

## Ejemplos de prompts

- "Pasá el lint de no-unnecessary-type-assertion por el proyecto y corregí todos los casos; donde el runtime mienta, ajustá el tipo para que sea honesto."
- "Aplica Buenas prácticas de tipos (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza Ningún as any en producción"
- "Revisa mi typescript-core y dime qué pasos de Buenas prácticas de tipos me faltan en este nivel"