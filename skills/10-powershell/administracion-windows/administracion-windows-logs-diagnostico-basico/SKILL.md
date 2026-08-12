---
name: administracion-windows-logs-diagnostico-basico
description: Logs y diagnóstico · nivel Básico · Administración de Windows. Diagnóstico de sistema: archivos de log, reporte de estado de salud y recolección de evidencia. Objetivo del nivel: Recolectar la información básica de diagnóstico de una máquina
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "logs-diagnostico"
  nivel: basico
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Logs y diagnóstico — Básico

## Qué hace este skill

Diagnóstico de sistema: archivos de log, reporte de estado de salud y recolección de evidencia. En este nivel se entrega: **Recolectar la información básica de diagnóstico de una máquina**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logs y diagnóstico** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Recolectar versión de SO, hardware y uptime
2. Leer archivos de log de apps propias
3. Consultar errores recientes del sistema
4. Guardar todo en un archivo de diagnóstico

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Recolectar la información básica de diagnóstico de una máquina | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Recolectar versión de SO, hardware y uptime · Leer archivos de log de apps propias · Consultar errores recientes del sistema · Guardar todo en un archivo de diagnóstico | lista | sí | 3-4 pasos |
| $criterios_clave | Generás un reporte de diagnóstico completo en un archivo · El reporte incluye fecha y contexto de la máquina | lista | sí | calidad verificable |
| $prompt_guia | Quiero un script que genere un reporte de diagnóstico de mi equipo: SO, hardware, uptime, errores recientes y logs de RYU-TUI, todo en un archivo ordenado. | texto | no | "Logs y diagnóstico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Generás un reporte de diagnóstico completo en un archivo
- [ ] El reporte incluye fecha y contexto de la máquina

## Ejemplos de prompts

- "Quiero un script que genere un reporte de diagnóstico de mi equipo: SO, hardware, uptime, errores recientes y logs de RYU-TUI, todo en un archivo ordenado."
- "Aplica Logs y diagnóstico (nivel basico) a mi trabajo actual con Administración de Windows: prioriza Generás un reporte de diagnóstico completo en un archivo"
- "Revisa mi administracion-windows y dime qué pasos de Logs y diagnóstico me faltan en este nivel"