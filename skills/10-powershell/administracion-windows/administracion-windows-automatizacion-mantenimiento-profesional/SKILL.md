---
name: administracion-windows-automatizacion-mantenimiento-profesional
description: Automatización de mantenimiento · nivel Profesional · Administración de Windows. Rutinas de mantenimiento: limpieza de temporales, actualizaciones, discos y reportes periódicos. Objetivo del nivel: Ciclo completo de mantenimiento: health checks, reportes automáticos y recuperación
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "automatizacion-mantenimiento"
  nivel: profesional
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Automatización de mantenimiento — Profesional

## Qué hace este skill

Rutinas de mantenimiento: limpieza de temporales, actualizaciones, discos y reportes periódicos. En este nivel se entrega: **Ciclo completo de mantenimiento: health checks, reportes automáticos y recuperación**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Automatización de mantenimiento** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la rutina completa (disco, servicios, eventos, actualizaciones)
2. Generar reporte automático semanal a archivo
3. Detectar condiciones de alerta (disco bajo, servicios caídos)
4. Integrar el mantenimiento a la TUI como comando

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Ciclo completo de mantenimiento: health checks, reportes automáticos y recuperación | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Diseñar la rutina completa (disco, servicios, eventos, actualizaciones) · Generar reporte automático semanal a archivo · Detectar condiciones de alerta (disco bajo, servicios caídos) · Integrar el mantenimiento a la TUI como comando | lista | sí | 3-4 pasos |
| $criterios_clave | El reporte semanal cubre disco, servicios y eventos · Las condiciones de alerta se disparan sin intervención | lista | sí | calidad verificable |
| $prompt_guia | Quiero un comando de mantenimiento en RYU-TUI: corre los checks de disco, servicios y eventos, genera un reporte semanal y marca alertas si el disco está bajo o hay servicios caídos. | texto | no | "Automatización de mantenimiento" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El reporte semanal cubre disco, servicios y eventos
- [ ] Las condiciones de alerta se disparan sin intervención

## Ejemplos de prompts

- "Quiero un comando de mantenimiento en RYU-TUI: corre los checks de disco, servicios y eventos, genera un reporte semanal y marca alertas si el disco está bajo o hay servicios caídos."
- "Aplica Automatización de mantenimiento (nivel profesional) a mi trabajo actual con Administración de Windows: prioriza El reporte semanal cubre disco, servicios y eventos"
- "Revisa mi administracion-windows y dime qué pasos de Automatización de mantenimiento me faltan en este nivel"