---
name: pester-testing-tests-integracion-basico
description: Tests de integración · nivel Básico · Pester: testing de scripts. Cuando el mock no alcanza: probar la interacción real entre script, módulos y sistema operativo. Objetivo del nivel: Escribir un test de integración que corre un script completo
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tests-integracion"
  nivel: basico
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Tests de integración — Básico

## Qué hace este skill

Cuando el mock no alcanza: probar la interacción real entre script, módulos y sistema operativo. En este nivel se entrega: **Escribir un test de integración que corre un script completo**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de integración** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Ejecutar un script real desde el test
2. Verificar sus efectos con comandos del sistema
3. Usar un ambiente de prueba aislado
4. Documentar qué requisitos tiene el test (admin, red)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir un test de integración que corre un script completo | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Ejecutar un script real desde el test · Verificar sus efectos con comandos del sistema · Usar un ambiente de prueba aislado · Documentar qué requisitos tiene el test (admin, red) | lista | sí | 3-4 pasos |
| $criterios_clave | El test corre el script de verdad y verifica efectos reales · Los requisitos del test están documentados | lista | sí | calidad verificable |
| $prompt_guia | Quiero un test de integración que corra bootstrap.ps1 de verdad en una VM y verifique que los módulos quedaron instalados. Armámelo con los requisitos documentados. | texto | no | "Tests de integración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El test corre el script de verdad y verifica efectos reales
- [ ] Los requisitos del test están documentados

## Ejemplos de prompts

- "Quiero un test de integración que corra bootstrap.ps1 de verdad en una VM y verifique que los módulos quedaron instalados. Armámelo con los requisitos documentados."
- "Aplica Tests de integración (nivel basico) a mi trabajo actual con Pester: testing de scripts: prioriza El test corre el script de verdad y verifica efectos reales"
- "Revisa mi pester-testing y dime qué pasos de Tests de integración me faltan en este nivel"