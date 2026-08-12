---
name: typescript-core-funciones-tipadas-avanzado
description: Funciones tipadas · nivel Avanzado · TypeScript: tipado profesional. Tipás firmas, sobrecargas, rest params y funciones como valores con exactitud. Objetivo del nivel: Usar sobrecargas y rest parameters tipados
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "funciones-tipadas"
  nivel: avanzado
  stack: "TypeScript 5.x, tsc, Vite, Vitest"
---

# Funciones tipadas — Avanzado

## Qué hace este skill

Tipás firmas, sobrecargas, rest params y funciones como valores con exactitud. En este nivel se entrega: **Usar sobrecargas y rest parameters tipados**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **TypeScript: tipado profesional** (TypeScript 5.x, tsc, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Funciones tipadas** dentro de TypeScript: tipado profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **TypeScript 5.x, tsc, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar sobrecargas para variantes de argumentos
2. Tipar rest params con tuplas
3. Usar funciones como tipo en genéricos
4. Tipar funciones de orden superior que devuelven funciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Usar sobrecargas y rest parameters tipados | texto | sí | resultado medible |
| $stack | TypeScript: tipado profesional | texto | sí | 12-js-ts/typescript-core |
| $tecnologias | TypeScript 5.x, tsc, Vite, Vitest | texto | sí | TypeScript 5.x, tsc, Vite, Vitest |
| $tareas_clave | Declarar sobrecargas para variantes de argumentos · Tipar rest params con tuplas · Usar funciones como tipo en genéricos · Tipar funciones de orden superior que devuelven funciones | lista | sí | 3-4 pasos |
| $criterios_clave | Las sobrecargas cubren todos los usos reales · Las firmas de orden superior son precisas | lista | sí | calidad verificable |
| $prompt_guia | Tipá una función parseConfig que acepte string, objeto o Promise con sobrecargas, y una factory que devuelva funciones tipadas según el parámetro. | texto | no | "Funciones tipadas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las sobrecargas cubren todos los usos reales
- [ ] Las firmas de orden superior son precisas

## Ejemplos de prompts

- "Tipá una función parseConfig que acepte string, objeto o Promise con sobrecargas, y una factory que devuelva funciones tipadas según el parámetro."
- "Aplica Funciones tipadas (nivel avanzado) a mi trabajo actual con TypeScript: tipado profesional: prioriza Las sobrecargas cubren todos los usos reales"
- "Revisa mi typescript-core y dime qué pasos de Funciones tipadas me faltan en este nivel"