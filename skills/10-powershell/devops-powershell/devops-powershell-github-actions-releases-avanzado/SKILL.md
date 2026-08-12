---
name: devops-powershell-github-actions-releases-avanzado
description: GitHub Actions y releases · nivel Avanzado · DevOps con PowerShell. Workflows que usan PowerShell: acciones, releases de GitHub, tags y publicación automática. Objetivo del nivel: Releases automáticas: tags, changelog y publicación de assets desde el workflow
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "github-actions-releases"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# GitHub Actions y releases — Avanzado

## Qué hace este skill

Workflows que usan PowerShell: acciones, releases de GitHub, tags y publicación automática. En este nivel se entrega: **Releases automáticas: tags, changelog y publicación de assets desde el workflow**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **GitHub Actions y releases** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear una release desde un tag
2. Generar el changelog automáticamente
3. Subir assets (instaladores, scripts) a la release
4. Disparar el workflow solo en tags

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Releases automáticas: tags, changelog y publicación de assets desde el workflow | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Crear una release desde un tag · Generar el changelog automáticamente · Subir assets (instaladores, scripts) a la release · Disparar el workflow solo en tags | lista | sí | 3-4 pasos |
| $criterios_clave | Cada tag genera una release con sus assets · El changelog de la release refleja los cambios reales | lista | sí | calidad verificable |
| $prompt_guia | Quiero que cada tag de mi repo genere una release de GitHub con changelog y los scripts de RYU-TUI como assets: armá el workflow completo. | texto | no | "GitHub Actions y releases" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada tag genera una release con sus assets
- [ ] El changelog de la release refleja los cambios reales

## Ejemplos de prompts

- "Quiero que cada tag de mi repo genere una release de GitHub con changelog y los scripts de RYU-TUI como assets: armá el workflow completo."
- "Aplica GitHub Actions y releases (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza Cada tag genera una release con sus assets"
- "Revisa mi devops-powershell y dime qué pasos de GitHub Actions y releases me faltan en este nivel"