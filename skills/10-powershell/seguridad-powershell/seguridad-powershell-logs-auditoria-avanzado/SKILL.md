---
name: seguridad-powershell-logs-auditoria-avanzado
description: Logs de auditoría · nivel Avanzado · Seguridad y hardening. Qué registra PowerShell de tus acciones: logs de scriptblock, transcript y auditar el propio uso. Objetivo del nivel: ScriptBlock logging y module logging: configurar y consultar los logs nativos de PowerShell
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "logs-auditoria"
  nivel: avanzado
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Logs de auditoría — Avanzado

## Qué hace este skill

Qué registra PowerShell de tus acciones: logs de scriptblock, transcript y auditar el propio uso. En este nivel se entrega: **ScriptBlock logging y module logging: configurar y consultar los logs nativos de PowerShell**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logs de auditoría** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Habilitar ScriptBlock Logging por GPO o registry
2. Consultar los eventos de PowerShell en el Event Log
3. Habilitar Module Logging para módulos sensibles
4. Correlacionar eventos de una ejecución

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | ScriptBlock logging y module logging: configurar y consultar los logs nativos de PowerShell | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Habilitar ScriptBlock Logging por GPO o registry · Consultar los eventos de PowerShell en el Event Log · Habilitar Module Logging para módulos sensibles · Correlacionar eventos de una ejecución | lista | sí | 3-4 pasos |
| $criterios_clave | Las ejecuciones de scripts quedan registradas en el Event Log · Correlacionás una ejecución completa por su contexto | lista | sí | calidad verificable |
| $prompt_guia | Quiero que las ejecuciones de scripts dejen rastro en el Event Log: habilitá ScriptBlock y Module logging y mostrame cómo consultar los eventos. | texto | no | "Logs de auditoría" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las ejecuciones de scripts quedan registradas en el Event Log
- [ ] Correlacionás una ejecución completa por su contexto

## Ejemplos de prompts

- "Quiero que las ejecuciones de scripts dejen rastro en el Event Log: habilitá ScriptBlock y Module logging y mostrame cómo consultar los eventos."
- "Aplica Logs de auditoría (nivel avanzado) a mi trabajo actual con Seguridad y hardening: prioriza Las ejecuciones de scripts quedan registradas en el Event Log"
- "Revisa mi seguridad-powershell y dime qué pasos de Logs de auditoría me faltan en este nivel"