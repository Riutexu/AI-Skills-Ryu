---
name: powershell-core-manejo-de-errores-profesional
description: Manejo de errores try/catch · nivel Profesional · PowerShell 7: scripting profesional. Errores terminantes y no terminantes, try/catch/finally, ErrorAction y diagnóstico de fallas. Objetivo del nivel: Estrategia de errores global: $ErrorActionPreference, errores de funciones propias y reporte consistente
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "manejo-de-errores"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Manejo de errores try/catch — Profesional

## Qué hace este skill

Errores terminantes y no terminantes, try/catch/finally, ErrorAction y diagnóstico de fallas. En este nivel se entrega: **Estrategia de errores global: $ErrorActionPreference, errores de funciones propias y reporte consistente**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Manejo de errores try/catch** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Establecer una política global de $ErrorActionPreference por script
2. Hacer que tus funciones generen errores terminantes bien formados
3. Escribir errores a un log con timestamp sin perder la pila
4. Crear un wrapper centralizado de ejecución con manejo uniforme

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de errores global: $ErrorActionPreference, errores de funciones propias y reporte consistente | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Establecer una política global de $ErrorActionPreference por script · Hacer que tus funciones generen errores terminantes bien formados · Escribir errores a un log con timestamp sin perder la pila · Crear un wrapper centralizado de ejecución con manejo uniforme | lista | sí | 3-4 pasos |
| $criterios_clave | Todos los módulos de tu script reportan errores con el mismo formato · Un error inesperado deja un log diagnóstico accionable | lista | sí | calidad verificable |
| $prompt_guia | Mi suite de scripts maneja errores cada una a su manera. Diseñame una estrategia única: política de ErrorActionPreference, formato de errores logueados y un wrapper que centralice try/catch para toda la suite. | texto | no | "Manejo de errores try/catch" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todos los módulos de tu script reportan errores con el mismo formato
- [ ] Un error inesperado deja un log diagnóstico accionable

## Ejemplos de prompts

- "Mi suite de scripts maneja errores cada una a su manera. Diseñame una estrategia única: política de ErrorActionPreference, formato de errores logueados y un wrapper que centralice try/catch para toda la suite."
- "Aplica Manejo de errores try/catch (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Todos los módulos de tu script reportan errores con el mismo formato"
- "Revisa mi powershell-core y dime qué pasos de Manejo de errores try/catch me faltan en este nivel"