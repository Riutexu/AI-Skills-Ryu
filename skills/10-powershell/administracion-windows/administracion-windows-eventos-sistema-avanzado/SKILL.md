---
name: administracion-windows-eventos-sistema-avanzado
description: Eventos del sistema · nivel Avanzado · Administración de Windows. Event Log de Windows: Get-WinEvent, filtros por nivel y tiempo, y alertas basadas en errores. Objetivo del nivel: Filtros eficientes con FilterHashtable y detección de patrones de falla
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "eventos-sistema"
  nivel: avanzado
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Eventos del sistema — Avanzado

## Qué hace este skill

Event Log de Windows: Get-WinEvent, filtros por nivel y tiempo, y alertas basadas en errores. En este nivel se entrega: **Filtros eficientes con FilterHashtable y detección de patrones de falla**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Eventos del sistema** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Usar FilterHashtable en vez de Where-Object sobre todo
2. Buscar eventos por Id específico y proveedor
3. Agrupar errores por Id para ver patrones
4. Exportar resultados a CSV para análisis

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Filtros eficientes con FilterHashtable y detección de patrones de falla | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Usar FilterHashtable en vez de Where-Object sobre todo · Buscar eventos por Id específico y proveedor · Agrupar errores por Id para ver patrones · Exportar resultados a CSV para análisis | lista | sí | 3-4 pasos |
| $criterios_clave | Las consultas usan filtros del servidor, no del cliente · Identificás qué errores se repiten más | lista | sí | calidad verificable |
| $prompt_guia | Mi máquina reinicia sola y quiero rastrearlo: consultá el evento 41 de Kernel-Power y patrones de cierre inesperado, agrupá por Id y exportá a CSV. | texto | no | "Eventos del sistema" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las consultas usan filtros del servidor, no del cliente
- [ ] Identificás qué errores se repiten más

## Ejemplos de prompts

- "Mi máquina reinicia sola y quiero rastrearlo: consultá el evento 41 de Kernel-Power y patrones de cierre inesperado, agrupá por Id y exportá a CSV."
- "Aplica Eventos del sistema (nivel avanzado) a mi trabajo actual con Administración de Windows: prioriza Las consultas usan filtros del servidor, no del cliente"
- "Revisa mi administracion-windows y dime qué pasos de Eventos del sistema me faltan en este nivel"