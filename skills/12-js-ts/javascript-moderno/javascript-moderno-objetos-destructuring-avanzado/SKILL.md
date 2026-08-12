---
name: javascript-moderno-objetos-destructuring-avanzado
description: Objetos y destructuring · nivel Avanzado · JavaScript moderno: ES2024. Creás, clonás y desestructurás objetos con shorthand, spread y defaults robustos. Objetivo del nivel: Aplicar destructuring anidado, renombrado y rest en objetos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "objetos-destructuring"
  nivel: avanzado
  stack: "Node 22, ESM, Vite, Vitest"
---

# Objetos y destructuring — Avanzado

## Qué hace este skill

Creás, clonás y desestructurás objetos con shorthand, spread y defaults robustos. En este nivel se entrega: **Aplicar destructuring anidado, renombrado y rest en objetos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Objetos y destructuring** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Desestructurar objetos anidados con renombrado
2. Separar propiedades con rest para omitirlas
3. Aplanar opciones con spread y defaults mergeados
4. Implementar actualización inmutable de propiedades

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Aplicar destructuring anidado, renombrado y rest en objetos | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Desestructurar objetos anidados con renombrado · Separar propiedades con rest para omitirlas · Aplanar opciones con spread y defaults mergeados · Implementar actualización inmutable de propiedades | lista | sí | 3-4 pasos |
| $criterios_clave | Las propiedades rest omitidas no contaminan el resultado · Las actualizaciones devuelven nuevos objetos sin mutar | lista | sí | calidad verificable |
| $prompt_guia | De la respuesta de la API, extraé con destructuring anidado el usuario y su dirección; después creá una versión actualizada del usuario sin la propiedad token usando rest. | texto | no | "Objetos y destructuring" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las propiedades rest omitidas no contaminan el resultado
- [ ] Las actualizaciones devuelven nuevos objetos sin mutar

## Ejemplos de prompts

- "De la respuesta de la API, extraé con destructuring anidado el usuario y su dirección; después creá una versión actualizada del usuario sin la propiedad token usando rest."
- "Aplica Objetos y destructuring (nivel avanzado) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Las propiedades rest omitidas no contaminan el resultado"
- "Revisa mi javascript-moderno y dime qué pasos de Objetos y destructuring me faltan en este nivel"