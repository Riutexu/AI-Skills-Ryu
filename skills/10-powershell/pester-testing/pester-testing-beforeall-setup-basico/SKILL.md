---
name: pester-testing-beforeall-setup-basico
description: Antes y después (BeforeAll) · nivel Básico · Pester: testing de scripts. Setup y teardown: BeforeAll/AfterAll, BeforeEach/AfterEach y estados compartidos sin sorpresas. Objetivo del nivel: Preparar y limpiar el estado con los bloques Before/After
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "beforeall-setup"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Antes y después (BeforeAll) — Básico

## Qué hace este skill

Setup y teardown: BeforeAll/AfterAll, BeforeEach/AfterEach y estados compartidos sin sorpresas. En este nivel se entrega: **Preparar y limpiar el estado con los bloques Before/After**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Antes y después (BeforeAll)** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar BeforeAll para preparar datos una sola vez
2. Usar AfterAll para limpiar lo creado
3. Diferenciar BeforeAll de BeforeEach
4. Entender el orden de ejecución de los bloques

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Preparar y limpiar el estado con los bloques Before/After | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Usar BeforeAll para preparar datos una sola vez · Usar AfterAll para limpiar lo creado · Diferenciar BeforeAll de BeforeEach · Entender el orden de ejecución de los bloques | lista | sí | 3-4 pasos |
| $criterios_clave | Los archivos temporales de test se crean y se limpian solos · Sabés por qué tu estado se pisa entre tests | lista | sí | calidad verificable |
| $prompt_guia | Mis tests se pisan entre sí porque crean archivos temporales: explicame BeforeAll, BeforeEach, AfterAll y AfterEach y armame el patrón de setup y limpieza. | texto | no | "Antes y después (BeforeAll)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los archivos temporales de test se crean y se limpian solos
- [ ] Sabés por qué tu estado se pisa entre tests

## Ejemplos de prompts

- "Mis tests se pisan entre sí porque crean archivos temporales: explicame BeforeAll, BeforeEach, AfterAll y AfterEach y armame el patrón de setup y limpieza."
- "Aplica Antes y después (BeforeAll) (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza Los archivos temporales de test se crean y se limpian solos"
- "Revisa mi pester-testing y dime qué pasos de Antes y después (BeforeAll) me faltan en este nivel"