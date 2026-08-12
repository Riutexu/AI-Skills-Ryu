---
name: devops-powershell-json-dinamico-profesional
description: Parsing de JSON dinámico · nivel Profesional · DevOps con PowerShell. Respuestas de APIs que cambian: esquemas dinámicos, propiedades opcionales y normalización. Objetivo del nivel: Capa de datos robusta: validación de esquema de respuestas, versionado de contractos y fallos diagnósticos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "json-dinamico"
  nivel: profesional
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Parsing de JSON dinámico — Profesional

## Qué hace este skill

Respuestas de APIs que cambian: esquemas dinámicos, propiedades opcionales y normalización. En este nivel se entrega: **Capa de datos robusta: validación de esquema de respuestas, versionado de contractos y fallos diagnósticos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Parsing de JSON dinámico** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Validar el esquema de cada respuesta recibida
2. Versionar los contractos de API de la suite
3. Fallar con contexto del endpoint y la versión
4. Probar contra respuestas de cada versión

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | Capa de datos robusta: validación de esquema de respuestas, versionado de contractos y fallos diagnósticos | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Validar el esquema de cada respuesta recibida · Versionar los contractos de API de la suite · Fallar con contexto del endpoint y la versión · Probar contra respuestas de cada versión | lista | sí | 3-4 pasos |
| $criterios_clave | Una respuesta fuera de contrato falla con mensaje accionable · Los contractos están versionados con el código | lista | sí | calidad verificable |
| $prompt_guia | Quiero una capa de datos robusta para los endpoints de RYU-TUI: validación de esquema de respuestas, contractos versionados y fallos que digan exactamente qué cambió. | texto | no | "Parsing de JSON dinámico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Una respuesta fuera de contrato falla con mensaje accionable
- [ ] Los contractos están versionados con el código

## Ejemplos de prompts

- "Quiero una capa de datos robusta para los endpoints de RYU-TUI: validación de esquema de respuestas, contractos versionados y fallos que digan exactamente qué cambió."
- "Aplica Parsing de JSON dinámico (nivel profesional) a mi trabajo actual con DevOps con PowerShell: prioriza Una respuesta fuera de contrato falla con mensaje accionable"
- "Revisa mi devops-powershell y dime qué pasos de Parsing de JSON dinámico me faltan en este nivel"