---
name: administracion-windows-usuarios-grupos-basico
description: Usuarios y grupos · nivel Básico · Administración de Windows. Administrar cuentas locales y grupos con LocalAccounts, y membresías sin tocar el panel. Objetivo del nivel: Listar usuarios y grupos locales y ver membresías
license: MIT
compatibility: opencode
metadata:
  familia: "10-powershell"
  tema: "usuarios-grupos"
  nivel: basico
  stack: "PowerShell 7, Windows 11, CIM, eventos"
---

# Usuarios y grupos — Básico

## Qué hace este skill

Administrar cuentas locales y grupos con LocalAccounts, y membresías sin tocar el panel. En este nivel se entrega: **Listar usuarios y grupos locales y ver membresías**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Administración de Windows** (PowerShell 7, Windows 11, CIM, eventos) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Usuarios y grupos** dentro de Administración de Windows.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PowerShell 7, Windows 11, CIM, eventos**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Listar usuarios con Get-LocalUser
2. Listar grupos con Get-LocalGroup
3. Ver miembros con Get-LocalGroupMember
4. Consultar si una cuenta está habilitada

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | Listar usuarios y grupos locales y ver membresías | texto | sí | resultado medible |
| $stack | Administración de Windows | texto | sí | 10-powershell/administracion-windows |
| $tecnologias | PowerShell 7, Windows 11, CIM, eventos | texto | sí | PowerShell 7, Windows 11, CIM, eventos |
| $tareas_clave | Listar usuarios con Get-LocalUser · Listar grupos con Get-LocalGroup · Ver miembros con Get-LocalGroupMember · Consultar si una cuenta está habilitada | lista | sí | 3-4 pasos |
| $criterios_clave | Leés usuarios y membresías sin el panel de control · Sabés qué cmdlets corresponden a cada consulta | lista | sí | calidad verificable |
| $prompt_guia | Necesito ver qué usuarios locales existen, cuáles están habilitados y en qué grupos están, sin abrir el panel. Mostrame los cmdlets de LocalAccounts. | texto | no | "Usuarios y grupos" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Leés usuarios y membresías sin el panel de control
- [ ] Sabés qué cmdlets corresponden a cada consulta

## Ejemplos de prompts

- "Necesito ver qué usuarios locales existen, cuáles están habilitados y en qué grupos están, sin abrir el panel. Mostrame los cmdlets de LocalAccounts."
- "Aplica Usuarios y grupos (nivel basico) a mi trabajo actual con Administración de Windows: prioriza Leés usuarios y membresías sin el panel de control"
- "Revisa mi administracion-windows y dime qué pasos de Usuarios y grupos me faltan en este nivel"