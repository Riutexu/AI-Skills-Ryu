---
name: pester-testing-tests-integracion-avanzado
description: Tests de integración · nivel Avanzado · Pester: testing de scripts. Cuando el mock no alcanza: probar la interacción real entre script, módulos y sistema operativo. Objetivo del nivel: Ambientes de integración controlados: containers/VM, limpieza post-test y tagging
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "tests-integracion"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Tests de integración — Avanzado

## Qué hace este skill

Cuando el mock no alcanza: probar la interacción real entre script, módulos y sistema operativo. En este nivel se entrega: **Ambientes de integración controlados: containers/VM, limpieza post-test y tagging**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Tests de integración** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Correr la integración en un ambiente desechable
2. Taggear tests de integración (no corren por defecto)
3. Limpiar el ambiente pase o no el test
4. Separar unit de integration en el reporte

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Ambientes de integración controlados: containers/VM, limpieza post-test y tagging | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Correr la integración en un ambiente desechable · Taggear tests de integración (no corren por defecto) · Limpiar el ambiente pase o no el test · Separar unit de integration en el reporte | lista | sí | 3-4 pasos |
| $criterios_clave | Los tests de integración no corren en el run unitario · El ambiente de prueba no deja rastros | lista | sí | calidad verificable |
| $prompt_guia | Mis tests de integración tocan el sistema y ensucian: organizá una carpeta aparte, tags para que no corran por defecto y un ambiente desechable con limpieza forzada. | texto | no | "Tests de integración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los tests de integración no corren en el run unitario
- [ ] El ambiente de prueba no deja rastros

## Ejemplos de prompts

- "Mis tests de integración tocan el sistema y ensucian: organizá una carpeta aparte, tags para que no corran por defecto y un ambiente desechable con limpieza forzada."
- "Aplica Tests de integración (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza Los tests de integración no corren en el run unitario"
- "Revisa mi pester-testing y dime qué pasos de Tests de integración me faltan en este nivel"