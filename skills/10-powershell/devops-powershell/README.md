# DevOps con PowerShell

PowerShell en el ciclo DevOps: APIs REST, pipelines con pwsh, GitHub Actions, releases y automatización de la suite de terminal.

**Stack:** PowerShell 7, GitHub Actions, REST APIs, CI/CD · **Familia:** PowerShell y automatización de Windows (10-powershell)

| Tema | Resumen | Niveles |
|---|---|---|
| **Invoke-RestMethod y APIs REST** | Consumir APIs REST desde PowerShell: métodos, headers, auth y manejo de respuestas. | [basico](/devops-powershell-rest-api-basico/) · [avanzado](/devops-powershell-rest-api-avanzado/) · [profesional](/devops-powershell-rest-api-profesional/) |
| **Parsing de JSON dinámico** | Respuestas de APIs que cambian: esquemas dinámicos, propiedades opcionales y normalización. | [basico](/devops-powershell-json-dinamico-basico/) · [avanzado](/devops-powershell-json-dinamico-avanzado/) · [profesional](/devops-powershell-json-dinamico-profesional/) |
| **Pipelines CI con pwsh** | Correr PowerShell como pipeline: shell pwsh, scripts en steps, variables y artifacts. | [basico](/devops-powershell-pipelines-ci-pwsh-basico/) · [avanzado](/devops-powershell-pipelines-ci-pwsh-avanzado/) · [profesional](/devops-powershell-pipelines-ci-pwsh-profesional/) |
| **GitHub Actions y releases** | Workflows que usan PowerShell: acciones, releases de GitHub, tags y publicación automática. | [basico](/devops-powershell-github-actions-releases-basico/) · [avanzado](/devops-powershell-github-actions-releases-avanzado/) · [profesional](/devops-powershell-github-actions-releases-profesional/) |
| **Artefactos y descargas** | Descargar y publicar artefactos: archivos de releases, checksums, versiones y verificación. | [basico](/devops-powershell-artefactos-descargas-basico/) · [avanzado](/devops-powershell-artefactos-descargas-avanzado/) · [profesional](/devops-powershell-artefactos-descargas-profesional/) |
| **Versionado semántico** | SemVer en la práctica: versiones del proyecto, prereleases, breakings y convenciones de commits. | [basico](/devops-powershell-versionado-semantico-basico/) · [avanzado](/devops-powershell-versionado-semantico-avanzado/) · [profesional](/devops-powershell-versionado-semantico-profesional/) |
| **Despliegue de scripts a entornos** | Llevar la suite de scripts de dev a producción: staging, promoción y rollback de versiones. | [basico](/devops-powershell-despliegue-scripts-entornos-basico/) · [avanzado](/devops-powershell-despliegue-scripts-entornos-avanzado/) · [profesional](/devops-powershell-despliegue-scripts-entornos-profesional/) |
| **Manejo de tiempos y retries** | Operaciones que dependen del tiempo: timeouts, retries con backoff, esperas y jitter. | [basico](/devops-powershell-tiempos-retries-basico/) · [avanzado](/devops-powershell-tiempos-retries-avanzado/) · [profesional](/devops-powershell-tiempos-retries-profesional/) |
| **Logging estructurado** | Logs que se pueden analizar: formato estructurado, niveles, contexto y consumibles por máquinas. | [basico](/devops-powershell-logging-estructurado-basico/) · [avanzado](/devops-powershell-logging-estructurado-avanzado/) · [profesional](/devops-powershell-logging-estructurado-profesional/) |
| **Config por entorno** | Una suite, varios entornos: configs por dev/staging/prod, precedencias y validación. | [basico](/devops-powershell-config-por-entorno-basico/) · [avanzado](/devops-powershell-config-por-entorno-avanzado/) · [profesional](/devops-powershell-config-por-entorno-profesional/) |
| **Health checks** | Chequear que el sistema está sano: endpoints, servicios, disco y cómo reportarlo desde scripts. | [basico](/devops-powershell-health-checks-basico/) · [avanzado](/devops-powershell-health-checks-avanzado/) · [profesional](/devops-powershell-health-checks-profesional/) |
| **Automatización de releases de terminal** | Cerrar el círculo: releases de RYU-TUI con la TUI, changelog, bump de versión y publicación. | [basico](/devops-powershell-releases-terminal-basico/) · [avanzado](/devops-powershell-releases-terminal-avanzado/) · [profesional](/devops-powershell-releases-terminal-profesional/) |

---
Generado con [skill-factory.ps1](../../tools/skill-factory.ps1) desde [catalogos/10-powershell.json](../../catalogos/10-powershell.json).