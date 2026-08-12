---
name: pester-testing-tests-bootstrap-instalacion-profesional
description: Tests de bootstrap/instalación · nivel Profesional · Pester: testing de scripts. Testear el instalador: idempotencia, prerequisitos y estado del sistema después de correr bootstrap.ps1. Objetivo del nivel: Verificación de instalación real con tests: ambiente limpio, estado final y la suite completa en la máquina instalada
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tests-bootstrap-instalacion"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Tests de bootstrap/instalación — Profesional

## Qué hace este skill

Testear el instalador: idempotencia, prerequisitos y estado del sistema después de correr bootstrap.ps1. En este nivel se entrega: **Verificación de instalación real con tests: ambiente limpio, estado final y la suite completa en la máquina instalada**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de bootstrap/instalación** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el estado esperado post-instalación
2. Escribir checks de verificación como tests Pester
3. Correr la suite de 18 tests tras el bootstrap real
4. Validar la instalación en CI con ambiente limpio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Verificación de instalación real con tests: ambiente limpio, estado final y la suite completa en la máquina instalada | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Definir el estado esperado post-instalación · Escribir checks de verificación como tests Pester · Correr la suite de 18 tests tras el bootstrap real · Validar la instalación en CI con ambiente limpio | lista | sí | 3-4 pasos |
| $criterios_clave | El estado post-instalación se verifica con tests, no a ojo · Los 18 tests pasan en pwsh 7 sin network tras instalar | lista | sí | calidad verificable |
| $prompt_guia | Quiero verificar la instalación real de RYU-TUI con tests: definí el estado esperado, escribí los checks como tests Pester y validá que los 18 tests pasan en pwsh 7 sin network después del bootstrap. | texto | no | "Tests de bootstrap/instalación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El estado post-instalación se verifica con tests, no a ojo
- [ ] Los 18 tests pasan en pwsh 7 sin network tras instalar

## Ejemplos de prompts

- "Quiero verificar la instalación real de RYU-TUI con tests: definí el estado esperado, escribí los checks como tests Pester y validá que los 18 tests pasan en pwsh 7 sin network después del bootstrap."
- "Aplica Tests de bootstrap/instalación (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza El estado post-instalación se verifica con tests, no a ojo"
- "Revisa mi pester-testing y dime qué pasos de Tests de bootstrap/instalación me faltan en este nivel"