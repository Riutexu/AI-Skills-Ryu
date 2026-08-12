---
name: devops-powershell-logging-estructurado-basico
description: Logging estructurado · nivel Básico · DevOps con PowerShell. Logs que se pueden analizar: formato estructurado, niveles, contexto y consumibles por máquinas. Objetivo del nivel: Escribir logs con formato consistente y niveles
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "logging-estructurado"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Logging estructurado — Básico

## Qué hace este skill

Logs que se pueden analizar: formato estructurado, niveles, contexto y consumibles por máquinas. En este nivel se entrega: **Escribir logs con formato consistente y niveles**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logging estructurado** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir un formato de línea de log
2. Implementar niveles (INFO, WARN, ERROR)
3. Agregar timestamp a cada línea
4. Escribir logs a archivo desde los scripts

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Escribir logs con formato consistente y niveles | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Definir un formato de línea de log · Implementar niveles (INFO, WARN, ERROR) · Agregar timestamp a cada línea · Escribir logs a archivo desde los scripts | lista | sí | 3-4 pasos |
| $criterios_clave | Todas tus líneas de log tienen el mismo formato · Los niveles permiten filtrar fácil | lista | sí | calidad verificable |
| $prompt_guia | Quiero que mis scripts logueen de forma consistente: definí el formato de línea con timestamp y nivel, y mostrame el helper que escribe al archivo. | texto | no | "Logging estructurado" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todas tus líneas de log tienen el mismo formato
- [ ] Los niveles permiten filtrar fácil

## Ejemplos de prompts

- "Quiero que mis scripts logueen de forma consistente: definí el formato de línea con timestamp y nivel, y mostrame el helper que escribe al archivo."
- "Aplica Logging estructurado (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza Todas tus líneas de log tienen el mismo formato"
- "Revisa mi devops-powershell y dime qué pasos de Logging estructurado me faltan en este nivel"