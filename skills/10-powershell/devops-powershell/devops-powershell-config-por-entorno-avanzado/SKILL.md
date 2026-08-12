---
name: devops-powershell-config-por-entorno-avanzado
description: Config por entorno · nivel Avanzado · DevOps con PowerShell. Una suite, varios entornos: configs por dev/staging/prod, precedencias y validación. Objetivo del nivel: Precedencias y overrides: defaults, entorno, variables y por-ambiente con merging
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "config-por-entorno"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Config por entorno — Avanzado

## Qué hace este skill

Una suite, varios entornos: configs por dev/staging/prod, precedencias y validación. En este nivel se entrega: **Precedencias y overrides: defaults, entorno, variables y por-ambiente con merging**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Config por entorno** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir la precedencia de capas de config
2. Hacer merge de defaults con overrides
3. Soportar overrides por variable de entorno
4. Documentar el resultado final de la config

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Precedencias y overrides: defaults, entorno, variables y por-ambiente con merging | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Definir la precedencia de capas de config · Hacer merge de defaults con overrides · Soportar overrides por variable de entorno · Documentar el resultado final de la config | lista | sí | 3-4 pasos |
| $criterios_clave | La precedencia está definida y se respeta · El merge produce una config válida siempre | lista | sí | calidad verificable |
| $prompt_guia | Quiero capas de config para RYU-TUI: defaults, overrides por entorno y por variable, con un merge documentado que nunca deje la config inválida. | texto | no | "Config por entorno" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La precedencia está definida y se respeta
- [ ] El merge produce una config válida siempre

## Ejemplos de prompts

- "Quiero capas de config para RYU-TUI: defaults, overrides por entorno y por variable, con un merge documentado que nunca deje la config inválida."
- "Aplica Config por entorno (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza La precedencia está definida y se respeta"
- "Revisa mi devops-powershell y dime qué pasos de Config por entorno me faltan en este nivel"