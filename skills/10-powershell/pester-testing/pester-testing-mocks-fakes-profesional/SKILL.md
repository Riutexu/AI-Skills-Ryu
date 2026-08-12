---
name: pester-testing-mocks-fakes-profesional
description: Mocks y fakes · nivel Profesional · Pester: testing de scripts. Aislar el código bajo test: Mock de cmdlets y funciones, verificación de llamadas y parámetros. Objetivo del nivel: Estrategia de fakes de la suite: contratos falsos por módulo, sin mocks de más y tests de integración puntuales
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "mocks-fakes"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Mocks y fakes — Profesional

## Qué hace este skill

Aislar el código bajo test: Mock de cmdlets y funciones, verificación de llamadas y parámetros. En este nivel se entrega: **Estrategia de fakes de la suite: contratos falsos por módulo, sin mocks de más y tests de integración puntuales**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mocks y fakes** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar fakes de las capas externas (filesystem, network)
2. Decidir qué se mockea y qué se prueba de verdad
3. Evitar mocks que sobre-especifican la implementación
4. Correr una prueba de integración real por release

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de fakes de la suite: contratos falsos por módulo, sin mocks de más y tests de integración puntuales | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Diseñar fakes de las capas externas (filesystem, network) · Decidir qué se mockea y qué se prueba de verdad · Evitar mocks que sobre-especifican la implementación · Correr una prueba de integración real por release | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests unitarios corren 100% offline con fakes · Los mocks se revisan en code review como cualquier código | lista | sí | calidad verificable |
| $prompt_guia | Quiero una estrategia de fakes para la suite de RYU-TUI: qué capas se mockean, qué contratos definen los fakes y una prueba de integración real que corra solo en release. | texto | no | "Mocks y fakes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests unitarios corren 100% offline con fakes
- [ ] Los mocks se revisan en code review como cualquier código

## Ejemplos de prompts

- "Quiero una estrategia de fakes para la suite de RYU-TUI: qué capas se mockean, qué contratos definen los fakes y una prueba de integración real que corra solo en release."
- "Aplica Mocks y fakes (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza Los tests unitarios corren 100% offline con fakes"
- "Revisa mi pester-testing y dime qué pasos de Mocks y fakes me faltan en este nivel"