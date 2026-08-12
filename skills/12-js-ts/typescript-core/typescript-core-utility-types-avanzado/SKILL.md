---
name: typescript-core-utility-types-avanzado
description: Utility types · nivel Avanzado · TypeScript: tipado profesional. Transformás tipos con Partial, Pick, Omit, Record y los helpers de inferencia. Objetivo del nivel: Combinar utility types para casos de APIs y formularios
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "utility-types"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Utility types — Avanzado

## Qué hace este skill

Transformás tipos con Partial, Pick, Omit, Record y los helpers de inferencia. En este nivel se entrega: **Combinar utility types para casos de APIs y formularios**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Utility types** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Tipar respuestas paginadas con generic y Readonly
2. Crear estados de carga con unión de resultados
3. Usar Exclude y Extract sobre uniones
4. Tipar objetos de config con Required y NonNullable

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Combinar utility types para casos de APIs y formularios | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Tipar respuestas paginadas con generic y Readonly · Crear estados de carga con unión de resultados · Usar Exclude y Extract sobre uniones · Tipar objetos de config con Required y NonNullable | lista | sí | 3-4 pasos |
| $criterios_clave | Los tipos compuestos siguen siendo legibles · Los estados de la UI están cubiertos por la unión | lista | sí | calidad verificable |
| $prompt_guia | Modelá el estado de carga de la SPA con un tipo unión (cargando, ok, error) derivado del tipo de datos con utility types, y tipá la respuesta paginada del backend. | texto | no | "Utility types" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tipos compuestos siguen siendo legibles
- [ ] Los estados de la UI están cubiertos por la unión

## Ejemplos de prompts

- "Modelá el estado de carga de la SPA con un tipo unión (cargando, ok, error) derivado del tipo de datos con utility types, y tipá la respuesta paginada del backend."
- "Aplica Utility types (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los tipos compuestos siguen siendo legibles"
- "Revisa mi typescript-core y dime qué pasos de Utility types me faltan en este nivel"