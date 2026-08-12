---
name: administracion-windows-eventos-sistema-basico
description: Eventos del sistema · nivel Básico · Administración de Windows. Event Log de Windows: Get-WinEvent, filtros por nivel y tiempo, y alertas basadas en errores. Objetivo del nivel: Consultar el visor de eventos desde PowerShell
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "eventos-sistema"
  nivel: basico
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Eventos del sistema — Básico

## Qué hace este skill

Event Log de Windows: Get-WinEvent, filtros por nivel y tiempo, y alertas basadas en errores. En este nivel se entrega: **Consultar el visor de eventos desde PowerShell**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos del sistema** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Listar logs disponibles con Get-WinEvent -ListLog
2. Consultar Application y System con filtros de nivel
3. Filtrar por fecha y por Id de evento
4. Contar eventos de error de las últimas 24 horas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Consultar el visor de eventos desde PowerShell | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Listar logs disponibles con Get-WinEvent -ListLog · Consultar Application y System con filtros de nivel · Filtrar por fecha y por Id de evento · Contar eventos de error de las últimas 24 horas | lista | sí | 3-4 pasos |
| $criterios_clave | Consultás errores del sistema sin abrir el visor · Tus filtros devuelven lo esperado y rápido | lista | sí | calidad verificable |
| $prompt_guia | Quiero ver los errores de la última semana del log System sin abrir el visor de eventos. Mostrame Get-WinEvent con filtros de nivel y fecha. | texto | no | "Eventos del sistema" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Consultás errores del sistema sin abrir el visor
- [ ] Tus filtros devuelven lo esperado y rápido

## Ejemplos de prompts

- "Quiero ver los errores de la última semana del log System sin abrir el visor de eventos. Mostrame Get-WinEvent con filtros de nivel y fecha."
- "Aplica Eventos del sistema (nivel basico) a mi trabajo actual con Administración de Windows: prioriza Consultás errores del sistema sin abrir el visor"
- "Revisa mi administracion-windows y dime qué pasos de Eventos del sistema me faltan en este nivel"