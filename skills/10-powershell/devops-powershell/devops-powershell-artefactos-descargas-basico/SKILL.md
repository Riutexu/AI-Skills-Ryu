---
name: devops-powershell-artefactos-descargas-basico
description: Artefactos y descargas · nivel Básico · DevOps con PowerShell. Descargar y publicar artefactos: archivos de releases, checksums, versiones y verificación. Objetivo del nivel: Descargar archivos desde URLs y releases con PowerShell
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "artefactos-descargas"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Artefactos y descargas — Básico

## Qué hace este skill

Descargar y publicar artefactos: archivos de releases, checksums, versiones y verificación. En este nivel se entrega: **Descargar archivos desde URLs y releases con PowerShell**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Artefactos y descargas** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Descargar con Invoke-WebRequest
2. Descargar desde releases de GitHub
3. Verificar el tamaño y estado de la descarga
4. Extraer archivos comprimidos

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Descargar archivos desde URLs y releases con PowerShell | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Descargar con Invoke-WebRequest · Descargar desde releases de GitHub · Verificar el tamaño y estado de la descarga · Extraer archivos comprimidos | lista | sí | 3-4 pasos |
| $criterios_clave | Descargás artefactos y los extraés sin herramientas externas · Verificás que la descarga terminó completa | lista | sí | calidad verificable |
| $prompt_guia | Quiero descargar el release de una herramienta desde GitHub con PowerShell: mostrame la descarga, la verificación del archivo y la extracción. | texto | no | "Artefactos y descargas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Descargás artefactos y los extraés sin herramientas externas
- [ ] Verificás que la descarga terminó completa

## Ejemplos de prompts

- "Quiero descargar el release de una herramienta desde GitHub con PowerShell: mostrame la descarga, la verificación del archivo y la extracción."
- "Aplica Artefactos y descargas (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza Descargás artefactos y los extraés sin herramientas externas"
- "Revisa mi devops-powershell y dime qué pasos de Artefactos y descargas me faltan en este nivel"