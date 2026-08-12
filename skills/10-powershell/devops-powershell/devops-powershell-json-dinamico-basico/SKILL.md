---
name: devops-powershell-json-dinamico-basico
description: Parsing de JSON dinámico · nivel Básico · DevOps con PowerShell. Respuestas de APIs que cambian: esquemas dinámicos, propiedades opcionales y normalización. Objetivo del nivel: Navegar respuestas JSON con estructura conocida
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "json-dinamico"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Parsing de JSON dinámico — Básico

## Qué hace este skill

Respuestas de APIs que cambian: esquemas dinámicos, propiedades opcionales y normalización. En este nivel se entrega: **Navegar respuestas JSON con estructura conocida**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Parsing de JSON dinámico** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Acceder a propiedades anidadas
2. Recorrer arrays dentro de la respuesta
3. Entender los tipos que genera ConvertFrom-Json
4. Evitar errores por null

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Navegar respuestas JSON con estructura conocida | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Acceder a propiedades anidadas · Recorrer arrays dentro de la respuesta · Entender los tipos que genera ConvertFrom-Json · Evitar errores por null | lista | sí | 3-4 pasos |
| $criterios_clave | Navegás respuestas anidadas sin romperte · Manejás campos que vienen null | lista | sí | calidad verificable |
| $prompt_guia | Quiero parsear la respuesta de una API con estructura anidada: mostrame cómo navegarla, recorrer sus arrays y qué cuidados tener con los null. | texto | no | "Parsing de JSON dinámico" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Navegás respuestas anidadas sin romperte
- [ ] Manejás campos que vienen null

## Ejemplos de prompts

- "Quiero parsear la respuesta de una API con estructura anidada: mostrame cómo navegarla, recorrer sus arrays y qué cuidados tener con los null."
- "Aplica Parsing de JSON dinámico (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza Navegás respuestas anidadas sin romperte"
- "Revisa mi devops-powershell y dime qué pasos de Parsing de JSON dinámico me faltan en este nivel"