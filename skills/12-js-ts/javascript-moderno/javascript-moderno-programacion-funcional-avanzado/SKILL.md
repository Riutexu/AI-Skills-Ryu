---
name: javascript-moderno-programacion-funcional-avanzado
description: Programación funcional · nivel Avanzado · JavaScript moderno: ES2024. Aplicás pureza, inmutabilidad y composición de funciones en el código de producción. Objetivo del nivel: Componer funciones y manejar flujos con composición y punto libre
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "programacion-funcional"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# Programación funcional — Avanzado

## Qué hace este skill

Aplicás pureza, inmutabilidad y composición de funciones en el código de producción. En este nivel se entrega: **Componer funciones y manejar flujos con composición y punto libre**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Programación funcional** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar compose y pipe
2. Refactorizar pipelines con currying parcial
3. Crear utilidades de transformación encadenables
4. Usar inmutabilidad con spread en flujos de datos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Componer funciones y manejar flujos con composición y punto libre | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Implementar compose y pipe · Refactorizar pipelines con currying parcial · Crear utilidades de transformación encadenables · Usar inmutabilidad con spread en flujos de datos | lista | sí | 3-4 pasos |
| $criterios_clave | Los pipelines quedan legibles y sin anidamientos · Las utilidades son reutilizables en más de un módulo | lista | sí | calidad verificable |
| $prompt_guia | Refactorizá el flujo de normalización de datos del usuario a un pipeline con pipe: validar, normalizar, enriquecer y serializar como funciones separadas y puras. | texto | no | "Programación funcional" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los pipelines quedan legibles y sin anidamientos
- [ ] Las utilidades son reutilizables en más de un módulo

## Ejemplos de prompts

- "Refactorizá el flujo de normalización de datos del usuario a un pipeline con pipe: validar, normalizar, enriquecer y serializar como funciones separadas y puras."
- "Aplica Programación funcional (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Los pipelines quedan legibles y sin anidamientos"
- "Revisa mi javascript-moderno y dime qué pasos de Programación funcional me faltan en este nivel"