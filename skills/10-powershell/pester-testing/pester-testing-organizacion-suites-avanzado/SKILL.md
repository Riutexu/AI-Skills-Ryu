---
name: pester-testing-organizacion-suites-avanzado
description: Organización de suites · nivel Avanzado · Pester: testing de scripts. Carpetas de tests, naming, ejecución selectiva y el flujo de una suite que crece sin caos. Objetivo del nivel: Ejecución selectiva por tags, archivos y Describe para desarrollos parciales
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "organizacion-suites"
  nivel: avanzado
  stack: "Pester 5, PSScriptAnalyzer, pwsh 7"
---

# Organización de suites — Avanzado

## Qué hace este skill

Carpetas de tests, naming, ejecución selectiva y el flujo de una suite que crece sin caos. En este nivel se entrega: **Ejecución selectiva por tags, archivos y Describe para desarrollos parciales**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Pester: testing de scripts** (Pester 5, PSScriptAnalyzer, pwsh 7) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Organización de suites** dentro de Pester: testing de scripts.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Pester 5, PSScriptAnalyzer, pwsh 7**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Filtrar por nombre de archivo con -Path
2. Filtrar por tag con -Tag
3. Correr un Describe puntual en desarrollo
4. Excluir suites lentas del run diario

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Ejecución selectiva por tags, archivos y Describe para desarrollos parciales | texto | sí | resultado medible |
| $stack | Pester: testing de scripts | texto | sí | 10-powershell/pester-testing |
| $tecnologias | Pester 5, PSScriptAnalyzer, pwsh 7 | texto | sí | Pester 5, PSScriptAnalyzer, pwsh 7 |
| $tareas_clave | Filtrar por nombre de archivo con -Path · Filtrar por tag con -Tag · Correr un Describe puntual en desarrollo · Excluir suites lentas del run diario | lista | sí | 3-4 pasos |
| $criterios_clave | Durante desarrollo corrés solo lo que tocaste · Las suites lentas no frenan el run diario | lista | sí | calidad verificable |
| $prompt_guia | Mi suite creció y el run completo tarda: mostrame cómo correr por tags y por archivo, y cómo excluir los tests lentos del run diario. | texto | no | "Organización de suites" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Durante desarrollo corrés solo lo que tocaste
- [ ] Las suites lentas no frenan el run diario

## Ejemplos de prompts

- "Mi suite creció y el run completo tarda: mostrame cómo correr por tags y por archivo, y cómo excluir los tests lentos del run diario."
- "Aplica Organización de suites (nivel avanzado) a mi trabajo actual con Pester: testing de scripts: prioriza Durante desarrollo corrés solo lo que tocaste"
- "Revisa mi pester-testing y dime qué pasos de Organización de suites me faltan en este nivel"