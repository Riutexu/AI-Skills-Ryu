---
name: modulos-ps-estructura-modulo-basico
description: Estructura de módulo · nivel Básico · Módulos y paquetes. Organización de un módulo real: archivos, carpetas, exports y punto de entrada. Objetivo del nivel: Crear un módulo con la estructura mínima que funcione
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "estructura-modulo"
  nivel: basico
  stack: "PowerShell 7, PSModule, PSGallery, NuGet"
---

# Estructura de módulo — Básico

## Qué hace este skill

Organización de un módulo real: archivos, carpetas, exports y punto de entrada. En este nivel se entrega: **Crear un módulo con la estructura mínima que funcione**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Módulos y paquetes** (PowerShell 7, PSModule, PSGallery, NuGet) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Estructura de módulo** dentro de Módulos y paquetes.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, PSModule, PSGallery, NuGet**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear la estructura de carpetas de un módulo
2. Escribir el .psm1 con funciones
3. Cargar el módulo con Import-Module
4. Ver sus exports con Get-Module y Get-Command

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Crear un módulo con la estructura mínima que funcione | texto | sí | resultado medible |
| $stack | Módulos y paquetes | texto | sí | 10-powershell/modulos-ps |
| $tecnologias | PowerShell 7, PSModule, PSGallery, NuGet | texto | sí | PowerShell 7, PSModule, PSGallery, NuGet |
| $tareas_clave | Crear la estructura de carpetas de un módulo · Escribir el .psm1 con funciones · Cargar el módulo con Import-Module · Ver sus exports con Get-Module y Get-Command | lista | sí | 3-4 pasos |
| $criterios_clave | El módulo se importa y sus funciones se usan · La estructura sigue la convención de la comunidad | lista | sí | calidad verificable |
| $prompt_guia | Quiero crear mi primer módulo PowerShell para mi suite RYU-TUI: explicame la estructura estándar de carpetas y archivos y armá un .psm1 mínimo que funcione. | texto | no | "Estructura de módulo" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El módulo se importa y sus funciones se usan
- [ ] La estructura sigue la convención de la comunidad

## Ejemplos de prompts

- "Quiero crear mi primer módulo PowerShell para mi suite RYU-TUI: explicame la estructura estándar de carpetas y archivos y armá un .psm1 mínimo que funcione."
- "Aplica Estructura de módulo (nivel basico) a mi trabajo actual con Módulos y paquetes: prioriza El módulo se importa y sus funciones se usan"
- "Revisa mi modulos-ps y dime qué pasos de Estructura de módulo me faltan en este nivel"