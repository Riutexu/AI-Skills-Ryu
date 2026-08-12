---
name: typescript-core-tipos-basicos-union-avanzado
description: Tipos básicos y unión · nivel Avanzado · TypeScript: tipado profesional. Modelás datos con primitivos, literales, uniones y tuplas con precisión. Objetivo del nivel: Modelar dominios con uniones discriminadas y tuplas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tipos-basicos-union"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Tipos básicos y unión — Avanzado

## Qué hace este skill

Modelás datos con primitivos, literales, uniones y tuplas con precisión. En este nivel se entrega: **Modelar dominios con uniones discriminadas y tuplas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipos básicos y unión** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear uniones discriminadas con propiedad tipo
2. Tipar tuplas de longitud fija para pares
3. Definir tipos con null en flujos opcionales
4. Usar enums o const objects para constantes

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Modelar dominios con uniones discriminadas y tuplas | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Crear uniones discriminadas con propiedad tipo · Tipar tuplas de longitud fija para pares · Definir tipos con null en flujos opcionales · Usar enums o const objects para constantes | lista | sí | 3-4 pasos |
| $criterios_clave | Los switch sobre discriminantes no tienen casos imposibles · Las tuplas reflejan el contrato real de la API | lista | sí | calidad verificable |
| $prompt_guia | Modelá las respuestas de la API de pedidos como unión discriminada (ok, error, pendiente) y tipá el switch que las procesa; que el compilador te grite si falta un caso. | texto | no | "Tipos básicos y unión" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los switch sobre discriminantes no tienen casos imposibles
- [ ] Las tuplas reflejan el contrato real de la API

## Ejemplos de prompts

- "Modelá las respuestas de la API de pedidos como unión discriminada (ok, error, pendiente) y tipá el switch que las procesa; que el compilador te grite si falta un caso."
- "Aplica Tipos básicos y unión (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza Los switch sobre discriminantes no tienen casos imposibles"
- "Revisa mi typescript-core y dime qué pasos de Tipos básicos y unión me faltan en este nivel"