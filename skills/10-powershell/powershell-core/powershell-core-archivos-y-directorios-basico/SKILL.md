---
name: powershell-core-archivos-y-directorios-basico
description: Archivos y directorios · nivel Básico · PowerShell 7: scripting profesional. Get-ChildItem, rutas, lecturas eficientes, filtros y operaciones batch sin sorpresas de permiso. Objetivo del nivel: Listar, leer y escribir archivos con los cmdlets estándar
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "archivos-y-directorios"
  nivel: basico
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Archivos y directorios — Básico

## Qué hace este skill

Get-ChildItem, rutas, lecturas eficientes, filtros y operaciones batch sin sorpresas de permiso. En este nivel se entrega: **Listar, leer y escribir archivos con los cmdlets estándar**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Archivos y directorios** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Explorar con Get-ChildItem y filtros -Filter
2. Leer archivos con Get-Content y escribir con Set-Content
3. Crear y eliminar directorios con New-Item y Remove-Item
4. Mover y copiar archivos con Move-Item y Copy-Item

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Listar, leer y escribir archivos con los cmdlets estándar | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Explorar con Get-ChildItem y filtros -Filter · Leer archivos con Get-Content y escribir con Set-Content · Crear y eliminar directorios con New-Item y Remove-Item · Mover y copiar archivos con Move-Item y Copy-Item | lista | sí | 3-4 pasos |
| $criterios_clave | Operás archivos y carpetas sin usar rutas hardcodeadas · Sabés la diferencia entre Get-Content y Get-Content -Raw | lista | sí | calidad verificable |
| $prompt_guia | Armame los comandos básicos para trabajar con archivos y carpetas: listar con filtro, leer, crear, copiar y borrar. Quiero ejemplos que no usen rutas fijas. | texto | no | "Archivos y directorios" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Operás archivos y carpetas sin usar rutas hardcodeadas
- [ ] Sabés la diferencia entre Get-Content y Get-Content -Raw

## Ejemplos de prompts

- "Armame los comandos básicos para trabajar con archivos y carpetas: listar con filtro, leer, crear, copiar y borrar. Quiero ejemplos que no usen rutas fijas."
- "Aplica Archivos y directorios (nivel basico) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Operás archivos y carpetas sin usar rutas hardcodeadas"
- "Revisa mi powershell-core y dime qué pasos de Archivos y directorios me faltan en este nivel"