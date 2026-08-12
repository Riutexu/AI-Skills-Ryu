---
name: administracion-windows-redes-puertos-basico
description: Redes y puertos · nivel Básico · Administración de Windows. Diagnóstico de red: interfaces, conexiones TCP, puertos en escucha y conectividad sin herramientas extra. Objetivo del nivel: Ver interfaces, IPs y conexiones activas con cmdlets nativos
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "redes-puertos"
  nivel: basico
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Redes y puertos — Básico

## Qué hace este skill

Diagnóstico de red: interfaces, conexiones TCP, puertos en escucha y conectividad sin herramientas extra. En este nivel se entrega: **Ver interfaces, IPs y conexiones activas con cmdlets nativos**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Redes y puertos** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Listar interfaces con Get-NetAdapter y Get-NetIPAddress
2. Ver conexiones TCP con Get-NetTCPConnection
3. Saber qué puertos están en escucha
4. Testear conectividad con Test-NetConnection

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Ver interfaces, IPs y conexiones activas con cmdlets nativos | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Listar interfaces con Get-NetAdapter y Get-NetIPAddress · Ver conexiones TCP con Get-NetTCPConnection · Saber qué puertos están en escucha · Testear conectividad con Test-NetConnection | lista | sí | 3-4 pasos |
| $criterios_clave | Conocés las IPs y puertos en escucha de tu máquina · Testeás un puerto remoto sin herramientas extra | lista | sí | calidad verificable |
| $prompt_guia | Necesito saber qué puertos tiene abiertos mi máquina y qué proceso los usa, más testear si un servidor responde en el 443. Mostrame los cmdlets de red. | texto | no | "Redes y puertos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Conocés las IPs y puertos en escucha de tu máquina
- [ ] Testeás un puerto remoto sin herramientas extra

## Ejemplos de prompts

- "Necesito saber qué puertos tiene abiertos mi máquina y qué proceso los usa, más testear si un servidor responde en el 443. Mostrame los cmdlets de red."
- "Aplica Redes y puertos (nivel basico) a mi trabajo actual con Administración de Windows: prioriza Conocés las IPs y puertos en escucha de tu máquina"
- "Revisa mi administracion-windows y dime qué pasos de Redes y puertos me faltan en este nivel"