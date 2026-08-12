---
name: pester-testing-testing-funciones-sin-archivos-basico
description: Testing de funciones sin archivos · nivel Básico · Pester: testing de scripts. Probar lógica de funciones sueltas: dot-sourcing, InModuleScope y helpers aislados del filesystem. Objetivo del nivel: Testear una función dot-sourceada sin tocar el sistema
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "testing-funciones-sin-archivos"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Testing de funciones sin archivos — Básico

## Qué hace este skill

Probar lógica de funciones sueltas: dot-sourcing, InModuleScope y helpers aislados del filesystem. En este nivel se entrega: **Testear una función dot-sourceada sin tocar el sistema**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Testing de funciones sin archivos** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Cargar una función con dot-sourcing en el test
2. Probar su salida con entrada fija
3. Usar variables internas de la función
4. Verificar que no toque archivos reales

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Testear una función dot-sourceada sin tocar el sistema | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Cargar una función con dot-sourcing en el test · Probar su salida con entrada fija · Usar variables internas de la función · Verificar que no toque archivos reales | lista | sí | 3-4 pasos |
| $criterios_clave | Tu función se testea sin efectos colaterales · La entrada y salida están completamente controladas | lista | sí | calidad verificable |
| $prompt_guia | Tengo funciones sueltas en un .psm1 y quiero testearlas sin instalar nada: mostrame el dot-sourcing en los tests y cómo probar lógica pura. | texto | no | "Testing de funciones sin archivos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tu función se testea sin efectos colaterales
- [ ] La entrada y salida están completamente controladas

## Ejemplos de prompts

- "Tengo funciones sueltas en un .psm1 y quiero testearlas sin instalar nada: mostrame el dot-sourcing en los tests y cómo probar lógica pura."
- "Aplica Testing de funciones sin archivos (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza Tu función se testea sin efectos colaterales"
- "Revisa mi pester-testing y dime qué pasos de Testing de funciones sin archivos me faltan en este nivel"