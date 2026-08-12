---
name: devops-powershell-rest-api-avanzado
description: Invoke-RestMethod y APIs REST · nivel Avanzado · DevOps con PowerShell. Consumir APIs REST desde PowerShell: métodos, headers, auth y manejo de respuestas. Objetivo del nivel: APIs con auth y paginación: tokens, refresh y recorrido de todas las páginas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "rest-api"
  nivel: avanzado
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Invoke-RestMethod y APIs REST — Avanzado

## Qué hace este skill

Consumir APIs REST desde PowerShell: métodos, headers, auth y manejo de respuestas. En este nivel se entrega: **APIs con auth y paginación: tokens, refresh y recorrido de todas las páginas**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Invoke-RestMethod y APIs REST** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Autenticar con Bearer tokens
2. Manejar la expiración y renovación de tokens
3. Recorrer APIs paginadas
4. Manejar rate limits con retries

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | APIs con auth y paginación: tokens, refresh y recorrido de todas las páginas | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Autenticar con Bearer tokens · Manejar la expiración y renovación de tokens · Recorrer APIs paginadas · Manejar rate limits con retries | lista | sí | 3-4 pasos |
| $criterios_clave | Consumís APIs autenticadas sin secretos en el código · La paginación se recorre completa | lista | sí | calidad verificable |
| $prompt_guia | Tengo que consumir una API con token y paginación: mostrame el manejo del Bearer token, la expiración y cómo recorrer todas las páginas con retries por rate limit. | texto | no | "Invoke-RestMethod y APIs REST" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Consumís APIs autenticadas sin secretos en el código
- [ ] La paginación se recorre completa

## Ejemplos de prompts

- "Tengo que consumir una API con token y paginación: mostrame el manejo del Bearer token, la expiración y cómo recorrer todas las páginas con retries por rate limit."
- "Aplica Invoke-RestMethod y APIs REST (nivel avanzado) a mi trabajo actual con DevOps con PowerShell: prioriza Consumís APIs autenticadas sin secretos en el código"
- "Revisa mi devops-powershell y dime qué pasos de Invoke-RestMethod y APIs REST me faltan en este nivel"