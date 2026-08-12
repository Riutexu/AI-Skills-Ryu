---
name: devops-powershell-health-checks-basico
description: Health checks · nivel Básico · DevOps con PowerShell. Chequear que el sistema está sano: endpoints, servicios, disco y cómo reportarlo desde scripts. Objetivo del nivel: Chequear la salud básica de servicios y endpoints
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "health-checks"
  nivel: basico
  stack: "PowerShell 7, GitHub Actions, REST APIs, CI/CD"
---

# Health checks — Básico

## Qué hace este skill

Chequear que el sistema está sano: endpoints, servicios, disco y cómo reportarlo desde scripts. En este nivel se entrega: **Chequear la salud básica de servicios y endpoints**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **DevOps con PowerShell** (PowerShell 7, GitHub Actions, REST APIs, CI/CD) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Health checks** dentro de DevOps con PowerShell.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, GitHub Actions, REST APIs, CI/CD**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Testear un endpoint HTTP con Invoke-WebRequest
2. Verificar el estado de un servicio
3. Chequear espacio en disco
4. Reportar ok/fallo por cada chequeo

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Chequear la salud básica de servicios y endpoints | texto | sí | resultado medible |
| $stack | DevOps con PowerShell | texto | sí | 10-powershell/devops-powershell |
| $tecnologias | PowerShell 7, GitHub Actions, REST APIs, CI/CD | texto | sí | PowerShell 7, GitHub Actions, REST APIs, CI/CD |
| $tareas_clave | Testear un endpoint HTTP con Invoke-WebRequest · Verificar el estado de un servicio · Chequear espacio en disco · Reportar ok/fallo por cada chequeo | lista | sí | 3-4 pasos |
| $criterios_clave | Tus chequeos cubren servicios, red y disco · El resultado por chequeo es claro (ok o fallo) | lista | sí | calidad verificable |
| $prompt_guia | Quiero un script de health check básico: endpoint HTTP, servicio y disco, con un resultado claro por cada chequeo. | texto | no | "Health checks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Tus chequeos cubren servicios, red y disco
- [ ] El resultado por chequeo es claro (ok o fallo)

## Ejemplos de prompts

- "Quiero un script de health check básico: endpoint HTTP, servicio y disco, con un resultado claro por cada chequeo."
- "Aplica Health checks (nivel basico) a mi trabajo actual con DevOps con PowerShell: prioriza Tus chequeos cubren servicios, red y disco"
- "Revisa mi devops-powershell y dime qué pasos de Health checks me faltan en este nivel"