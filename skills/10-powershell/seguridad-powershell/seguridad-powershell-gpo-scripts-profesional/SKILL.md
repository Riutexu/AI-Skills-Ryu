---
name: seguridad-powershell-gpo-scripts-profesional
description: Políticas de grupo para scripts · nivel Profesional · Seguridad y hardening. GPO que gobiernan PowerShell: execution policy, logging, CLM y despliegue de scripts en dominios. Objetivo del nivel: Estrategia GPO de la suite: hardening por entorno, excepciones y auditoría continua
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "gpo-scripts"
  nivel: profesional
  stack: "ExecutionPolicy, firma de scripts, SecureString, Windows 11"
---

# Políticas de grupo para scripts — Profesional

## Qué hace este skill

GPO que gobiernan PowerShell: execution policy, logging, CLM y despliegue de scripts en dominios. En este nivel se entrega: **Estrategia GPO de la suite: hardening por entorno, excepciones y auditoría continua**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad y hardening** (ExecutionPolicy, firma de scripts, SecureString, Windows 11) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Políticas de grupo para scripts** dentro de Seguridad y hardening.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **ExecutionPolicy, firma de scripts, SecureString, Windows 11**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el baseline GPO por entorno (dev, prod)
2. Gestionar excepciones controladas
3. Auditar el estado real contra el baseline
4. Integrar la verificación al pipeline

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Estrategia GPO de la suite: hardening por entorno, excepciones y auditoría continua | texto | sí | resultado medible |
| $stack | Seguridad y hardening | texto | sí | 10-powershell/seguridad-powershell |
| $tecnologias | ExecutionPolicy, firma de scripts, SecureString, Windows 11 | texto | sí | ExecutionPolicy, firma de scripts, SecureString, Windows 11 |
| $tareas_clave | Definir el baseline GPO por entorno (dev, prod) · Gestionar excepciones controladas · Auditar el estado real contra el baseline · Integrar la verificación al pipeline | lista | sí | 3-4 pasos |
| $criterios_clave | Cada entorno cumple su baseline GPO verificado · Las excepciones son revisables y justificadas | lista | sí | calidad verificable |
| $prompt_guia | Quiero baselines GPO por entorno para los equipos de RYU-TUI: definí la config por entorno, el script de auditoría del estado real y el proceso de excepciones. | texto | no | "Políticas de grupo para scripts" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada entorno cumple su baseline GPO verificado
- [ ] Las excepciones son revisables y justificadas

## Ejemplos de prompts

- "Quiero baselines GPO por entorno para los equipos de RYU-TUI: definí la config por entorno, el script de auditoría del estado real y el proceso de excepciones."
- "Aplica Políticas de grupo para scripts (nivel profesional) a mi trabajo actual con Seguridad y hardening: prioriza Cada entorno cumple su baseline GPO verificado"
- "Revisa mi seguridad-powershell y dime qué pasos de Políticas de grupo para scripts me faltan en este nivel"