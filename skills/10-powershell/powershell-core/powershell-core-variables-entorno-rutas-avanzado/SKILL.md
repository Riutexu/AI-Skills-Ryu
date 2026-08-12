---
name: powershell-core-variables-entorno-rutas-avanzado
description: Variables de entorno y rutas · nivel Avanzado · PowerShell 7: scripting profesional. Environment, $env:, rutas relativas, Join-Path y portabilidad entre máquinas. Objetivo del nivel: Persistir variables de entorno por usuario/máquina y resolver rutas dinámicas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "variables-entorno-rutas"
  nivel: avanzado
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Variables de entorno y rutas — Avanzado

## Qué hace este skill

Environment, $env:, rutas relativas, Join-Path y portabilidad entre máquinas. En este nivel se entrega: **Persistir variables de entorno por usuario/máquina y resolver rutas dinámicas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Variables de entorno y rutas** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Setear variables persistentes con [Environment]::SetEnvironmentVariable
2. Resolver rutas con Resolve-Path y manejar rutas inexistentes
3. Usar rutas especiales con [Environment]::GetFolderPath
4. Priorizar variables de entorno sobre defaults en configs

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Persistir variables de entorno por usuario/máquina y resolver rutas dinámicas | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Setear variables persistentes con [Environment]::SetEnvironmentVariable · Resolver rutas con Resolve-Path y manejar rutas inexistentes · Usar rutas especiales con [Environment]::GetFolderPath · Priorizar variables de entorno sobre defaults en configs | lista | sí | 3-4 pasos |
| $criterios_clave | La variable persiste entre sesiones con el scope correcto · El script funciona aunque la carpeta base no exista | lista | sí | calidad verificable |
| $prompt_guia | Quiero que mi script lea una variable RYU_CONFIG_DIR persistente que apunte a la carpeta de config, y si no está seteada use el AppData del usuario. Mostrame el patrón con GetFolderPath y SetEnvironmentVariable. | texto | no | "Variables de entorno y rutas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La variable persiste entre sesiones con el scope correcto
- [ ] El script funciona aunque la carpeta base no exista

## Ejemplos de prompts

- "Quiero que mi script lea una variable RYU_CONFIG_DIR persistente que apunte a la carpeta de config, y si no está seteada use el AppData del usuario. Mostrame el patrón con GetFolderPath y SetEnvironmentVariable."
- "Aplica Variables de entorno y rutas (nivel avanzado) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza La variable persiste entre sesiones con el scope correcto"
- "Revisa mi powershell-core y dime qué pasos de Variables de entorno y rutas me faltan en este nivel"