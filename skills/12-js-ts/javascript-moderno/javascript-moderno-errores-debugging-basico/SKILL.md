---
name: javascript-moderno-errores-debugging-basico
description: Errores y debugging · nivel Básico · JavaScript moderno: ES2024. Lanzás, propagás y clasificás errores, y debuggeás con sourcemaps, breakpoints y profiling. Objetivo del nivel: Lanzar y capturar errores con mensajes útiles
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "errores-debugging"
  nivel: basico
  stack: "Node 22, ESM, Vite, Vitest"
---

# Errores y debugging — Básico

## Qué hace este skill

Lanzás, propagás y clasificás errores, y debuggeás con sourcemaps, breakpoints y profiling. En este nivel se entrega: **Lanzar y capturar errores con mensajes útiles**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **JavaScript moderno: ES2024** (Node 22, ESM, Vite, Vitest) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Errores y debugging** dentro de JavaScript moderno: ES2024.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Node 22, ESM, Vite, Vitest**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Lanzar errores descriptivos con throw
2. Capturar y loguear errores con try/catch
3. Diferenciar error y aviso silencioso con console.warn
4. Leer el stack trace para ubicar el origen

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Lanzar y capturar errores con mensajes útiles | texto | sí | resultado medible |
| $stack | JavaScript moderno: ES2024 | texto | sí | 12-js-ts/javascript-moderno |
| $tecnologias | Node 22, ESM, Vite, Vitest | texto | sí | Node 22, ESM, Vite, Vitest |
| $tareas_clave | Lanzar errores descriptivos con throw · Capturar y loguear errores con try/catch · Diferenciar error y aviso silencioso con console.warn · Leer el stack trace para ubicar el origen | lista | sí | 3-4 pasos |
| $criterios_clave | Los mensajes de error indican qué falló y dónde · Los errores no quedan tragados en silencio | lista | sí | calidad verificable |
| $prompt_guia | Revisá este módulo de la SPA donde los errores desaparecen: agregá try/catch con mensajes claros y console.error con contexto, y explicá el stack trace de un caso. | texto | no | "Errores y debugging" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los mensajes de error indican qué falló y dónde
- [ ] Los errores no quedan tragados en silencio

## Ejemplos de prompts

- "Revisá este módulo de la SPA donde los errores desaparecen: agregá try/catch con mensajes claros y console.error con contexto, y explicá el stack trace de un caso."
- "Aplica Errores y debugging (nivel basico) a mi trabajo actual con JavaScript moderno: ES2024: prioriza Los mensajes de error indican qué falló y dónde"
- "Revisa mi javascript-moderno y dime qué pasos de Errores y debugging me faltan en este nivel"