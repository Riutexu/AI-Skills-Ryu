---
name: testing-js-mocks-spies-avanzado
description: Mocks y spies · nivel Avanzado · Testing JS/TS. Aislás dependencias con mocks, spies y stubs para testear unidades con precisión. Objetivo del nivel: Mockear módulos y dependencias externas
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "mocks-spies"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# Mocks y spies — Avanzado

## Qué hace este skill

Aislás dependencias con mocks, spies y stubs para testear unidades con precisión. En este nivel se entrega: **Mockear módulos y dependencias externas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mocks y spies** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mockear módulos completos con vi.mock
2. Mockear fetch y librerías externas
3. Controlar valores de retorno y errores de los mocks
4. Usar vi.clearAllMocks vs vi.resetAllMocks con criterio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Mockear módulos y dependencias externas | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Mockear módulos completos con vi.mock · Mockear fetch y librerías externas · Controlar valores de retorno y errores de los mocks · Usar vi.clearAllMocks vs vi.resetAllMocks con criterio | lista | sí | 3-4 pasos |
| $criterios_clave | Los mocks de módulos se restauran en los afterEach · Los escenarios de error de las dependencias están cubiertos | lista | sí | calidad verificable |
| $prompt_guia | Mockeá el módulo de API y la librería de charts en los tests de la vista de reportes, cubriendo éxito, error y respuesta vacía. | texto | no | "Mocks y spies" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los mocks de módulos se restauran en los afterEach
- [ ] Los escenarios de error de las dependencias están cubiertos

## Ejemplos de prompts

- "Mockeá el módulo de API y la librería de charts en los tests de la vista de reportes, cubriendo éxito, error y respuesta vacía."
- "Aplica Mocks y spies (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza Los mocks de módulos se restauran en los afterEach"
- "Revisa mi testing-js y dime qué pasos de Mocks y spies me faltan en este nivel"