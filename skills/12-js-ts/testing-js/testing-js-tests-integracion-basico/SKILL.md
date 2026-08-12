---
name: testing-js-tests-integracion-basico
description: Tests de integración · nivel Básico · Testing JS/TS. Probás la integración entre módulos, servicios y el backend sin ir a producción. Objetivo del nivel: Escribir tests de integración entre módulos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tests-integracion"
  nivel: basico
  stack: "Vitest, Playwright, jsdom, CI"
---

# Tests de integración — Básico

## Qué hace este skill

Probás la integración entre módulos, servicios y el backend sin ir a producción. En este nivel se entrega: **Escribir tests de integración entre módulos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de integración** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Testear la interacción entre store y servicios
2. Integrar componentes con sus servicios reales
3. Usar un backend de test o json-server
4. Verificar el flujo de datos completo de un caso

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir tests de integración entre módulos | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Testear la interacción entre store y servicios · Integrar componentes con sus servicios reales · Usar un backend de test o json-server · Verificar el flujo de datos completo de un caso | lista | sí | 3-4 pasos |
| $criterios_clave | La integración usa dependencias reales, no mocks de todo · El flujo completo de datos se verifica | lista | sí | calidad verificable |
| $prompt_guia | Escribí tests de integración del flujo de compra: store real, servicio de API contra un json-server de test y verificación del flujo completo. | texto | no | "Tests de integración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La integración usa dependencias reales, no mocks de todo
- [ ] El flujo completo de datos se verifica

## Ejemplos de prompts

- "Escribí tests de integración del flujo de compra: store real, servicio de API contra un json-server de test y verificación del flujo completo."
- "Aplica Tests de integración (nivel basico) a mi trabajo actual con Testing JS/TS: prioriza La integración usa dependencias reales, no mocks de todo"
- "Revisa mi testing-js y dime qué pasos de Tests de integración me faltan en este nivel"