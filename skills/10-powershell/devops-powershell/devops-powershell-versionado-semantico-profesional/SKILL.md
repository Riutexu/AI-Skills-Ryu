---
name: devops-powershell-versionado-semantico-profesional
description: Versionado semántico · nivel Profesional · DevOps con PowerShell. SemVer en la práctica: versiones del proyecto, prereleases, breakings y convenciones de commits. Objetivo del nivel: Política de versiones de la suite: compatibilidad declarada, matriz de soporte y comunicación de breakings
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "versionado-semantico"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Versionado semántico — Profesional

## Qué hace este skill

SemVer en la práctica: versiones del proyecto, prereleases, breakings y convenciones de commits. En este nivel se entrega: **Política de versiones de la suite: compatibilidad declarada, matriz de soporte y comunicación de breakings**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Versionado semántico** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Declarar la política de compatibilidad por major
2. Mantener la matriz de versiones soportadas
3. Anunciar breakings con antelación
4. Automatizar la validación de la versión en el CI

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Política de versiones de la suite: compatibilidad declarada, matriz de soporte y comunicación de breakings | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Declarar la política de compatibilidad por major · Mantener la matriz de versiones soportadas · Anunciar breakings con antelación · Automatizar la validación de la versión en el CI | lista | sí | 3-4 pasos |
| $criterios_clave | Los usuarios saben qué versiones soportan qué · El CI valida que la versión del release sea correcta | lista | sí | calidad verificable |
| $prompt_guia | Quiero una política de versionado seria para RYU-TUI: compatibilidad declarada por major, matriz de soporte, aviso de breakings y validación automática en el CI. | texto | no | "Versionado semántico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los usuarios saben qué versiones soportan qué
- [ ] El CI valida que la versión del release sea correcta

## Ejemplos de prompts

- "Quiero una política de versionado seria para RYU-TUI: compatibilidad declarada por major, matriz de soporte, aviso de breakings y validación automática en el CI."
- "Aplica Versionado semántico (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza Los usuarios saben qué versiones soportan qué"
- "Revisa mi devops-powershell y dime qué pasos de Versionado semántico me faltan en este nivel"