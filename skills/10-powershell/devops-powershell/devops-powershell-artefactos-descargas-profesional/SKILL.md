---
name: devops-powershell-artefactos-descargas-profesional
description: Artefactos y descargas · nivel Profesional · DevOps con PowerShell. Descargar y publicar artefactos: archivos de releases, checksums, versiones y verificación. Objetivo del nivel: Gestión de artefactos de la suite: feed propio, pinning de versiones y verificación en instalación
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "artefactos-descargas"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Artefactos y descargas — Profesional

## Qué hace este skill

Descargar y publicar artefactos: archivos de releases, checksums, versiones y verificación. En este nivel se entrega: **Gestión de artefactos de la suite: feed propio, pinning de versiones y verificación en instalación**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Artefactos y descargas** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Publicar y consumir artefactos desde un feed propio
2. Pinear versiones exactas con checksums
3. Verificar artefactos durante la instalación
4. Auditar qué artefactos usan los equipos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Gestión de artefactos de la suite: feed propio, pinning de versiones y verificación en instalación | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Publicar y consumir artefactos desde un feed propio · Pinear versiones exactas con checksums · Verificar artefactos durante la instalación · Auditar qué artefactos usan los equipos | lista | sí | 3-4 pasos |
| $criterios_clave | La instalación verifica hash, versión y origen de cada artefacto · El pinning de versiones es reproducible | lista | sí | calidad verificable |
| $prompt_guia | Quiero que bootstrap.ps1 instale artefactos verificados: feed propio con versiones pineadas, checksums obligatorios y auditoría de lo instalado. | texto | no | "Artefactos y descargas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La instalación verifica hash, versión y origen de cada artefacto
- [ ] El pinning de versiones es reproducible

## Ejemplos de prompts

- "Quiero que bootstrap.ps1 instale artefactos verificados: feed propio con versiones pineadas, checksums obligatorios y auditoría de lo instalado."
- "Aplica Artefactos y descargas (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza La instalación verifica hash, versión y origen de cada artefacto"
- "Revisa mi devops-powershell y dime qué pasos de Artefactos y descargas me faltan en este nivel"