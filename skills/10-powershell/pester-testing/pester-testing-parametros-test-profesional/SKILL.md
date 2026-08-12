---
name: pester-testing-parametros-test-profesional
description: Parámetros de test · nivel Profesional · Pester: testing de scripts. Tests parametrizados con @Cases: cubrir múltiples entradas con un solo It sin duplicar código. Objetivo del nivel: Matriz de compatibilidad como datos: casos por versión/entorno y ejecución dirigida
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "parametros-test"
  nivel: profesional
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Parámetros de test — Profesional

## Qué hace este skill

Tests parametrizados con @Cases: cubrir múltiples entradas con un solo It sin duplicar código. En este nivel se entrega: **Matriz de compatibilidad como datos: casos por versión/entorno y ejecución dirigida**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Parámetros de test** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir matrices de casos por entorno (PS 5.1, pwsh 7)
2. Saltar casos según versión con condiciones
3. Medir la cobertura real de la matriz de casos
4. Integrar los casos al reporte de la suite

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Matriz de compatibilidad como datos: casos por versión/entorno y ejecución dirigida | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Definir matrices de casos por entorno (PS 5.1, pwsh 7) · Saltar casos según versión con condiciones · Medir la cobertura real de la matriz de casos · Integrar los casos al reporte de la suite | lista | sí | 3-4 pasos |
| $criterios_clave | La matriz cubre los entornos soportados con datos declarados · Un caso nuevo se agrega sin tocar la lógica del test | lista | sí | calidad verificable |
| $prompt_guia | Quiero una matriz de casos de test por entorno para RYU-TUI: mismos casos en PS 5.1 y pwsh 7, saltos condicionales por versión y cobertura reportada en el output. | texto | no | "Parámetros de test" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La matriz cubre los entornos soportados con datos declarados
- [ ] Un caso nuevo se agrega sin tocar la lógica del test

## Ejemplos de prompts

- "Quiero una matriz de casos de test por entorno para RYU-TUI: mismos casos en PS 5.1 y pwsh 7, saltos condicionales por versión y cobertura reportada en el output."
- "Aplica Parámetros de test (nivel profesional) a mi trabajo actual con Pester: testing de scripts: prioriza La matriz cubre los entornos soportados con datos declarados"
- "Revisa mi pester-testing y dime qué pasos de Parámetros de test me faltan en este nivel"