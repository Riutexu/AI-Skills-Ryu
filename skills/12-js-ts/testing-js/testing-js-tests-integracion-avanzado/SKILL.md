---
name: testing-js-tests-integracion-avanzado
description: Tests de integración · nivel Avanzado · Testing JS/TS. Probás la integración entre módulos, servicios y el backend sin ir a producción. Objetivo del nivel: Integrar contra el backend real de staging
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "tests-integracion"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# Tests de integración — Avanzado

## Qué hace este skill

Probás la integración entre módulos, servicios y el backend sin ir a producción. En este nivel se entrega: **Integrar contra el backend real de staging**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de integración** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar el entorno de test contra staging
2. Manejar datos de test con seeds y limpieza
3. Testear contratos de API contra respuestas reales
4. Aislar los tests del tráfico de otros entornos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Integrar contra el backend real de staging | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Configurar el entorno de test contra staging · Manejar datos de test con seeds y limpieza · Testear contratos de API contra respuestas reales · Aislar los tests del tráfico de otros entornos | lista | sí | 3-4 pasos |
| $criterios_clave | Los datos de test se crean y limpian solos · Los contratos se verifican contra el backend real | lista | sí | calidad verificable |
| $prompt_guia | Configurá los tests de integración contra staging: seeds de datos por suite, limpieza posterior y verificación de los contratos reales de la API. | texto | no | "Tests de integración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los datos de test se crean y limpian solos
- [ ] Los contratos se verifican contra el backend real

## Ejemplos de prompts

- "Configurá los tests de integración contra staging: seeds de datos por suite, limpieza posterior y verificación de los contratos reales de la API."
- "Aplica Tests de integración (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza Los datos de test se crean y limpian solos"
- "Revisa mi testing-js y dime qué pasos de Tests de integración me faltan en este nivel"