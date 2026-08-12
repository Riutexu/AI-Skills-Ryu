---
name: testing-js-mocks-spies-basico
description: Mocks y spies · nivel Básico · Testing JS/TS. Aislás dependencias con mocks, spies y stubs para testear unidades con precisión. Objetivo del nivel: Usar spies y mocks de funciones
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "mocks-spies"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# Mocks y spies — Básico

## Qué hace este skill

Aislás dependencias con mocks, spies y stubs para testear unidades con precisión. En este nivel se entrega: **Usar spies y mocks de funciones**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mocks y spies** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Espiar funciones con vi.spyOn
2. Mockear funciones con vi.fn
3. Verificar llamadas con toHaveBeenCalledWith
4. Restaurar los mocks entre tests

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar spies y mocks de funciones | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Espiar funciones con vi.spyOn · Mockear funciones con vi.fn · Verificar llamadas con toHaveBeenCalledWith · Restaurar los mocks entre tests | lista | sí | 3-4 pasos |
| $criterios_clave | Los spies se restauran entre tests · Las assertions verifican las llamadas exactas | lista | sí | calidad verificable |
| $prompt_guia | Testeá el módulo de envío de mails espiando la función send y verificando que se llame con los argumentos correctos. | texto | no | "Mocks y spies" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los spies se restauran entre tests
- [ ] Las assertions verifican las llamadas exactas

## Ejemplos de prompts

- "Testeá el módulo de envío de mails espiando la función send y verificando que se llame con los argumentos correctos."
- "Aplica Mocks y spies (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza Los spies se restauran entre tests"
- "Revisa mi testing-js y dime qué pasos de Mocks y spies me faltan en este nivel"