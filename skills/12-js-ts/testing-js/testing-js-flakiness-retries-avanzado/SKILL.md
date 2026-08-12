---
name: testing-js-flakiness-retries-avanzado
description: Flakiness y retries · nivel Avanzado · Testing JS/TS. Detectás, corregís y previenes tests intermitentes con retries y diagnóstico. Objetivo del nivel: Corregir flakiness por timing, orden y estado compartido
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "flakiness-retries"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# Flakiness y retries — Avanzado

## Qué hace este skill

Detectás, corregís y previenes tests intermitentes con retries y diagnóstico. En este nivel se entrega: **Corregir flakiness por timing, orden y estado compartido**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Flakiness y retries** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Reemplazar sleeps por esperas explícitas
2. Aislar el estado compartido entre tests
3. Corregir dependencias de orden de ejecución
4. Usar expect.poll para condiciones asíncronas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Corregir flakiness por timing, orden y estado compartido | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Reemplazar sleeps por esperas explícitas · Aislar el estado compartido entre tests · Corregir dependencias de orden de ejecución · Usar expect.poll para condiciones asíncronas | lista | sí | 3-4 pasos |
| $criterios_clave | No quedan sleeps en los tests · Los tests corren en orden aleatorio sin fallar | lista | sí | calidad verificable |
| $prompt_guia | La suite de componentes falla solo cuando corre completa: eliminá los sleeps, aislá el estado compartido y verificá que pase con shuffle aleatorio. | texto | no | "Flakiness y retries" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] No quedan sleeps en los tests
- [ ] Los tests corren en orden aleatorio sin fallar

## Ejemplos de prompts

- "La suite de componentes falla solo cuando corre completa: eliminá los sleeps, aislá el estado compartido y verificá que pase con shuffle aleatorio."
- "Aplica Flakiness y retries (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza No quedan sleeps en los tests"
- "Revisa mi testing-js y dime qué pasos de Flakiness y retries me faltan en este nivel"