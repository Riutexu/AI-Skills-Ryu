---
name: pester-testing-beforeall-setup-profesional
description: Antes y después (BeforeAll) · nivel Profesional · Pester: testing de scripts. Setup y teardown: BeforeAll/AfterAll, BeforeEach/AfterEach y estados compartidos sin sorpresas. Objetivo del nivel: Orquestación de fixtures de la suite: setup centralizado, paralelismo y determinismo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "beforeall-setup"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Antes y después (BeforeAll) — Profesional

## Qué hace este skill

Setup y teardown: BeforeAll/AfterAll, BeforeEach/AfterEach y estados compartidos sin sorpresas. En este nivel se entrega: **Orquestación de fixtures de la suite: setup centralizado, paralelismo y determinismo**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Antes y después (BeforeAll)** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Centralizar fixtures comunes en un módulo de soporte
2. Hacer la suite determinista (sin estado global)
3. Evaluar paralelismo de la suite sin conflictos
4. Documentar los fixtures por archivo de tests

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Orquestación de fixtures de la suite: setup centralizado, paralelismo y determinismo | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Centralizar fixtures comunes en un módulo de soporte · Hacer la suite determinista (sin estado global) · Evaluar paralelismo de la suite sin conflictos · Documentar los fixtures por archivo de tests | lista | sí | 3-4 pasos |
| $criterios_clave | La suite da el mismo resultado corrida 5 veces seguidas · Los fixtures compartidos no generan colisiones entre archivos | lista | sí | calidad verificable |
| $prompt_guia | Quiero que la suite de RYU-TUI sea determinista: fixtures centralizados sin estado global, corridas repetidas idénticas y evaluación de si el paralelismo es seguro. Diseñámelo. | texto | no | "Antes y después (BeforeAll)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La suite da el mismo resultado corrida 5 veces seguidas
- [ ] Los fixtures compartidos no generan colisiones entre archivos

## Ejemplos de prompts

- "Quiero que la suite de RYU-TUI sea determinista: fixtures centralizados sin estado global, corridas repetidas idénticas y evaluación de si el paralelismo es seguro. Diseñámelo."
- "Aplica Antes y después (BeforeAll) (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza La suite da el mismo resultado corrida 5 veces seguidas"
- "Revisa mi pester-testing y dime qué pasos de Antes y después (BeforeAll) me faltan en este nivel"