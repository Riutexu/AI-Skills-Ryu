---
name: devops-powershell-health-checks-profesional
description: Health checks · nivel Profesional · DevOps con PowerShell. Chequear que el sistema está sano: endpoints, servicios, disco y cómo reportarlo desde scripts. Objetivo del nivel: Health check como comando de la suite: estado integrado en la TUI, historial y alertas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "health-checks"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Health checks — Profesional

## Qué hace este skill

Chequear que el sistema está sano: endpoints, servicios, disco y cómo reportarlo desde scripts. En este nivel se entrega: **Health check como comando de la suite: estado integrado en la TUI, historial y alertas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Health checks** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Integrar los health checks como comando de la TUI
2. Mantener historial de estados de salud
3. Detectar regresiones comparando con el historial
4. Configurar los chequeos desde la config

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Health check como comando de la suite: estado integrado en la TUI, historial y alertas | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Integrar los health checks como comando de la TUI · Mantener historial de estados de salud · Detectar regresiones comparando con el historial · Configurar los chequeos desde la config | lista | sí | 3-4 pasos |
| $criterios_clave | El comando de salud muestra estado actual e historial · Las regresiones se detectan automáticamente | lista | sí | calidad verificable |
| $prompt_guia | Quiero un comando de salud en RYU-TUI: chequeos configurables, historial de estados y detección automática de regresiones. | texto | no | "Health checks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El comando de salud muestra estado actual e historial
- [ ] Las regresiones se detectan automáticamente

## Ejemplos de prompts

- "Quiero un comando de salud en RYU-TUI: chequeos configurables, historial de estados y detección automática de regresiones."
- "Aplica Health checks (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza El comando de salud muestra estado actual e historial"
- "Revisa mi devops-powershell y dime qué pasos de Health checks me faltan en este nivel"