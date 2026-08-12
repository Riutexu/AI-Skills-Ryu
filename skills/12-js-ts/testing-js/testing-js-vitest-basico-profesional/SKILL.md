---
name: testing-js-vitest-basico-profesional
description: Vitest básico · nivel Profesional · Testing JS/TS. Configurás Vitest y escribís los primeros tests unitarios con describe/it. Objetivo del nivel: Definir la organización de tests del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "vitest-basico"
  nivel: profesional
  stack: "Vitest, Playwright, jsdom, CI"
---

# Vitest básico — Profesional

## Qué hace este skill

Configurás Vitest y escribís los primeros tests unitarios con describe/it. En este nivel se entrega: **Definir la organización de tests del proyecto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Testing JS/TS** (Vitest, Playwright, jsdom, CI) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Vitest básico** dentro de Testing JS/TS.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vitest, Playwright, jsdom, CI**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la convención de naming y ubicación de tests
2. Crear helpers de test compartidos
3. Configurar el proyecto con múltiples entornos
4. Documentar la estrategia de test unitarios

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Definir la organización de tests del proyecto | texto | sí | resultado medible |
| $stack | Testing JS/TS | texto | sí | 12-js-ts/testing-js |
| $tecnologias | Vitest, Playwright, jsdom, CI | texto | sí | Vitest, Playwright, jsdom, CI |
| $tareas_clave | Definir la convención de naming y ubicación de tests · Crear helpers de test compartidos · Configurar el proyecto con múltiples entornos · Documentar la estrategia de test unitarios | lista | sí | 3-4 pasos |
| $criterios_clave | La convención se aplica en todo el repo · Los tests corren en node y jsdom según el módulo | lista | sí | calidad verificable |
| $prompt_guia | Definí la organización de tests del proyecto: naming, ubicación, helpers compartidos y configuración por entorno; aplicala a un módulo de ejemplo completo. | texto | no | "Vitest básico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La convención se aplica en todo el repo
- [ ] Los tests corren en node y jsdom según el módulo

## Ejemplos de prompts

- "Definí la organización de tests del proyecto: naming, ubicación, helpers compartidos y configuración por entorno; aplicala a un módulo de ejemplo completo."
- "Aplica Vitest básico (nivel profesional) a mi trabajo actual con Testing JS/TS: prioriza La convención se aplica en todo el repo"
- "Revisa mi testing-js y dime qué pasos de Vitest básico me faltan en este nivel"