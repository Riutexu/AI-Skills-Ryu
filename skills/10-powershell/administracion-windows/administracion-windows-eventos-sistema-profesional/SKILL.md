---
name: administracion-windows-eventos-sistema-profesional
description: Eventos del sistema · nivel Profesional · Administración de Windows. Event Log de Windows: Get-WinEvent, filtros por nivel y tiempo, y alertas basadas en errores. Objetivo del nivel: Monitoreo proactivo: script de alertas de eventos con estado y deduplicación
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "eventos-sistema"
  nivel: profesional
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Eventos del sistema — Profesional

## Qué hace este skill

Event Log de Windows: Get-WinEvent, filtros por nivel y tiempo, y alertas basadas en errores. En este nivel se entrega: **Monitoreo proactivo: script de alertas de eventos con estado y deduplicación**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos del sistema** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar un chequeo de eventos críticos por config
2. Evitar alertar dos veces por el mismo evento (dedupe)
3. Persistir el último evento procesado
4. Generar resumen diario de eventos nuevos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Monitoreo proactivo: script de alertas de eventos con estado y deduplicación | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Diseñar un chequeo de eventos críticos por config · Evitar alertar dos veces por el mismo evento (dedupe) · Persistir el último evento procesado · Generar resumen diario de eventos nuevos | lista | sí | 3-4 pasos |
| $criterios_clave | Cada evento crítico se reporta exactamente una vez · El script sabe dónde quedó la última vez que corrió | lista | sí | calidad verificable |
| $prompt_guia | Quiero un script que corra todos los días y avise solo los eventos críticos NUEVOS desde la última corrida, con el último timestamp persistido y deduplicación. Diseñámelo. | texto | no | "Eventos del sistema" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada evento crítico se reporta exactamente una vez
- [ ] El script sabe dónde quedó la última vez que corrió

## Ejemplos de prompts

- "Quiero un script que corra todos los días y avise solo los eventos críticos NUEVOS desde la última corrida, con el último timestamp persistido y deduplicación. Diseñámelo."
- "Aplica Eventos del sistema (nivel profesional) a mi trabajo actual con Administración de Windows: prioriza Cada evento crítico se reporta exactamente una vez"
- "Revisa mi administracion-windows y dime qué pasos de Eventos del sistema me faltan en este nivel"