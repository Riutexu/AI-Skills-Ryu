---
name: testing-js-snapshot-testing-avanzado
description: Snapshot testing · nivel Avanzado · Testing JS/TS. Usás snapshots con criterio para detectar regresiones de salida y estructuras de datos. Objetivo del nivel: Usar snapshots inline y parciales con criterio
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "snapshot-testing"
  nivel: avanzado
  stack: "Vitest, Playwright, jsdom, CI"
---

# Snapshot testing — Avanzado

## Qué hace este skill

Usás snapshots con criterio para detectar regresiones de salida y estructuras de datos. En este nivel se entrega: **Usar snapshots inline y parciales con criterio**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Snapshot testing** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar snapshots inline para estructuras chicas
2. Recortar snapshots con custom serializers
3. Combinar snapshots con matchers parciales
4. Excluir campos volátiles (fechas, ids)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Usar snapshots inline y parciales con criterio | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Usar snapshots inline para estructuras chicas · Recortar snapshots con custom serializers · Combinar snapshots con matchers parciales · Excluir campos volátiles (fechas, ids) | lista | sí | 3-4 pasos |
| $criterios_clave | Los campos volátiles no entran al snapshot · Los serializers se documentan y reutilizan | lista | sí | calidad verificable |
| $prompt_guia | Mejorá los snapshots de las respuestas de la API: excluí fechas e ids con un custom serializer y usá snapshots inline donde el objeto sea chico. | texto | no | "Snapshot testing" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los campos volátiles no entran al snapshot
- [ ] Los serializers se documentan y reutilizan

## Ejemplos de prompts

- "Mejorá los snapshots de las respuestas de la API: excluí fechas e ids con un custom serializer y usá snapshots inline donde el objeto sea chico."
- "Aplica Snapshot testing (nivel avanzado) a mi trabajo actual con Testing JS/TS: prioriza Los campos volátiles no entran al snapshot"
- "Revisa mi testing-js y dime qué pasos de Snapshot testing me faltan en este nivel"