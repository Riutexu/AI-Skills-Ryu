---
name: pester-testing-mocks-fakes-avanzado
description: Mocks y fakes · nivel Avanzado · Pester: testing de scripts. Aislar el código bajo test: Mock de cmdlets y funciones, verificación de llamadas y parámetros. Objetivo del nivel: Mocks por parámetro, verificación exacta de argumentos y fakes de pipeline
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "mocks-fakes"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Mocks y fakes — Avanzado

## Qué hace este skill

Aislar el código bajo test: Mock de cmdlets y funciones, verificación de llamadas y parámetros. En este nivel se entrega: **Mocks por parámetro, verificación exacta de argumentos y fakes de pipeline**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Mocks y fakes** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mockear solo para ciertos parámetros
2. Verificar argumentos exactos con -ParameterFilter
3. Simular cmdlets que emiten objetos por pipeline
4. Testear el orden de las llamadas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Mocks por parámetro, verificación exacta de argumentos y fakes de pipeline | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Mockear solo para ciertos parámetros · Verificar argumentos exactos con -ParameterFilter · Simular cmdlets que emiten objetos por pipeline · Testear el orden de las llamadas | lista | sí | 3-4 pasos |
| $criterios_clave | El mock distingue llamadas distintas por sus argumentos · Verificás el flujo completo, no solo que se llamó | lista | sí | calidad verificable |
| $prompt_guia | Mi función descarga un archivo y lo guarda: quiero mockear Invoke-WebRequest solo para ciertas URLs y verificar que se llama con los headers exactos. Mostrame -ParameterFilter. | texto | no | "Mocks y fakes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El mock distingue llamadas distintas por sus argumentos
- [ ] Verificás el flujo completo, no solo que se llamó

## Ejemplos de prompts

- "Mi función descarga un archivo y lo guarda: quiero mockear Invoke-WebRequest solo para ciertas URLs y verificar que se llama con los headers exactos. Mostrame -ParameterFilter."
- "Aplica Mocks y fakes (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza El mock distingue llamadas distintas por sus argumentos"
- "Revisa mi pester-testing y dime qué pasos de Mocks y fakes me faltan en este nivel"