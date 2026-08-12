---
name: seguridad-powershell-logs-auditoria-profesional
description: Logs de auditoría · nivel Profesional · Seguridad y hardening. Qué registra PowerShell de tus acciones: logs de scriptblock, transcript y auditar el propio uso. Objetivo del nivel: Auditoría de la suite: registro estructurado de acciones administrativas y revisión periódica
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "logs-auditoria"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Logs de auditoría — Profesional

## Qué hace este skill

Qué registra PowerShell de tus acciones: logs de scriptblock, transcript y auditar el propio uso. En este nivel se entrega: **Auditoría de la suite: registro estructurado de acciones administrativas y revisión periódica**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logs de auditoría** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el log de auditoría de acciones de la suite
2. Registrar quién hizo qué y cuándo
3. Proteger los logs de auditoría de manipulación
4. Armar el proceso de revisión periódica

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Auditoría de la suite: registro estructurado de acciones administrativas y revisión periódica | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Diseñar el log de auditoría de acciones de la suite · Registrar quién hizo qué y cuándo · Proteger los logs de auditoría de manipulación · Armar el proceso de revisión periódica | lista | sí | 3-4 pasos |
| $criterios_clave | Cada acción administrativa de la suite queda auditada · La revisión de auditoría es un proceso definido | lista | sí | calidad verificable |
| $prompt_guia | Quiero que las acciones administrativas de RYU-TUI queden auditadas: formato de log estructurado, protección contra manipulación y un proceso de revisión periódica. | texto | no | "Logs de auditoría" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada acción administrativa de la suite queda auditada
- [ ] La revisión de auditoría es un proceso definido

## Ejemplos de prompts

- "Quiero que las acciones administrativas de RYU-TUI queden auditadas: formato de log estructurado, protección contra manipulación y un proceso de revisión periódica."
- "Aplica Logs de auditoría (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza Cada acción administrativa de la suite queda auditada"
- "Revisa mi seguridad-powershell y dime qué pasos de Logs de auditoría me faltan en este nivel"