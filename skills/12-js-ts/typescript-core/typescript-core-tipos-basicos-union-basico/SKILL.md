---
name: typescript-core-tipos-basicos-union-basico
description: Tipos básicos y unión · nivel Básico · TypeScript: tipado profesional. Modelás datos con primitivos, literales, uniones y tuplas con precisión. Objetivo del nivel: Tipar variables y funciones con primitivos y uniones simples
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tipos-basicos-union"
  nivel: basico
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Tipos básicos y unión — Básico

## Qué hace este skill

Modelás datos con primitivos, literales, uniones y tuplas con precisión. En este nivel se entrega: **Tipar variables y funciones con primitivos y uniones simples**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tipos básicos y unión** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Anotar primitivos: string, number, boolean
2. Definir tipos literal y uniones de literales
3. Tipar arrays y tuplas básicas
4. Usar any con criterio y null/undefined explícitos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Tipar variables y funciones con primitivos y uniones simples | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Anotar primitivos: string, number, boolean · Definir tipos literal y uniones de literales · Tipar arrays y tuplas básicas · Usar any con criterio y null/undefined explícitos | lista | sí | 3-4 pasos |
| $criterios_clave | No hay usos de any innecesarios · Las uniones cubren todos los casos del dominio | lista | sí | calidad verificable |
| $prompt_guia | Tipá las variables y parámetros de este módulo de configuración con tipos literales y uniones: los estados del pedido son 'pendiente', 'pago', 'enviado' o 'entregado'. | texto | no | "Tipos básicos y unión" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No hay usos de any innecesarios
- [ ] Las uniones cubren todos los casos del dominio

## Ejemplos de prompts

- "Tipá las variables y parámetros de este módulo de configuración con tipos literales y uniones: los estados del pedido son 'pendiente', 'pago', 'enviado' o 'entregado'."
- "Aplica Tipos básicos y unión (nivel basico) a mi trabajo actual con TypeScript: tipado profesional: prioriza No hay usos de any innecesarios"
- "Revisa mi typescript-core y dime qué pasos de Tipos básicos y unión me faltan en este nivel"