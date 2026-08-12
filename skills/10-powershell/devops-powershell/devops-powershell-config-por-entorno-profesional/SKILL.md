---
name: devops-powershell-config-por-entorno-profesional
description: Config por entorno · nivel Profesional · DevOps con PowerShell. Una suite, varios entornos: configs por dev/staging/prod, precedencias y validación. Objetivo del nivel: Gobernanza de configs: esquemas por entorno, validación al arranque y secretos por entorno
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "config-por-entorno"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Config por entorno — Profesional

## Qué hace este skill

Una suite, varios entornos: configs por dev/staging/prod, precedencias y validación. En este nivel se entrega: **Gobernanza de configs: esquemas por entorno, validación al arranque y secretos por entorno**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Config por entorno** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir esquemas de config por entorno
2. Validar la config al arrancar con mensajes claros
3. Manejar secretos por entorno sin pisarlos
4. Versionar los cambios de config con su historia

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Gobernanza de configs: esquemas por entorno, validación al arranque y secretos por entorno | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Definir esquemas de config por entorno · Validar la config al arrancar con mensajes claros · Manejar secretos por entorno sin pisarlos · Versionar los cambios de config con su historia | lista | sí | 3-4 pasos |
| $criterios_clave | Una config inválida se detecta antes de arrancar · Los secretos de prod nunca llegan a dev | lista | sí | calidad verificable |
| $prompt_guia | Quiero gobernanza de configs para RYU-TUI: esquema por entorno, validación al arranque que falle con mensaje claro y secretos que nunca crucen de entorno. | texto | no | "Config por entorno" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Una config inválida se detecta antes de arrancar
- [ ] Los secretos de prod nunca llegan a dev

## Ejemplos de prompts

- "Quiero gobernanza de configs para RYU-TUI: esquema por entorno, validación al arranque que falle con mensaje claro y secretos que nunca crucen de entorno."
- "Aplica Config por entorno (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza Una config inválida se detecta antes de arrancar"
- "Revisa mi devops-powershell y dime qué pasos de Config por entorno me faltan en este nivel"