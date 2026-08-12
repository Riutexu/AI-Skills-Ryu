---
name: pester-testing-tests-bootstrap-instalacion-basico
description: Tests de bootstrap/instalación · nivel Básico · Pester: testing de scripts. Testear el instalador: idempotencia, prerequisitos y estado del sistema después de correr bootstrap.ps1. Objetivo del nivel: Testear los pasos de instalación del bootstrap con mocks
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tests-bootstrap-instalacion"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Tests de bootstrap/instalación — Básico

## Qué hace este skill

Testear el instalador: idempotencia, prerequisitos y estado del sistema después de correr bootstrap.ps1. En este nivel se entrega: **Testear los pasos de instalación del bootstrap con mocks**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de bootstrap/instalación** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Mockear las instalaciones de módulos
2. Verificar que llama a los pasos en orden
3. Testear la detección de prerequisitos
4. Verificar los mensajes de estado por etapa

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Testear los pasos de instalación del bootstrap con mocks | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Mockear las instalaciones de módulos · Verificar que llama a los pasos en orden · Testear la detección de prerequisitos · Verificar los mensajes de estado por etapa | lista | sí | 3-4 pasos |
| $criterios_clave | El bootstrap se testea sin instalar nada · Verificás el orden y los argumentos de cada paso | lista | sí | calidad verificable |
| $prompt_guia | Quiero testear bootstrap.ps1 sin instalar nada: mockeá Install-Module y verifica que los pasos se llaman en orden y con los argumentos correctos. | texto | no | "Tests de bootstrap/instalación" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El bootstrap se testea sin instalar nada
- [ ] Verificás el orden y los argumentos de cada paso

## Ejemplos de prompts

- "Quiero testear bootstrap.ps1 sin instalar nada: mockeá Install-Module y verifica que los pasos se llaman en orden y con los argumentos correctos."
- "Aplica Tests de bootstrap/instalación (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza El bootstrap se testea sin instalar nada"
- "Revisa mi pester-testing y dime qué pasos de Tests de bootstrap/instalación me faltan en este nivel"