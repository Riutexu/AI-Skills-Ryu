---
name: seguridad-powershell-logs-auditoria-basico
description: Logs de auditoría · nivel Básico · Seguridad y hardening. Qué registra PowerShell de tus acciones: logs de scriptblock, transcript y auditar el propio uso. Objetivo del nivel: Usar Start-Transcript para registrar sesiones
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "logs-auditoria"
  nivel: basico
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Logs de auditoría — Básico

## Qué hace este skill

Qué registra PowerShell de tus acciones: logs de scriptblock, transcript y auditar el propio uso. En este nivel se entrega: **Usar Start-Transcript para registrar sesiones**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logs de auditoría** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Iniciar un transcript con Start-Transcript
2. Registrar una sesión completa
3. Detener y ver el archivo generado
4. Entender qué se captura y qué no

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Usar Start-Transcript para registrar sesiones | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Iniciar un transcript con Start-Transcript · Registrar una sesión completa · Detener y ver el archivo generado · Entender qué se captura y qué no | lista | sí | 3-4 pasos |
| $criterios_clave | Generás un transcript completo de tu sesión · Sabés las limitaciones de lo capturado | lista | sí | calidad verificable |
| $prompt_guia | Quiero registrar lo que hago en PowerShell: mostrame Start-Transcript, qué captura, qué no, y cómo generar el archivo de registro. | texto | no | "Logs de auditoría" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Generás un transcript completo de tu sesión
- [ ] Sabés las limitaciones de lo capturado

## Ejemplos de prompts

- "Quiero registrar lo que hago en PowerShell: mostrame Start-Transcript, qué captura, qué no, y cómo generar el archivo de registro."
- "Aplica Logs de auditoría (nivel basico) a mi trabajo actual con Seguridad y hardening: prioriza Generás un transcript completo de tu sesión"
- "Revisa mi seguridad-powershell y dime qué pasos de Logs de auditoría me faltan en este nivel"