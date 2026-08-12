---
name: powershell-core-variables-entorno-rutas-profesional
description: Variables de entorno y rutas · nivel Profesional · PowerShell 7: scripting profesional. Environment, $env:, rutas relativas, Join-Path y portabilidad entre máquinas. Objetivo del nivel: Configuración por entorno: validar variables, fallar con mensajes útiles y documentar requisitos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "variables-entorno-rutas"
  nivel: profesional
  stack: "PowerShell 7, PSScriptAnalyzer, Windows 11"
---

# Variables de entorno y rutas — Profesional

## Qué hace este skill

Environment, $env:, rutas relativas, Join-Path y portabilidad entre máquinas. En este nivel se entrega: **Configuración por entorno: validar variables, fallar con mensajes útiles y documentar requisitos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PowerShell 7: scripting profesional** (PowerShell 7, PSScriptAnalyzer, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Variables de entorno y rutas** dentro de PowerShell 7: scripting profesional.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSScriptAnalyzer, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un bootstraper de entorno que valide variables obligatorias
2. Cargar un .env propio con precedencia sobre variables del sistema
3. Diferenciar entornos dev/prod según variables
4. Escribir requisitos de entorno en la ayuda del script

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Configuración por entorno: validar variables, fallar con mensajes útiles y documentar requisitos | texto | sí | resultado medible |
| $stack | PowerShell 7: scripting profesional | texto | sí | 10-powershell/powershell-core |
| $tecnologias | PowerShell 7, PSScriptAnalyzer, Windows 11 | texto | sí | PowerShell 7, PSScriptAnalyzer, Windows 11 |
| $tareas_clave | Crear un bootstraper de entorno que valide variables obligatorias · Cargar un .env propio con precedencia sobre variables del sistema · Diferenciar entornos dev/prod según variables · Escribir requisitos de entorno en la ayuda del script | lista | sí | 3-4 pasos |
| $criterios_clave | Arrancar sin las variables requeridas falla con mensaje que dice cuáles faltan · La misma config corre en dev y prod sin tocar código | lista | sí | calidad verificable |
| $prompt_guia | Mi suite necesita varias variables de entorno y cuando falta una, el error es inentendible. Armame un módulo de arranque que valide todas las variables, liste las que faltan y cargue un .env con precedencias claras. | texto | no | "Variables de entorno y rutas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Arrancar sin las variables requeridas falla con mensaje que dice cuáles faltan
- [ ] La misma config corre en dev y prod sin tocar código

## Ejemplos de prompts

- "Mi suite necesita varias variables de entorno y cuando falta una, el error es inentendible. Armame un módulo de arranque que valide todas las variables, liste las que faltan y cargue un .env con precedencias claras."
- "Aplica Variables de entorno y rutas (nivel profesional) a mi trabajo actual con PowerShell 7: scripting profesional: prioriza Arrancar sin las variables requeridas falla con mensaje que dice cuáles faltan"
- "Revisa mi powershell-core y dime qué pasos de Variables de entorno y rutas me faltan en este nivel"