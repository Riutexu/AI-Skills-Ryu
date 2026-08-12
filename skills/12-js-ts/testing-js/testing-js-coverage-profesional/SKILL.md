---
name: testing-js-coverage-profesional
description: Coverage · nivel Profesional · Testing JS/TS. Medís y gestionás la cobertura de código con umbrales y reportes accionables. Objetivo del nivel: Definir la política de cobertura del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "coverage"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# Coverage — Profesional

## Qué hace este skill

Medís y gestionás la cobertura de código con umbrales y reportes accionables. En este nivel se entrega: **Definir la política de cobertura del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Coverage** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir umbrales por módulo según criticidad
2. Integrar la cobertura con el reporte de CI
3. Complementar cobertura con mutaciones si hace falta
4. Documentar la política y sus excepciones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la política de cobertura del proyecto | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Definir umbrales por módulo según criticidad · Integrar la cobertura con el reporte de CI · Complementar cobertura con mutaciones si hace falta · Documentar la política y sus excepciones | lista | sí | 3-4 pasos |
| $criterios_clave | La política de cobertura está documentada y automática · Los módulos críticos tienen umbrales altos | lista | sí | calidad verificable |
| $prompt_guia | Definí la política de cobertura del proyecto: umbrales por criticidad de módulo, verificación en CI y las excepciones documentadas. Nada de números mágicos. | texto | no | "Coverage" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La política de cobertura está documentada y automática
- [ ] Los módulos críticos tienen umbrales altos

## Ejemplos de prompts

- "Definí la política de cobertura del proyecto: umbrales por criticidad de módulo, verificación en CI y las excepciones documentadas. Nada de números mágicos."
- "Aplica Coverage (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza La política de cobertura está documentada y automática"
- "Revisa mi testing-js y dime qué pasos de Coverage me faltan en este nivel"