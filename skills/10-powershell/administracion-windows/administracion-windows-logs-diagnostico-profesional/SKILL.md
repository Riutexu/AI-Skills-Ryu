---
name: administracion-windows-logs-diagnostico-profesional
description: Logs y diagnóstico · nivel Profesional · Administración de Windows. Diagnóstico de sistema: archivos de log, reporte de estado de salud y recolección de evidencia. Objetivo del nivel: Estrategia de logging de la suite: formato estructurado, niveles y acceso desde la TUI
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "logs-diagnostico"
  nivel: profesional
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Logs y diagnóstico — Profesional

## Qué hace este skill

Diagnóstico de sistema: archivos de log, reporte de estado de salud y recolección de evidencia. En este nivel se entrega: **Estrategia de logging de la suite: formato estructurado, niveles y acceso desde la TUI**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logs y diagnóstico** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el formato de log estructurado de RYU-TUI
2. Implementar niveles (info, warn, error) por módulo
3. Agregar un visor de logs dentro de la TUI
4. Definir política de retención automática

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia de logging de la suite: formato estructurado, niveles y acceso desde la TUI | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Diseñar el formato de log estructurado de RYU-TUI · Implementar niveles (info, warn, error) por módulo · Agregar un visor de logs dentro de la TUI · Definir política de retención automática | lista | sí | 3-4 pasos |
| $criterios_clave | Cada módulo loguea con el mismo formato estructurado · Se puede leer el historial de errores desde la TUI | lista | sí | calidad verificable |
| $prompt_guia | Quiero un sistema de logging para RYU-TUI: formato JSON estructurado, niveles por módulo, retención automática y un visor de logs adentro de la TUI. Diseñalo entero. | texto | no | "Logs y diagnóstico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada módulo loguea con el mismo formato estructurado
- [ ] Se puede leer el historial de errores desde la TUI

## Ejemplos de prompts

- "Quiero un sistema de logging para RYU-TUI: formato JSON estructurado, niveles por módulo, retención automática y un visor de logs adentro de la TUI. Diseñalo entero."
- "Aplica Logs y diagnóstico (nivel profesional) a mi trabajo actual con Administración de Windows: prioriza Cada módulo loguea con el mismo formato estructurado"
- "Revisa mi administracion-windows y dime qué pasos de Logs y diagnóstico me faltan en este nivel"