---
name: devops-powershell-config-por-entorno-basico
description: Config por entorno · nivel Básico · DevOps con PowerShell. Una suite, varios entornos: configs por dev/staging/prod, precedencias y validación. Objetivo del nivel: Separar la configuración por entorno
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "config-por-entorno"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Config por entorno — Básico

## Qué hace este skill

Una suite, varios entornos: configs por dev/staging/prod, precedencias y validación. En este nivel se entrega: **Separar la configuración por entorno**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Config por entorno** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear configs por entorno (dev, prod)
2. Elegir el entorno con una variable
3. Cargar la config correcta al arrancar
4. Evitar duplicar la config base

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Separar la configuración por entorno | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Crear configs por entorno (dev, prod) · Elegir el entorno con una variable · Cargar la config correcta al arrancar · Evitar duplicar la config base | lista | sí | 3-4 pasos |
| $criterios_clave | Cambiar de entorno cambia la config sin tocar código · La config base no se duplica por entorno | lista | sí | calidad verificable |
| $prompt_guia | Quiero que RYU-TUI use configs distintas en dev y prod: mostrame cómo estructurar las carpetas de config y cómo elegir el entorno al arrancar. | texto | no | "Config por entorno" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cambiar de entorno cambia la config sin tocar código
- [ ] La config base no se duplica por entorno

## Ejemplos de prompts

- "Quiero que RYU-TUI use configs distintas en dev y prod: mostrame cómo estructurar las carpetas de config y cómo elegir el entorno al arrancar."
- "Aplica Config por entorno (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza Cambiar de entorno cambia la config sin tocar código"
- "Revisa mi devops-powershell y dime qué pasos de Config por entorno me faltan en este nivel"