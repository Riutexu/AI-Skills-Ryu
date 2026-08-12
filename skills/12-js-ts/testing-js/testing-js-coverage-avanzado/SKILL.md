---
name: testing-js-coverage-avanzado
description: Coverage · nivel Avanzado · Testing JS/TS. Medís y gestionás la cobertura de código con umbrales y reportes accionables. Objetivo del nivel: Establecer umbrales y enfocar la cobertura donde importa
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "coverage"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# Coverage — Avanzado

## Qué hace este skill

Medís y gestionás la cobertura de código con umbrales y reportes accionables. En este nivel se entrega: **Establecer umbrales y enfocar la cobertura donde importa**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Coverage** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar umbrales globales y por archivo
2. Excluir archivos sin lógica (main, configs)
3. Usar coverage de branches para decisiones
4. Subir la cobertura de los módulos críticos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Establecer umbrales y enfocar la cobertura donde importa | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Configurar umbrales globales y por archivo · Excluir archivos sin lógica (main, configs) · Usar coverage de branches para decisiones · Subir la cobertura de los módulos críticos | lista | sí | 3-4 pasos |
| $criterios_clave | Los umbrales se verifican en CI · Las exclusiones están justificadas | lista | sí | calidad verificable |
| $prompt_guia | Configurá umbrales de cobertura (80% lines, 70% branches) con exclusiones justificadas, y subí la cobertura del módulo de pagos al umbral. | texto | no | "Coverage" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los umbrales se verifican en CI
- [ ] Las exclusiones están justificadas

## Ejemplos de prompts

- "Configurá umbrales de cobertura (80% lines, 70% branches) con exclusiones justificadas, y subí la cobertura del módulo de pagos al umbral."
- "Aplica Coverage (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza Los umbrales se verifican en CI"
- "Revisa mi testing-js y dime qué pasos de Coverage me faltan en este nivel"