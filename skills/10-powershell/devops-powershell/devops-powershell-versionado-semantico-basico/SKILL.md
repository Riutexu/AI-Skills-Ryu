---
name: devops-powershell-versionado-semantico-basico
description: Versionado semántico · nivel Básico · DevOps con PowerShell. SemVer en la práctica: versiones del proyecto, prereleases, breakings y convenciones de commits. Objetivo del nivel: Aplicar SemVer a los releases del proyecto
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "versionado-semantico"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Versionado semántico — Básico

## Qué hace este skill

SemVer en la práctica: versiones del proyecto, prereleases, breakings y convenciones de commits. En este nivel se entrega: **Aplicar SemVer a los releases del proyecto**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versionado semántico** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Versionar con major.minor.patch
2. Decidir cuándo es breaking
3. Versionar prereleases con sufijo
4. Ver el historial de versiones del proyecto

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Aplicar SemVer a los releases del proyecto | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Versionar con major.minor.patch · Decidir cuándo es breaking · Versionar prereleases con sufijo · Ver el historial de versiones del proyecto | lista | sí | 3-4 pasos |
| $criterios_clave | Cada release tiene su versión correcta según SemVer · Los cambios breaking son claramente identificables | lista | sí | calidad verificable |
| $prompt_guia | Quiero versionar bien mi proyecto: explicame SemVer con ejemplos de cuándo subir cada número y cómo marcar prereleases. | texto | no | "Versionado semántico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada release tiene su versión correcta según SemVer
- [ ] Los cambios breaking son claramente identificables

## Ejemplos de prompts

- "Quiero versionar bien mi proyecto: explicame SemVer con ejemplos de cuándo subir cada número y cómo marcar prereleases."
- "Aplica Versionado semántico (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza Cada release tiene su versión correcta según SemVer"
- "Revisa mi devops-powershell y dime qué pasos de Versionado semántico me faltan en este nivel"