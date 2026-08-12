---
name: devops-powershell-rest-api-profesional
description: Invoke-RestMethod y APIs REST · nivel Profesional · DevOps con PowerShell. Consumir APIs REST desde PowerShell: métodos, headers, auth y manejo de respuestas. Objetivo del nivel: Capa de cliente API de la suite: wrapper tipado, errores estructurados y logging de llamadas
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "rest-api"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Invoke-RestMethod y APIs REST — Profesional

## Qué hace este skill

Consumir APIs REST desde PowerShell: métodos, headers, auth y manejo de respuestas. En este nivel se entrega: **Capa de cliente API de la suite: wrapper tipado, errores estructurados y logging de llamadas**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Invoke-RestMethod y APIs REST** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un módulo cliente con funciones por endpoint
2. Traducir errores HTTP a excepciones con contexto
3. Loguear cada llamada con duración y estado
4. Probar el cliente con un mock de servidor

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Capa de cliente API de la suite: wrapper tipado, errores estructurados y logging de llamadas | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Crear un módulo cliente con funciones por endpoint · Traducir errores HTTP a excepciones con contexto · Loguear cada llamada con duración y estado · Probar el cliente con un mock de servidor | lista | sí | 3-4 pasos |
| $criterios_clave | Toda llamada API de la suite pasa por el cliente tipado · Los errores HTTP se traducen con la respuesta incluida | lista | sí | calidad verificable |
| $prompt_guia | Quiero un cliente API para RYU-TUI: wrapper por endpoint, errores HTTP traducidos con contexto, logging de llamadas y tests contra un mock de servidor. | texto | no | "Invoke-RestMethod y APIs REST" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Toda llamada API de la suite pasa por el cliente tipado
- [ ] Los errores HTTP se traducen con la respuesta incluida

## Ejemplos de prompts

- "Quiero un cliente API para RYU-TUI: wrapper por endpoint, errores HTTP traducidos con contexto, logging de llamadas y tests contra un mock de servidor."
- "Aplica Invoke-RestMethod y APIs REST (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza Toda llamada API de la suite pasa por el cliente tipado"
- "Revisa mi devops-powershell y dime qué pasos de Invoke-RestMethod y APIs REST me faltan en este nivel"