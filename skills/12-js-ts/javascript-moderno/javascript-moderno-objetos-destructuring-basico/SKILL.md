---
name: javascript-moderno-objetos-destructuring-basico
description: Objetos y destructuring · nivel Básico · JavaScript moderno: ES2024. Creás, clonás y desestructurás objetos con shorthand, spread y defaults robustos. Objetivo del nivel: Construir y desestructurar objetos con shorthand y spread
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "objetos-destructuring"
  nivel: basico
  stack: "Node 22, ESM, Vite, Vitest"
---

# Objetos y destructuring — Básico

## Qué hace este skill

Creás, clonás y desestructurás objetos con shorthand, spread y defaults robustos. En este nivel se entrega: **Construir y desestructurar objetos con shorthand y spread**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Objetos y destructuring** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear objetos con property shorthand
2. Desestructurar propiedades con valores default
3. Clonar objetos con spread y comparar con la referencia original
4. Usar destructuring en parámetros de funciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Construir y desestructurar objetos con shorthand y spread | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Crear objetos con property shorthand · Desestructurar propiedades con valores default · Clonar objetos con spread y comparar con la referencia original · Usar destructuring en parámetros de funciones | lista | sí | 3-4 pasos |
| $criterios_clave | Los objetos anidados no se clonan por error sin deep clone · Los defaults cubren propiedades ausentes | lista | sí | calidad verificable |
| $prompt_guia | Tomá este objeto de configuración del usuario y desestructuralo en la función que lo usa, con defaults para las propiedades que pueden faltar. | texto | no | "Objetos y destructuring" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los objetos anidados no se clonan por error sin deep clone
- [ ] Los defaults cubren propiedades ausentes

## Ejemplos de prompts

- "Tomá este objeto de configuración del usuario y desestructuralo en la función que lo usa, con defaults para las propiedades que pueden faltar."
- "Aplica Objetos y destructuring (nivel basico) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Los objetos anidados no se clonan por error sin deep clone"
- "Revisa mi javascript-moderno y dime qué pasos de Objetos y destructuring me faltan en este nivel"