---
name: devops-powershell-rest-api-basico
description: Invoke-RestMethod y APIs REST · nivel Básico · DevOps con PowerShell. Consumir APIs REST desde PowerShell: métodos, headers, auth y manejo de respuestas. Objetivo del nivel: Hacer llamadas GET y POST a una API REST
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "rest-api"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Invoke-RestMethod y APIs REST — Básico

## Qué hace este skill

Consumir APIs REST desde PowerShell: métodos, headers, auth y manejo de respuestas. En este nivel se entrega: **Hacer llamadas GET y POST a una API REST**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Invoke-RestMethod y APIs REST** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Hacer GET con Invoke-RestMethod
2. Hacer POST con cuerpo JSON
3. Manejar headers y autenticación básica
4. Entender la diferencia con Invoke-WebRequest

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Hacer llamadas GET y POST a una API REST | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Hacer GET con Invoke-RestMethod · Hacer POST con cuerpo JSON · Manejar headers y autenticación básica · Entender la diferencia con Invoke-WebRequest | lista | sí | 3-4 pasos |
| $criterios_clave | Consumís una API pública con dos líneas · Sabés cuándo usar RestMethod vs WebRequest | lista | sí | calidad verificable |
| $prompt_guia | Quiero consumir una API REST desde PowerShell: mostrame GET y POST con Invoke-RestMethod, headers y el manejo de la respuesta como objetos. | texto | no | "Invoke-RestMethod y APIs REST" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Consumís una API pública con dos líneas
- [ ] Sabés cuándo usar RestMethod vs WebRequest

## Ejemplos de prompts

- "Quiero consumir una API REST desde PowerShell: mostrame GET y POST con Invoke-RestMethod, headers y el manejo de la respuesta como objetos."
- "Aplica Invoke-RestMethod y APIs REST (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza Consumís una API pública con dos líneas"
- "Revisa mi devops-powershell y dime qué pasos de Invoke-RestMethod y APIs REST me faltan en este nivel"